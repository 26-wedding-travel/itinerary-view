const NETWORK_PROBE_TIMEOUT_MS = 4500;
const NETWORK_PROBES = [
  {
    id: "app-origin",
    label: "앱 원본",
    stage: "PWA → 앱 서버",
    url: "./manifest.webmanifest",
    mode: "same-origin",
    passDetail: "현재 앱이 배포된 같은 서버까지는 요청이 도착했습니다.",
    failDetail: "앱 원본까지 새 요청이 닿지 않습니다. 완전 오프라인이거나 포털/방화벽에 막혔을 수 있습니다.",
  },
  {
    id: "external-ip",
    label: "외부 IP HTTPS",
    stage: "Wi-Fi → 외부 IP",
    url: "https://1.1.1.1/cdn-cgi/trace",
    mode: "no-cors",
    passDetail: "DNS 없이 외부 IP로 HTTPS 연결이 됩니다.",
    failDetail: "외부 IP로도 HTTPS 연결이 실패합니다.",
  },
  {
    id: "external-dns",
    label: "외부 DNS HTTPS",
    stage: "DNS → 외부 HTTPS",
    url: "https://one.one.one.one/cdn-cgi/trace",
    mode: "no-cors",
    passDetail: "도메인 이름을 해석해서 외부 HTTPS 연결이 됩니다.",
    failDetail: "도메인 기반 외부 HTTPS 연결이 실패합니다.",
  },
  {
    id: "google-204",
    label: "Google 연결성",
    stage: "공개 연결성 체크",
    url: "https://www.gstatic.com/generate_204",
    mode: "no-cors",
    passDetail: "Android/Chrome 계열 연결성 체크 엔드포인트에 닿았습니다.",
    failDetail: "Google 연결성 체크 엔드포인트에 닿지 못했습니다.",
  },
  {
    id: "apple-success",
    label: "Apple 연결성",
    stage: "iPhone 연결성 체크",
    url: "https://www.apple.com/library/test/success.html",
    mode: "no-cors",
    passDetail: "Apple 연결성 체크 엔드포인트에 닿았습니다.",
    failDetail: "Apple 연결성 체크 엔드포인트에 닿지 못했습니다.",
  },
];

const networkEls = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheNetworkDiagnosticElements();
  initNetworkDiagnostics();
});

function cacheNetworkDiagnosticElements() {
  networkEls.runButton = document.querySelector("#network-diagnostics-run");
  networkEls.summary = document.querySelector("#network-diagnostics-summary");
  networkEls.results = document.querySelector("#network-diagnostics-list");
  networkEls.report = document.querySelector("#network-diagnostics-report");
  networkEls.copyButton = document.querySelector("#network-copy-report");
}

function initNetworkDiagnostics() {
  if (!networkEls.runButton) return;

  networkEls.runButton.addEventListener("click", () => {
    runNetworkDiagnostics();
  });

  if (networkEls.copyButton) {
    networkEls.copyButton.addEventListener("click", () => {
      const report = networkEls.report?.value;
      if (!report) return;

      window.navigator?.clipboard?.writeText(report).catch(() => {});
    });
  }
}

async function runNetworkDiagnostics() {
  if (!networkEls.runButton || !networkEls.summary || !networkEls.results) return null;

  networkEls.runButton.disabled = true;
  networkEls.runButton.textContent = "진단 중";
  networkEls.summary.className = "network-diagnostics-summary is-running";
  networkEls.summary.textContent = "앱 원본과 외부 HTTPS 경로를 확인하는 중입니다.";
  networkEls.results.replaceChildren();

  const browserSignal = getBrowserOnlineSignal();
  renderNetworkDiagnostics([browserSignal], null);

  const probeResults = await Promise.all(NETWORK_PROBES.map((probe) => runNetworkProbe(probe)));
  const results = [browserSignal, getServiceWorkerSignal(), ...probeResults];
  const summary = summarizeNetworkDiagnostics(results);

  renderNetworkDiagnostics(results, summary);
  networkEls.runButton.disabled = false;
  networkEls.runButton.textContent = "다시 진단";

  return { results, summary };
}

function getBrowserOnlineSignal() {
  const isOffline = window.navigator?.onLine === false;

  return {
    id: "browser-online",
    label: "브라우저 온라인 신호",
    stage: "iOS 상태",
    status: isOffline ? "warn" : "pass",
    detail: isOffline
      ? "iOS가 브라우저를 오프라인으로 보고합니다."
      : "iOS가 브라우저를 오프라인으로 보고하지 않습니다.",
  };
}

function getServiceWorkerSignal() {
  const hasServiceWorker = Boolean(window.navigator?.serviceWorker);

  return {
    id: "pwa-cache",
    label: "PWA 캐시",
    stage: "오프라인 앱",
    status: hasServiceWorker ? "pass" : "warn",
    detail: hasServiceWorker
      ? "앱 셸은 캐시될 수 있어 제한망에서도 진단 화면을 열 수 있습니다."
      : "이 브라우저에서는 서비스 워커를 사용할 수 없습니다.",
  };
}

async function runNetworkProbe(probe) {
  const startedAt = Date.now();
  const url = addCacheBust(probe.url);

  try {
    if (typeof fetch !== "function") {
      throw new Error("fetch unavailable");
    }

    const request = fetch(url, {
      cache: "no-store",
      credentials: "omit",
      mode: probe.mode === "no-cors" ? "no-cors" : "same-origin",
    });
    const response = await withTimeout(request, NETWORK_PROBE_TIMEOUT_MS);
    const latencyMs = Date.now() - startedAt;

    if (probe.mode !== "no-cors" && response && response.ok === false) {
      return createProbeResult(probe, "fail", latencyMs, `HTTP ${response.status}`);
    }

    return createProbeResult(probe, "pass", latencyMs, probe.passDetail);
  } catch (error) {
    const latencyMs = Date.now() - startedAt;
    return createProbeResult(probe, "fail", latencyMs, `${probe.failDetail} (${getErrorMessage(error)})`);
  }
}

function createProbeResult(probe, status, latencyMs, detail) {
  return {
    id: probe.id,
    label: probe.label,
    stage: probe.stage,
    status,
    latencyMs,
    detail,
  };
}

function withTimeout(promise, timeoutMs) {
  let timeoutId;
  const timeout = new Promise((_, reject) => {
    timeoutId = window.setTimeout(() => reject(new Error("timeout")), timeoutMs);
  });

  return Promise.race([promise, timeout]).finally(() => {
    window.clearTimeout?.(timeoutId);
  });
}

function addCacheBust(url) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}diag=${Date.now()}`;
}

function getErrorMessage(error) {
  if (!error) return "unknown";
  if (error.name === "AbortError") return "timeout";
  return error.message || String(error);
}

function summarizeNetworkDiagnostics(results) {
  const byId = Object.fromEntries(results.map((result) => [result.id, result]));
  const appOrigin = byId["app-origin"];
  const externalIp = byId["external-ip"];
  const externalDns = byId["external-dns"];
  const externalResults = ["external-ip", "external-dns", "google-204", "apple-success"]
    .map((id) => byId[id])
    .filter(Boolean);
  const externalPasses = externalResults.filter((result) => result.status === "pass");
  const externalFailures = externalResults.filter((result) => result.status === "fail");
  const checkedAt = new Date().toLocaleString("ko-KR", { hour12: false });

  if (externalResults.length && externalPasses.length === externalResults.length) {
    return buildNetworkSummary({
      key: "online",
      level: "ok",
      title: "외부 인터넷 정상",
      body: "공개 HTTPS 엔드포인트가 모두 응답했습니다. 문제가 남아 있다면 특정 앱/사이트 차단이나 일시 장애를 의심하세요.",
      checkedAt,
      results,
    });
  }

  if (externalIp?.status === "pass" && externalDns?.status === "fail") {
    return buildNetworkSummary({
      key: "dns-blocked",
      level: "warn",
      title: "DNS 문제 가능성",
      body: "외부 IP는 닿지만 도메인 이름 기반 연결이 실패했습니다. 호텔 DNS가 죽었거나 잘못된 DNS를 받은 상태일 수 있습니다.",
      checkedAt,
      results,
    });
  }

  if (appOrigin?.status === "pass" && externalResults.length && externalFailures.length === externalResults.length) {
    return buildNetworkSummary({
      key: "gateway-blocked",
      level: "bad",
      title: "호텔 공유기 또는 상위 인터넷에서 막힘",
      body:
        "PWA/앱 경로는 살아 있지만 외부 HTTPS가 모두 실패했습니다. 아이폰 Wi-Fi 화면에서 IP와 라우터가 보인다면 Wi-Fi 연결/DHCP 이후 호텔 게이트웨이 쪽 문제로 보는 게 맞습니다.",
      checkedAt,
      results,
    });
  }

  if (externalPasses.length > 0 && externalFailures.length > 0) {
    return buildNetworkSummary({
      key: "partial",
      level: "warn",
      title: "일부 외부 연결만 성공",
      body: "인터넷이 완전히 끊긴 상태는 아니지만 일부 공개 엔드포인트가 실패했습니다. 호텔 방화벽, DNS, 품질 저하, 일시 장애 가능성이 있습니다.",
      checkedAt,
      results,
    });
  }

  return buildNetworkSummary({
    key: "offline",
    level: "bad",
    title: "외부 연결 확인 실패",
    body: "앱 원본과 외부 HTTPS 경로를 충분히 확인하지 못했습니다. 와이파이 재연결 후 다시 진단하거나 프론트에 공유기 리셋을 요청하세요.",
    checkedAt,
    results,
  });
}

function buildNetworkSummary({ key, level, title, body, checkedAt, results }) {
  const report = [
    "Wi-Fi diagnostic report",
    `Checked at: ${checkedAt}`,
    `Diagnosis: ${title}`,
    `Details: ${body}`,
    'Symptom: iPhone is connected to hotel Wi-Fi but shows "No Internet Connection".',
    "Note: Browser PWAs cannot read Wi-Fi signal strength, gateway ping, DNS server, or traceroute on iOS.",
    "Request for front desk: Please reset/reauthorize Wi-Fi access for this room/device and check the hotel router/gateway upstream Internet.",
    "",
    "Probe results:",
    ...results.map((result) => {
      const latency = Number.isFinite(result.latencyMs) ? `, ${result.latencyMs}ms` : "";
      return `- ${result.label}: ${result.status.toUpperCase()}${latency} - ${result.detail}`;
    }),
    "",
    "프론트 요청: 이 방/기기의 Wi-Fi 인증을 초기화하고 호텔 공유기/게이트웨이의 외부 인터넷 연결을 확인해 주세요.",
  ].join("\n");

  return { key, level, title, body, checkedAt, report };
}

function renderNetworkDiagnostics(results, summary) {
  if (!networkEls.results) return;

  const items = results.map((result) => {
    const item = document.createElement("li");
    item.className = `network-diagnostics-item is-${result.status}`;

    const heading = document.createElement("div");
    heading.className = "network-diagnostics-item-heading";

    const label = document.createElement("strong");
    label.textContent = result.label;

    const status = document.createElement("span");
    status.textContent = getNetworkStatusLabel(result.status, result.latencyMs);

    const stage = document.createElement("span");
    stage.className = "network-diagnostics-stage";
    stage.textContent = result.stage;

    const detail = document.createElement("p");
    detail.textContent = result.detail;

    heading.append(label, status);
    item.append(heading, stage, detail);
    return item;
  });

  networkEls.results.replaceChildren(...items);

  if (!summary || !networkEls.summary) return;

  networkEls.summary.className = `network-diagnostics-summary is-${summary.level}`;
  networkEls.summary.replaceChildren();

  const title = document.createElement("strong");
  title.textContent = summary.title;

  const body = document.createElement("span");
  body.textContent = summary.body;

  networkEls.summary.append(title, body);

  if (networkEls.report) {
    networkEls.report.value = summary.report;
  }
}

function getNetworkStatusLabel(status, latencyMs) {
  const label = {
    pass: "성공",
    warn: "주의",
    fail: "실패",
  }[status] || status;

  if (!Number.isFinite(latencyMs)) return label;
  return `${label} · ${latencyMs}ms`;
}
