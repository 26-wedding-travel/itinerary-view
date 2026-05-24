const itinerary = [
  {
    day: 1,
    date: "6월 29일 (월)",
    title: "바르셀로나 도착",
    city: "바르셀로나",
    route: "BCN 공항 → 고딕지구 숙소",
    lodging: "Duquesa de Cardona 4* Sup",
    stops: [
      { name: "BCN 공항 T2", note: "TW407 19:00 도착", coords: [41.3031, 2.0734] },
      { name: "Duquesa de Cardona", note: "체크인", coords: [41.3802, 2.1815] },
      { name: "고딕지구", note: "저녁 산책/타파스", coords: [41.3839, 2.1763] },
    ],
    timeline: [
      ["19:00", "바르셀로나 도착", "BCN 공항 T2", "TW407편"],
      ["20:30", "숙소 체크인", "Duquesa de Cardona", "공항버스 또는 택시"],
      ["21:30", "저녁 식사", "고딕지구 주변", "타파스 추천"],
    ],
    transport: ["공항 → 숙소: Aerobus 또는 택시", "도착일이라 숙소 주변만 가볍게 이동"],
  },
  {
    day: 2,
    date: "6월 30일 (화)",
    title: "가우디 핵심 코스",
    city: "바르셀로나",
    route: "숙소 → 사그라다 파밀리아 → 그라시아 거리 → 고딕지구",
    lodging: "Duquesa de Cardona 4* Sup",
    stops: [
      { name: "Duquesa de Cardona", note: "출발", coords: [41.3802, 2.1815] },
      { name: "Sagrada Familia", note: "09:30 입장", coords: [41.4036, 2.1744] },
      { name: "Casa Batllo", note: "오후 산책", coords: [41.3917, 2.1649] },
      { name: "Casa Mila", note: "가우디 건축물", coords: [41.3954, 2.162] },
      { name: "고딕지구", note: "야경 투어", coords: [41.3839, 2.1763] },
    ],
    timeline: [
      ["09:30", "사그라다 파밀리아 입장", "Sagrada Familia", "예약 완료"],
      ["10:00", "탄생의 파사드 타워", "Nativity facade tower", "타워 입장"],
      ["점심", "점심 식사", "그라시아 거리 주변", ""],
      ["오후", "카사 바트요/카사 밀라", "Passeig de Gracia", "외관 중심 산책"],
      ["저녁", "야경 투어", "고딕지구", "대성당, 왕의 광장"],
    ],
    transport: ["도보 + 지하철 조합", "사그라다 파밀리아 시간 고정"],
  },
  {
    day: 3,
    date: "7월 1일 (수)",
    title: "구엘 공원과 해변",
    city: "바르셀로나",
    route: "숙소 → 구엘 공원 → 람블라스 → 바르셀로네타",
    lodging: "Duquesa de Cardona 4* Sup",
    stops: [
      { name: "Duquesa de Cardona", note: "출발", coords: [41.3802, 2.1815] },
      { name: "Park Guell", note: "오전", coords: [41.4145, 2.1527] },
      { name: "La Rambla", note: "오후 산책", coords: [41.3809, 2.1732] },
      { name: "La Boqueria", note: "시장", coords: [41.3818, 2.1716] },
      { name: "Barceloneta Beach", note: "저녁 전 해변", coords: [41.3784, 2.1925] },
    ],
    timeline: [
      ["오전", "구엘 공원", "Park Guell", "사전예약 필요"],
      ["점심", "점심 식사", "그라시아 지구", ""],
      ["오후", "람블라스 거리 산책", "La Rambla", "보케리아 시장"],
      ["오후", "바르셀로네타 해변", "Barceloneta", "지중해 감상"],
      ["저녁", "마지막 밤 디너", "항구 주변", "해산물 파에야"],
    ],
    transport: ["도보 + 지하철", "구엘 공원은 언덕 이동이라 택시도 선택 가능"],
  },
  {
    day: 4,
    date: "7월 2일 (목)",
    title: "스위스 입국과 루체른 구시가지",
    city: "바르셀로나 → 루체른",
    route: "숙소 → BCN → ZRH → 루체른 → 카펠교",
    lodging: "Hotel De la Paix",
    stops: [
      { name: "Duquesa de Cardona", note: "체크아웃", coords: [41.3802, 2.1815] },
      { name: "BCN 공항", note: "09:40 출발", coords: [41.3031, 2.0734] },
      { name: "Zurich Airport", note: "11:30 도착", coords: [47.4582, 8.5555] },
      { name: "Luzern HB", note: "13:51 도착", coords: [47.0502, 8.3102] },
      { name: "Hotel De la Paix", note: "체크인", coords: [47.055, 8.3099] },
      { name: "Kapellbrucke", note: "오후 산책", coords: [47.0517, 8.3076] },
      { name: "Weinmarkt", note: "구시가지", coords: [47.0516, 8.3059] },
    ],
    timeline: [
      ["07:00", "체크아웃 & 공항 이동", "BCN 공항", "공항버스/택시"],
      ["09:40", "비행기 출발", "BCN → ZRH", "Swiss LX1953"],
      ["11:30", "취리히 도착", "ZRH 공항", ""],
      ["12:39", "취리히 공항 → 루체른", "Zürich Flughafen → Luzern", "IR13 직통"],
      ["13:51", "루체른 도착", "Luzern", "호텔 이동"],
      ["15:00", "카펠교", "Kapellbrucke", "호텔에서 도보"],
      ["15:30", "구시가지 산책", "Weinmarkt-Brunnen", "중세 광장"],
      ["저녁", "저녁 식사", "구시가지", "숙소 방향"],
    ],
    transport: [
      "Swiss LX1953 09:40 → 11:30",
      "Zürich Flughafen → Luzern: IR13 12:39 → 13:51",
      "루체른 시내는 도보 중심",
    ],
  },
  {
    day: 5,
    date: "7월 3일 (금)",
    title: "인터라켄 이동과 브리엔츠 호수",
    city: "루체른 → 인터라켄",
    route: "루체른 → 인터라켄 → Iseltwald 왕복",
    lodging: "Hotel Harder Minerva",
    stops: [
      { name: "Hotel De la Paix", note: "오전 출발", coords: [47.055, 8.3099] },
      { name: "Musegg Wall", note: "마지막 산책", coords: [47.0556, 8.3036] },
      { name: "Luzern HB", note: "10:06 출발", coords: [47.0502, 8.3102] },
      { name: "Interlaken Ost", note: "11:54 도착", coords: [46.6905, 7.869] },
      { name: "Hotel Harder Minerva", note: "체크인", coords: [46.6886, 7.8582] },
      { name: "Iseltwald", note: "유람선 왕복", coords: [46.7102, 7.9636] },
    ],
    timeline: [
      ["오전", "루체른 마지막 산책", "무제크 성벽", "가볍게"],
      ["10:06", "루체른 출발", "Luzern HB", "PE 직통"],
      ["11:54", "인터라켄 도착", "Interlaken Ost", "1h48m"],
      ["12:15", "숙소 체크인 & 점심", "Hotel Harder Minerva", "짐 정리"],
      ["14:07", "브리엔츠 유람선", "Interlaken Ost 선착장", "Iseltwald 14:51 도착"],
      ["14:51~16:00", "Iseltwald 산책", "Iseltwald", "호숫가 산책"],
      ["16:08", "유람선 복귀", "Iseltwald → Interlaken Ost", "16:53 도착"],
      ["저녁", "저녁 식사", "인터라켄", "알프스 야경"],
    ],
    transport: [
      "Luzern → Interlaken Ost: PE 10:06 → 11:54",
      "브리엔츠 유람선: Interlaken Ost 14:07 → Iseltwald 14:51",
      "복귀: Iseltwald 16:08 → Interlaken Ost 16:53",
    ],
  },
  {
    day: 6,
    date: "7월 4일 (토)",
    title: "그린델발트 First와 Bachalpsee",
    city: "인터라켄",
    route: "인터라켄 → 그린델발트 → First → Bachalpsee",
    lodging: "Hotel Harder Minerva",
    stops: [
      { name: "Hotel Harder Minerva", note: "출발", coords: [46.6886, 7.8582] },
      { name: "Interlaken Ost", note: "08:04 출발", coords: [46.6905, 7.869] },
      { name: "Grindelwald", note: "08:40 도착", coords: [46.6242, 8.0341] },
      { name: "First", note: "Cliff Walk", coords: [46.6609, 8.0534] },
      { name: "Bachalpsee", note: "왕복 하이킹", coords: [46.6698, 8.0234] },
    ],
    timeline: [
      ["08:04", "그린델발트행 출발", "Interlaken Ost", "R/BOB 직통"],
      ["08:40", "그린델발트 도착", "Grindelwald", "Firstbahn까지 도보"],
      ["09:00", "First 곤돌라 탑승", "Firstbahn", "곤돌라 약 25분"],
      ["10:00", "First Cliff Walk", "First 전망대", "무료"],
      ["10:30", "Bachalpsee 하이킹", "First → Bachalpsee", "왕복 약 2시간"],
      ["13:00", "하산 & 점심", "Grindelwald", "마을 산책"],
      ["15:47", "인터라켄 복귀", "Grindelwald → Interlaken Ost", "16:24 도착"],
      ["저녁", "저녁 식사", "인터라켄", ""],
    ],
    transport: [
      "Interlaken Ost → Grindelwald: 08:04 → 08:40",
      "Grindelwald → Interlaken Ost: 15:47 → 16:24 또는 16:17 → 16:54",
      "First는 날씨가 핵심",
    ],
  },
  {
    day: 7,
    date: "7월 5일 (일)",
    title: "외시넨 호수",
    city: "인터라켄",
    route: "인터라켄 → 칸더슈테크 → Oeschinensee",
    lodging: "Hotel Harder Minerva",
    stops: [
      { name: "Hotel Harder Minerva", note: "출발", coords: [46.6886, 7.8582] },
      { name: "Interlaken Ost", note: "07:59 출발", coords: [46.6905, 7.869] },
      { name: "Kandersteg", note: "09:01 도착", coords: [46.4947, 7.6731] },
      { name: "Oeschinensee", note: "케이블카 + 호수", coords: [46.4982, 7.7277] },
      { name: "Interlaken", note: "오후 자유 시간", coords: [46.6863, 7.8632] },
    ],
    timeline: [
      ["07:59", "칸더슈테크행 출발", "Interlaken Ost", "Spiez 환승"],
      ["09:01", "칸더슈테크 도착", "Kandersteg", ""],
      ["09:30", "외시넨 케이블카", "Oeschinensee", "상행 시간대 예약 필요"],
      ["09:45", "호숫가 하이킹", "상부역 → 호수", "도보 20~30분"],
      ["10:15~13:00", "외시넨 호수 체류", "Oeschinensee", "산책, 사진, 피크닉"],
      ["14:14", "인터라켄 복귀", "Kandersteg → Interlaken Ost", "15:28 도착"],
      ["저녁", "스위스 마지막 밤 디너", "인터라켄", "퐁듀/라클렛"],
    ],
    transport: [
      "Interlaken Ost → Kandersteg: 07:59 → 09:01",
      "Kandersteg → Interlaken Ost: 14:14 → 15:28 또는 15:14 → 16:26",
      "Oeschinensee 케이블카 시간대 예약 필요",
    ],
  },
  {
    day: 8,
    date: "7월 6일 (월)",
    title: "피렌체 장거리 이동",
    city: "인터라켄 → 피렌체",
    route: "인터라켄 → 취리히 → 밀라노 → 피렌체",
    lodging: "Martelli 6 Suite & Apartments",
    stops: [
      { name: "Interlaken Ost", note: "06:59 출발", coords: [46.6905, 7.869] },
      { name: "Zürich HB", note: "08:58 도착", coords: [47.3782, 8.5402] },
      { name: "Milano Centrale", note: "12:53 도착", coords: [45.4863, 9.2027] },
      { name: "Firenze SMN", note: "16:04 도착", coords: [43.7768, 11.248] },
      { name: "Martelli 6", note: "체크인", coords: [43.7738, 11.2557] },
      { name: "Duomo di Firenze", note: "오후 산책", coords: [43.7731, 11.256] },
      { name: "Ponte Vecchio", note: "저녁 야경", coords: [43.768, 11.2531] },
    ],
    timeline: [
      ["06:35", "체크아웃", "Hotel Harder Minerva", "전날 짐 패킹"],
      ["06:59", "인터라켄 출발", "Interlaken Ost", "IC81"],
      ["08:58", "취리히 도착", "Zürich HB", "환승 35분"],
      ["09:33", "취리히 출발", "Zürich HB", "EC 15"],
      ["12:53", "밀라노 도착", "Milano Centrale", "경유만"],
      ["14:10", "밀라노 출발", "Milano Centrale", "Frecciarossa 37515"],
      ["16:04", "피렌체 도착", "Firenze SMN", ""],
      ["16:30", "숙소 체크인", "Martelli 6", "사전 도착 연락 필요"],
      ["저녁", "베키오 다리 야경", "Ponte Vecchio", ""],
    ],
    transport: [
      "Interlaken Ost → Zürich HB: IC81 06:59 → 08:58",
      "Zürich HB → Milano Centrale: EC 15 09:33 → 12:53",
      "Milano Centrale → Firenze SMN: Frecciarossa 14:10 → 16:04",
      "남하 루트는 공사로 불가, 취리히 우회",
    ],
  },
  {
    day: 9,
    date: "7월 7일 (화)",
    title: "피렌체 미술관과 스냅 촬영",
    city: "피렌체",
    route: "숙소 → 우피치 → 올트라르노 → 미켈란젤로 광장",
    lodging: "Martelli 6 Suite & Apartments",
    stops: [
      { name: "Martelli 6", note: "출발", coords: [43.7738, 11.2557] },
      { name: "Uffizi Gallery", note: "오전", coords: [43.7687, 11.2556] },
      { name: "Mercato Centrale", note: "점심", coords: [43.7764, 11.2533] },
      { name: "Oltrarno", note: "오후", coords: [43.7667, 11.2479] },
      { name: "Piazzale Michelangelo", note: "20:20 스냅", coords: [43.7629, 11.265] },
      { name: "Piazza Santa Croce", note: "촬영 후 산책", coords: [43.7686, 11.2623] },
    ],
    timeline: [
      ["오전", "우피치 미술관", "Uffizi", "사전예약 필요"],
      ["점심", "중앙시장", "Mercato Centrale", "비스테카 추천"],
      ["오후", "올트라르노 지구", "Oltrarno", "장인 공방"],
      ["18:30", "저녁 & 촬영 준비", "숙소/산 니콜로 주변", "가볍게 먹기"],
      ["20:00", "스냅 미팅 포인트 도착", "Piazzale Michelangelo", "20분 전 도착 목표"],
      ["20:20~21:20", "피렌체 PICCOLO 스냅 촬영", "미켈란젤로 광장 코스", "잔금 현금 준비"],
      ["21:30", "촬영 후 야경 산책", "산타크로체/두오모", "무리하지 않기"],
    ],
    transport: ["피렌체 중심부는 도보 중심", "미켈란젤로 광장은 오르막이라 택시/버스 선택 가능"],
  },
  {
    day: 10,
    date: "7월 8일 (수)",
    title: "로마 이동과 첫 산책",
    city: "피렌체 → 로마",
    route: "피렌체 → 로마 테르미니 → 나보나 → 트라스테베레",
    lodging: "Navona Palace Luxury Inn",
    stops: [
      { name: "Martelli 6", note: "체크아웃", coords: [43.7738, 11.2557] },
      { name: "Firenze SMN", note: "08:43 출발", coords: [43.7768, 11.248] },
      { name: "Roma Termini", note: "12:30 도착", coords: [41.9009, 12.502] },
      { name: "Navona Palace", note: "체크인/짐 보관", coords: [41.8993, 12.4709] },
      { name: "Fontana di Trevi", note: "오후", coords: [41.9009, 12.4833] },
      { name: "Piazza di Spagna", note: "오후", coords: [41.9059, 12.4823] },
      { name: "Trastevere", note: "저녁", coords: [41.8897, 12.4702] },
    ],
    timeline: [
      ["08:00", "체크아웃 & 역 이동", "Martelli 6", "SMN까지 도보"],
      ["08:43", "피렌체 → 로마", "Italo Smart", "현재 추천"],
      ["12:30", "로마 도착", "Roma Termini", "숙소까지 이동"],
      ["13:15", "짐 맡기기/점심", "Navona Palace 주변", ""],
      ["오후", "트레비 분수 & 스페인 계단", "Centro Storico", "숙소 도보권"],
      ["저녁", "트라스테베레", "Trastevere", "로마 현지 감성 디너"],
    ],
    transport: [
      "Firenze SMN → Roma Termini: Italo 08:43 → 12:30",
      "Roma Termini → 숙소: 메트로/택시 약 15분",
    ],
  },
  {
    day: 11,
    date: "7월 9일 (목)",
    title: "고대 로마",
    city: "로마",
    route: "나보나 → 콜로세움 → 포로 로마노 → 판테온",
    lodging: "Navona Palace Luxury Inn",
    stops: [
      { name: "Navona Palace", note: "출발", coords: [41.8993, 12.4709] },
      { name: "Colosseum", note: "오전", coords: [41.8902, 12.4922] },
      { name: "Foro Romano", note: "통합권", coords: [41.8925, 12.4853] },
      { name: "Palatino", note: "오후", coords: [41.8899, 12.4875] },
      { name: "Piazza Navona", note: "저녁", coords: [41.8992, 12.4731] },
      { name: "Pantheon", note: "야경 산책", coords: [41.8986, 12.4769] },
    ],
    timeline: [
      ["오전", "콜로세움/포로 로마노", "Colosseo", "사전예약 필요"],
      ["점심", "점심 식사", "몬티 지구", ""],
      ["오후", "팔라티노 언덕", "Palatino", "포로 로마노 통합권"],
      ["저녁", "나보나 광장/판테온", "Centro Storico", "야경 산책"],
    ],
    transport: ["숙소 기준 도보 + 택시/버스 선택", "콜로세움 입장 시간 고정 가능성 높음"],
  },
  {
    day: 12,
    date: "7월 10일 (금)",
    title: "바티칸과 테베레강",
    city: "로마/바티칸",
    route: "나보나 → 바티칸 박물관 → 성베드로 → 산탄젤로",
    lodging: "Navona Palace Luxury Inn",
    stops: [
      { name: "Navona Palace", note: "출발", coords: [41.8993, 12.4709] },
      { name: "Vatican Museums", note: "오전", coords: [41.9065, 12.4536] },
      { name: "Sistine Chapel", note: "박물관 내", coords: [41.9029, 12.4545] },
      { name: "St. Peter's Basilica", note: "오후", coords: [41.9022, 12.4539] },
      { name: "Castel Sant'Angelo", note: "테베레강 산책", coords: [41.9031, 12.4663] },
      { name: "Campo de' Fiori", note: "저녁", coords: [41.8957, 12.4722] },
    ],
    timeline: [
      ["오전", "바티칸 박물관 & 시스티나 성당", "Musei Vaticani", "사전예약 권장"],
      ["점심", "점심 식사", "바티칸 주변", ""],
      ["오후", "성베드로 대성당", "Basilica di San Pietro", "쿠폴라 등반 추천"],
      ["오후", "산탄젤로 성", "Castel Sant'Angelo", "테베레강 산책"],
      ["저녁", "캄포 데 피오리", "Campo de' Fiori", "마지막 로마 밤"],
    ],
    transport: ["숙소에서 바티칸까지 택시/버스 또는 도보", "바티칸은 입장 대기 시간을 넉넉하게 잡기"],
  },
  {
    day: 13,
    date: "7월 11일 (토)",
    title: "로마 마지막 날과 귀국",
    city: "로마 → 귀국",
    route: "나보나 → 자유 시간 → FCO 공항",
    lodging: "체크아웃",
    stops: [
      { name: "Navona Palace", note: "체크아웃/짐 보관", coords: [41.8993, 12.4709] },
      { name: "Villa Borghese", note: "오전 자유 시간 후보", coords: [41.9138, 12.4861] },
      { name: "Pantheon", note: "숙소 주변 마지막 산책", coords: [41.8986, 12.4769] },
      { name: "Trastevere", note: "마지막 식사 후보", coords: [41.8897, 12.4702] },
      { name: "Roma Termini", note: "공항 열차 환승", coords: [41.9009, 12.502] },
      { name: "FCO Airport", note: "21:15 출발", coords: [41.8003, 12.2389] },
    ],
    timeline: [
      ["오전", "체크아웃 & 짐 보관", "Navona Palace", "짐 보관 가능성 확인"],
      ["오전", "자유 시간", "보르게세 공원/쇼핑", "여유롭게"],
      ["점심", "마지막 이탈리아 식사", "트라스테베레", ""],
      ["오후", "여유 시간", "나보나 광장/판테온", "숙소 주변"],
      ["18:00", "공항 이동", "FCO 공항", "레오나르도 익스프레스"],
      ["21:15", "로마 출발", "FCO T3", "TW406편"],
    ],
    transport: [
      "숙소 → Termini: 택시/버스 약 15분",
      "Termini → FCO: Leonardo Express 약 32분",
      "국제선 출발 3시간 전 공항 도착 기준",
    ],
  },
];

const state = {
  selectedDay: itinerary[0].day,
  map: null,
  markerLayer: null,
  routeLayer: null,
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  renderDayButtons();
  initMap();
  selectDay(state.selectedDay);
});

function cacheElements() {
  els.dayList = document.querySelector("#day-list");
  els.tripCount = document.querySelector("#trip-count");
  els.selectedDate = document.querySelector("#selected-date");
  els.selectedTitle = document.querySelector("#selected-title");
  els.selectedCity = document.querySelector("#selected-city");
  els.selectedRoute = document.querySelector("#selected-route");
  els.selectedLodging = document.querySelector("#selected-lodging");
  els.stopList = document.querySelector("#stop-list");
  els.timeline = document.querySelector("#timeline");
  els.transportList = document.querySelector("#transport-list");
  els.mapFallback = document.querySelector("#map-fallback");
}

function renderDayButtons() {
  els.tripCount.textContent = `${itinerary.length}일`;
  const buttons = itinerary.map((day) => {
    const button = document.createElement("button");
    button.className = "day-button";
    button.type = "button";
    button.dataset.day = String(day.day);
    button.setAttribute("aria-pressed", "false");

    const index = document.createElement("span");
    index.className = "day-index";
    index.textContent = `D${day.day}`;

    const meta = document.createElement("span");
    meta.className = "day-meta";

    const title = document.createElement("strong");
    title.textContent = day.title;

    const date = document.createElement("span");
    date.textContent = `${day.date} · ${day.city}`;

    meta.append(title, date);
    button.append(index, meta);
    button.addEventListener("click", () => selectDay(day.day));
    return button;
  });

  els.dayList.replaceChildren(...buttons);
}

function initMap() {
  if (!window.L) {
    els.mapFallback.hidden = false;
    return;
  }

  state.map = L.map("map", {
    scrollWheelZoom: false,
    zoomControl: true,
  }).setView([45.4, 7.6], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(state.map);

  state.markerLayer = L.layerGroup().addTo(state.map);
  state.routeLayer = L.layerGroup().addTo(state.map);
}

function selectDay(dayNumber) {
  const day = itinerary.find((item) => item.day === dayNumber);
  if (!day) return;

  state.selectedDay = dayNumber;
  updateActiveButton(dayNumber);
  renderDayDetails(day);
  renderStops(day);
  renderTimeline(day);
  renderTransport(day);
  renderMap(day);
}

function updateActiveButton(dayNumber) {
  document.querySelectorAll(".day-button").forEach((button) => {
    const isActive = Number(button.dataset.day) === dayNumber;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderDayDetails(day) {
  els.selectedDate.textContent = `Day ${day.day} · ${day.date}`;
  els.selectedTitle.textContent = day.title;
  els.selectedCity.textContent = day.city;
  els.selectedRoute.textContent = day.route;
  els.selectedLodging.textContent = `숙소: ${day.lodging}`;
}

function renderStops(day) {
  const items = day.stops.map((stop) => {
    const item = document.createElement("li");

    const name = document.createElement("span");
    name.className = "stop-name";
    name.textContent = stop.name;

    const note = document.createElement("span");
    note.className = "stop-note";
    note.textContent = stop.note;

    item.append(name, note);
    return item;
  });

  els.stopList.replaceChildren(...items);
}

function renderTimeline(day) {
  const rows = day.timeline.map(([time, activity, place, note]) => {
    const row = document.createElement("div");
    row.className = "timeline-row";

    const timeEl = document.createElement("div");
    timeEl.className = "timeline-time";
    timeEl.textContent = time;

    const body = document.createElement("div");
    body.className = "timeline-body";

    const activityEl = document.createElement("strong");
    activityEl.textContent = activity;

    const placeEl = document.createElement("span");
    placeEl.className = "timeline-place";
    placeEl.textContent = place;

    body.append(activityEl, placeEl);

    if (note) {
      const noteEl = document.createElement("span");
      noteEl.className = "timeline-note";
      noteEl.textContent = note;
      body.append(noteEl);
    }

    row.append(timeEl, body);
    return row;
  });

  els.timeline.replaceChildren(...rows);
}

function renderTransport(day) {
  const items = day.transport.map((note) => {
    const item = document.createElement("li");
    item.textContent = note;
    return item;
  });

  els.transportList.replaceChildren(...items);
}

function renderMap(day) {
  if (!state.map || !state.markerLayer || !state.routeLayer) return;

  state.markerLayer.clearLayers();
  state.routeLayer.clearLayers();

  const stopsWithCoords = day.stops.filter((stop) => Array.isArray(stop.coords));

  stopsWithCoords.forEach((stop, index) => {
    const marker = L.marker(stop.coords, {
      icon: L.divIcon({
        className: "",
        html: `<span class="route-marker">${index + 1}</span>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      }),
    });

    marker.bindPopup(
      `<strong>${escapeHtml(stop.name)}</strong><span>${escapeHtml(stop.note)}</span>`,
    );
    marker.addTo(state.markerLayer);
  });

  if (stopsWithCoords.length > 1) {
    L.polyline(
      stopsWithCoords.map((stop) => stop.coords),
      {
        color: "#0d4f45",
        weight: 4,
        opacity: 0.78,
      },
    ).addTo(state.routeLayer);
  }

  if (stopsWithCoords.length === 1) {
    state.map.setView(stopsWithCoords[0].coords, 13);
  } else if (stopsWithCoords.length > 1) {
    const bounds = L.latLngBounds(stopsWithCoords.map((stop) => stop.coords));
    state.map.fitBounds(bounds, { padding: [34, 34], maxZoom: 13 });
  }

  window.setTimeout(() => state.map.invalidateSize(), 0);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
