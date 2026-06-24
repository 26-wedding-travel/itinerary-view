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
    foodCandidates: [
      {
        slot: "늦은 저녁",
        name: "Bo de Boqueria",
        summary: "보케리아 옆 파에야/해산물 후보. 첫날 늦게 도착해도 제대로 먹고 싶을 때.",
      },
      {
        slot: "가볍게",
        name: "La Plata",
        summary: "메뉴가 적은 로컬 타파스 바. 피곤하면 정어리와 맥주로 짧게 마무리.",
      },
      {
        slot: "백업",
        name: "Euskal Etxea",
        summary: "고딕지구 핀초스 바. 조금씩 골라 먹기 좋아 도착일 백업으로 적합.",
      },
    ],
  },
  {
    day: 2,
    date: "6월 30일 (화)",
    title: "가우디 셀프 가이드",
    city: "바르셀로나",
    route: "숙소 → 사그라다 파밀리아 → 사그라다 근처 점심 → 구엘 공원 → 카사 밀라 → 카사 바뜨요 → 숙소",
    lodging: "Duquesa de Cardona 4* Sup",
    stops: [
      { name: "Duquesa de Cardona", note: "출발", coords: [41.3802, 2.1815] },
      { name: "Sagrada Familia", note: "09:30 입장", coords: [41.4036, 2.1744] },
      { name: "사그라다 점심 권역", note: "Puertecillo/Sagradas Tapas 우선, El Glop 후순위", coords: [41.4022, 2.176] },
      { name: "Park Guell", note: "14:00 일반권 구매 완료", coords: [41.4145, 2.1527] },
      { name: "Casa Mila", note: "외관 도슨트", coords: [41.3954, 2.162] },
      { name: "Casa Batllo", note: "외관 도슨트", coords: [41.3917, 2.1649] },
      { name: "Duquesa de Cardona", note: "휴식", coords: [41.3802, 2.1815] },
    ],
    timeline: [
      ["08:30", "숙소 출발", "Duquesa de Cardona", "택시 권장"],
      ["09:30", "사그라다 파밀리아 입장", "Sagrada Familia", "예약 완료"],
      ["10:00", "탄생의 파사드 타워", "Nativity facade tower", "타워 입장"],
      ["11:30", "내부 관람 마무리", "Sagrada Familia", "사진/기념품, 외관 도슨트"],
      ["11:50", "캐주얼 점심", "사그라다 근처", "Puertecillo/Sagradas Tapas 우선, El Glop 후순위"],
      ["13:20", "택시 이동", "사그라다 근처 → Park Guell", "Carretera del Carmel 방향"],
      ["14:00", "구엘 공원 입장", "Park Guell", "입장권 구매 완료"],
      ["14:00~15:30", "구엘 공원 셀프 가이드", "Park Guell", "Nature Square, Hypostyle Room, Dragon Stairway"],
      ["15:30", "택시 이동", "Park Guell → Casa Mila", "택시 승강장 또는 Picmi"],
      ["15:50", "카사 밀라 외관 도슨트", "Casa Mila", "내부 입장 없음"],
      ["16:25", "도보 이동", "Passeig de Gracia", "카사 바뜨요까지 약 8~10분"],
      ["16:35", "카사 바뜨요 외관 도슨트", "Casa Batllo", "내부 입장 없음"],
      ["17:15", "숙소 복귀", "Duquesa de Cardona", "택시 권장"],
      ["17:45 이후", "저녁 선택 옵션", "숙소 근처", "컨디션 보고 항구 / 고딕지구 / 바르셀로네타 중 선택"],
    ],
    transport: [
      "사그라다 파밀리아 09:30 / 타워 10:00 시간 고정",
      "구엘 공원 일반권 14:00 구매 완료",
      "숙소 → 사그라다 → 구엘 공원 → 카사 밀라 구간은 택시 권장",
      "카사 밀라 → 카사 바뜨요는 Passeig de Gracia 도보 이동",
      "파인다이닝 예약은 포기하고 사그라다 근처에서 빠른 점심",
      "저녁은 컨디션 보고 항구, 고딕지구, 바르셀로네타 중 선택",
    ],
    foodCandidates: [
      {
        slot: "점심 1순위",
        name: "Puertecillo",
        summary: "사그라다 도보권 해산물 카운터. 가볍게 골라 먹고 구엘 공원으로 이동하기 좋음.",
      },
      {
        slot: "점심 대안",
        name: "Sagradas Tapas",
        summary: "가우디 대로 노천석 타파스/1인 파에야 후보. 동선이 단순한 백업.",
      },
      {
        slot: "후순위",
        name: "El Glop Gaudi",
        summary: "사그라다 바로 옆 쌀요리 후보. 후기 호불호가 있어 현장 분위기 보고 선택.",
      },
      {
        slot: "카사 바뜨요 후",
        name: "Casa Alfonso",
        summary: "하몽과 판 콘 토마테 후보. 에이샴플라 쪽에서 저녁까지 이어갈 때 좋음.",
      },
      {
        slot: "디저트",
        name: "Lucciano's",
        summary: "Ciutat Comtal 근처 젤라토 후보. 카사 바뜨요 이후 짧게 들르기 좋음.",
      },
    ],
    guideStops: [
      {
        label: "사그라다",
        title: "사그라다 파밀리아 - 가우디의 마지막 큰 꿈",
        coords: [41.4036, 2.1744],
        lead:
          "2026년은 가우디 사후 100년이다. 1883년 31세에 맡은 프로젝트에 1914년부터는 온전히 집중했고, 전차 사고로 세상을 떠난 뒤에도 세대가 이어 짓고 있다.",
        points: [
          "가우디는 자연을 꽃무늬가 아니라 구조의 선생님으로 봤다. 내부 기둥은 숲처럼 갈라지며 무게와 빛을 동시에 다룬다.",
          "탄생의 파사드는 생명과 기쁨의 얼굴이다. 동물, 식물, 인물이 빽빽한 이유도 성당 전체가 하나의 살아 있는 성서처럼 읽히기 때문이다.",
          "스페인 내전 때 자료와 모형이 훼손되어 지금의 성당은 가우디의 유산과 후대의 복원, 해석이 함께 있는 건축이다.",
        ],
      },
      {
        label: "구엘 공원 입구",
        title: "구엘 공원 - 팔리지 않은 이상향",
        coords: [41.4134, 2.1533],
        lead:
          "구엘 공원은 처음부터 공원이 아니라 바르셀로나 부르주아를 위한 고급 전원주택 단지였다. 거의 팔리지 않은 실패가 오늘의 공원이 됐다.",
        points: [
          "1900년 전후 바르셀로나는 성벽 밖 에이샴플라가 커지고 산업 자본이 문화 후원으로 이어지던 도시였다.",
          "Modernisme는 단순한 아르누보 유행이 아니라 카탈루냐가 전통과 현대성을 함께 보여주려던 문화 운동이었다.",
          "구엘은 고객이자 후원자, 친구에 가까웠다. 가우디의 상상력이 실현되려면 이런 부르주아 후원이 필요했다.",
        ],
      },
      {
        label: "자연 광장",
        title: "Plaça de la Natura - 도시를 내려다보는 무대",
        coords: [41.4143, 2.1525],
        lead:
          "이 광장은 전망대이면서 사람들이 모이고 춤추고 말하던 시민적 무대다. 큰 곡선 벤치는 등받이, 난간, 전망 프레임을 한 번에 맡는다.",
        points: [
          "구엘 생전에도 이 공간은 카탈루냐주의 행사나 전통 춤 사르다나 같은 civic event에 쓰였다.",
          "깨진 타일과 도자기를 이어 붙인 trencadís는 빛을 잘게 반사해 벤치가 도시 풍경과 함께 살아 움직이게 한다.",
          "여기서는 벤치만 보지 말고, 벤치가 바르셀로나 전경을 어떻게 감싸는지 보면 훨씬 좋다.",
        ],
      },
      {
        label: "기둥의 방",
        title: "Hypostyle Room - 시장, 광장, 배수가 겹친 구조",
        coords: [41.4139, 2.1526],
        lead:
          "원래 시장으로 계획된 공간이다. 위에는 광장, 아래에는 86개 기둥의 그늘, 그리고 빗물이 구조를 따라 모이는 시스템이 겹쳐 있다.",
        points: [
          "고전적인 도리아식 기둥을 떠올리게 하지만, 실제 느낌은 신전과 숲 사이에 있다.",
          "가우디의 핵심은 기능과 상징을 나누지 않는 것이다. 작동하는데 예쁘고, 예쁜데 실제로 필요하다.",
          "여기서는 천장 장식만 올려다보기보다 기둥이 위 광장을 어떻게 받치는지 같이 보면 된다.",
        ],
      },
      {
        label: "용의 계단",
        title: "Dragon Stairway - 물길과 상징의 축",
        coords: [41.4135, 2.153],
        lead:
          "El Drac은 귀여운 기념품 캐릭터처럼 보이지만, 계단의 물길과 카탈루냐적 상징이 만나는 자리에 있다.",
        points: [
          "카탈루냐 문화에서 용은 자주 등장한다. 잠시 뒤 카사 바뜨요에서는 산 조르디와 용 이야기가 더 강하게 연결된다.",
          "정면 사진은 사람이 많으니 45도 측면에서 계단 축과 함께 잡으면 더 자연스럽다.",
          "구엘 공원의 장식은 물, 이동, 경사 같은 현실 문제를 해결하는 장치와 떨어져 있지 않다.",
        ],
      },
      {
        label: "세탁부 포르티코",
        title: "Laundry Room Portico - 건축이 지형처럼 보이는 순간",
        coords: [41.4151, 2.1519],
        lead:
          "길인데 동굴 같고, 구조물인데 원래 있던 암반처럼 보인다. 사람과 마차가 다닐 길을 만들면서 산의 일부처럼 보이게 한 구간이다.",
        points: [
          "가우디의 자연주의는 자연을 흉내 내는 데서 끝나지 않는다. 자연이 버티는 방식을 구조로 가져온다.",
          "기둥은 장식이 아니라 경사와 길을 실제로 떠받치는 장치다.",
          "이 지점에서는 '이게 건축물이 아니라 원래 있던 지형이라고 해도 믿을까?'라고 물어보면 좋다.",
        ],
      },
      {
        label: "카사 밀라",
        title: "카사 밀라 - 돌의 파도와 도시 주거의 실험",
        coords: [41.3954, 2.162],
        lead:
          "1906-1912년에 지어진 가우디의 대표 민간 주거 건물이다. La Pedrera, 즉 채석장이라는 별명은 처음엔 낯섦의 표현이었지만 지금은 정체성이 됐다.",
        points: [
          "정면은 평평한 벽이 아니라 바다처럼 출렁이는 피부다. 도시 주거를 자연 구조처럼 풀어낸 실험으로 보면 좋다.",
          "발코니 철제 장식은 꽃, 해초, 고철이 동시에 떠오른다. 가우디는 철공, 목공, 유리, 세라믹 장인을 건축의 중심으로 끌어왔다.",
          "옥상 굴뚝과 환기탑은 설비를 숨기지 않고 조각처럼 세운 사례다. 기능이 곧 조형이 되는 방식이다.",
        ],
      },
      {
        label: "카사 바뜨요",
        title: "카사 바뜨요 - 바다, 뼈, 산 조르디의 용",
        coords: [41.3917, 2.1649],
        lead:
          "카사 바뜨요는 1904-1906년 기존 건물을 완전히 바꾼 리모델링이다. 철거 대신 변신을 택했고, 도시의 집을 하나의 생명체처럼 만들었다.",
        points: [
          "정면은 파도, 물빛, 뼈, 가면처럼 동시에 읽힌다. 모호하기 때문에 더 오래 보게 되는 건물이다.",
          "지붕의 비늘은 용의 등처럼 해석되고, 카탈루냐의 수호성인 산 조르디 전설과 연결해서 많이 읽힌다.",
          "카사 밀라가 돌과 구조, 무게의 건물이라면 카사 바뜨요는 색과 빛, 이야기의 건물이다.",
        ],
      },
    ],
  },
  {
    day: 3,
    date: "7월 1일 (수)",
    title: "몬세라트 & 올리브농장 투어",
    city: "바르셀로나",
    route: "숙소 → 만다린 오리엔탈 앞 → 몬세라트 → 올리브농장 → 숙소 → Bar Cañete",
    lodging: "Duquesa de Cardona 4* Sup",
    stops: [
      { name: "Duquesa de Cardona", note: "출발", coords: [41.3802, 2.1815] },
      { name: "Mandarin Oriental Barcelona", note: "07:40 집합, 07:50 정시 출발", coords: [41.3911, 2.1664] },
      { name: "Montserrat", note: "NomadBenz 옵션B", coords: [41.5958, 1.8298] },
      { name: "Montserrat Monastery", note: "수도원/자유 시간", coords: [41.5936, 1.8375] },
      { name: "Olive farm", note: "위치 바우처 확인 필요, 추정 좌표", coords: [41.532, 1.76] },
      { name: "Mandarin Oriental Barcelona", note: "17:20 전후 복귀 예상, 종료 장소 변경 가능", coords: [41.3911, 2.1664] },
      { name: "Duquesa de Cardona", note: "저녁 전 휴식", coords: [41.3802, 2.1815] },
      { name: "Bar Cañete", note: "워크인 도전", coords: [41.379, 2.1736] },
    ],
    timeline: [
      ["07:10", "숙소 출발", "Duquesa de Cardona", "택시 권장"],
      ["07:30", "미팅 포인트 도착", "Mandarin Oriental Barcelona", "Pg. de Gràcia 38-40, 지각 시 대기 없음"],
      ["07:40", "투어 집합", "Mandarin Oriental Barcelona 앞", "예약번호 EXP-20260623-00013436"],
      ["07:50", "몬세라트&올리브농장 투어 출발", "Barcelona → Montserrat", "한국어 가이드, 차량 이동"],
      ["오전", "몬세라트 방문", "Montserrat / Monastery", "성당·검은 성모 선택권 별도, 사전 신청 여부 회신"],
      ["오후", "올리브농장 방문", "Catalonia olive farm", "현장 €50/인, 2인 €100"],
      ["17:20", "바르셀로나 복귀 예상", "Barcelona", "종료 시간/장소는 사전 안내와 함께 변경 가능"],
      ["18:00", "숙소 복귀 & 휴식", "Duquesa de Cardona", "저녁 전 짧게 휴식"],
      ["19:45", "Bar Cañete 워크인 도전", "C/ de la Unió 17", "컨디션 되면 문의"],
      ["20:15", "저녁", "Bar Cañete 또는 7 Portes", "실패 시 숙소 근처 백업"],
      ["22:30", "숙소 복귀 & 짐 정리", "Duquesa de Cardona", "다음날 07:00 체크아웃"],
    ],
    transport: [
      "숙소 → 만다린 오리엔탈 호텔 앞: 택시 권장, 07:30 도착 목표",
      "몬세라트&올리브농장 투어: NomadBenz 차량 이동",
      "지각/불참 시 대기 없이 정시 출발, 중간 합류 어려움",
      "올리브농장 필수 현장 비용: €50/인, 2인 €100 현금",
      "선택 비용: 성당 €9/인, 검은 성모 €13/인, 유선 이어폰 €1/개",
      "Bar Cañete ↔ 숙소: 도보 가능",
    ],
    foodCandidates: [
      {
        slot: "투어 전",
        name: "마트 간식/물",
        summary: "아침 출발이 빨라 전날 물, 빵, 과일을 준비하는 쪽이 안정적.",
      },
      {
        slot: "저녁 1순위",
        name: "Bar Cañete",
        summary: "마지막 밤 워크인 도전 후보. 성공하면 타파스 중심으로 제대로 먹는 날.",
      },
      {
        slot: "저녁 백업",
        name: "7 Portes",
        summary: "숙소 근처 클래식 파에야 후보. Bar Cañete 실패 시 이동 부담이 적음.",
      },
      {
        slot: "가벼운 대안",
        name: "Casa Alfonso",
        summary: "하몽/타파스 분위기 후보. 투어 후 체력은 있지만 긴 식사는 부담일 때.",
      },
    ],
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
    foodCandidates: [
      {
        slot: "저녁 1순위",
        name: "Rathaus Brauerei",
        summary: "카펠교 옆 양조장. 맥주와 알프스 마카로니/치킨으로 위치와 가격 균형이 좋음.",
      },
      {
        slot: "특별한 저녁",
        name: "Zunfthausrestaurant Pfistern",
        summary: "길드하우스 분위기의 퐁듀 전문 후보. 루체른 첫날 신혼 디너감.",
      },
      {
        slot: "전통식",
        name: "Wirtshaus Taube",
        summary: "구시가지 선술집 분위기. 뢰스티와 전통 고기 요리 후보.",
      },
      {
        slot: "카페/선물",
        name: "Bachmann Confiseur",
        summary: "루체른 대표 제과점. 초콜릿과 작은 디저트 구매용.",
      },
    ],
  },
  {
    day: 5,
    date: "7월 3일 (금)",
    title: "인터라켄 이동과 패러글라이딩",
    city: "루체른 → 인터라켄",
    route: "루체른 → 인터라켄 → Skywings 패러글라이딩",
    lodging: "Hotel Harder Minerva",
    stops: [
      { name: "Hotel De la Paix", note: "오전 출발", coords: [47.055, 8.3099] },
      { name: "Musegg Wall", note: "마지막 산책", coords: [47.0556, 8.3036] },
      { name: "Luzern HB", note: "10:06 출발", coords: [47.0502, 8.3102] },
      { name: "Interlaken Ost", note: "11:54 도착", coords: [46.6905, 7.869] },
      { name: "Hotel Harder Minerva", note: "짐 맡기기", coords: [46.6886, 7.8582] },
      { name: "Skywings meeting point", note: "14:45 패러글라이딩", coords: [46.6877, 7.8569] },
      { name: "Hohematte", note: "착륙/사진 수령", coords: [46.6874, 7.864] },
    ],
    timeline: [
      ["오전", "루체른 마지막 산책", "무제크 성벽", "가볍게"],
      ["10:06", "루체른 출발", "Luzern HB", "PE 직통"],
      ["11:54", "인터라켄 도착", "Interlaken Ost", "1h48m"],
      ["12:15", "숙소 도착, 짐 맡기기 & 점심", "Hotel Harder Minerva", "체크인 15:00 시작, 불가 시 역 락커"],
      ["13:00", "가벼운 점심", "Hoheweg / 숙소 근처", "비행 전 과식 피하기"],
      ["14:25", "Skywings 미팅 포인트 이동", "Restaurant Schuh, Höheweg 56", "숙소에서 도보 2~4분"],
      ["14:45", "패러글라이딩", "Skywings Golden Eagle", "예약 완료, CHF 380/2인"],
      ["16:00", "착륙, 사진/영상 수령", "Hohematte", "사진/영상 CHF 40/인 선택"],
      ["16:30", "호텔 체크인 & 휴식", "Hotel Harder Minerva", "샤워/정리"],
      ["18:30", "저녁 식사", "Husi Bierhaus / Per Bacco", "숙소 근처"],
    ],
    transport: [
      "Luzern → Interlaken Ost: PE 10:06 → 11:54",
      "Interlaken Ost → Hotel Harder Minerva: 도보 약 15분 또는 버스/택시",
      "숙소 → Skywings 미팅 포인트: 도보 2~4분",
      "Skywings 패러글라이딩: 업체 셔틀로 이륙장 이동, Hohematte 착륙",
    ],
    foodCandidates: [
      {
        slot: "점심",
        name: "Coop/Migros 간단식",
        summary: "패러글라이딩 전 과식 방지용. 샌드위치, 과일, 음료로 가볍게.",
      },
      {
        slot: "저녁 1순위",
        name: "Husi Bierhaus",
        summary: "숙소 근처 맥주집. 족발, 립, 치킨윙 등 이동일 저녁으로 편함.",
      },
      {
        slot: "저녁 대안",
        name: "Per Bacco",
        summary: "파스타/리조또/피자 후보. 스위스 음식이 부담스러울 때 가벼운 선택.",
      },
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
    foodCandidates: [
      {
        slot: "산 위 점심",
        name: "Berggasthaus First",
        summary: "First 정상역 뢰스티/브라트부르스트 후보. 전망을 보며 먹는 점심.",
      },
      {
        slot: "하산 중",
        name: "Bort Schyr",
        summary: "Bort 중간역 산장 후보. 하산 중 쉬어가며 먹기 좋음.",
      },
      {
        slot: "마을 점심",
        name: "Bebbis",
        summary: "그린델발트 마을 퐁듀/버거/피자 후보. 곤돌라 하산 후 여유 있을 때.",
      },
      {
        slot: "저녁",
        name: "Restaurant Taverne",
        summary: "인터라켄 퐁듀 후보. 산행 후 스위스식으로 마무리하기 좋음.",
      },
    ],
  },
  {
    day: 7,
    date: "7월 5일 (일)",
    title: "블라우제와 외시넨 피크닉",
    city: "인터라켄",
    route: "인터라켄 → Blausee → Kandersteg → Oeschinensee",
    lodging: "Hotel Harder Minerva",
    stops: [
      { name: "Hotel Harder Minerva", note: "출발", coords: [46.6886, 7.8582] },
      { name: "Interlaken Ost", note: "07:29 출발", coords: [46.6905, 7.869] },
      { name: "Blausee BE", note: "08:41 도착, SBB 발권 완료", coords: [46.5343, 7.6682] },
      { name: "Kandersteg", note: "10:54 도착", coords: [46.4947, 7.6731] },
      { name: "Oeschinensee", note: "11:30~13:00 상행 예약 완료", coords: [46.4982, 7.7277] },
      { name: "Interlaken", note: "17:28 복귀", coords: [46.6863, 7.8632] },
    ],
    timeline: [
      ["07:29", "블라우제행 출발", "Interlaken Ost", "SBB 발권 완료, Spiez/Frutigen 환승"],
      ["08:41", "Blausee BE 도착", "Blausee BE", "09:00 오픈 전 여유"],
      ["09:00~10:25", "블라우제 산책", "Naturpark Blausee", "짧게 사진/산책"],
      ["10:41", "칸더슈테크행 버스", "Blausee BE", "SBB 발권 완료, 10:54 도착"],
      ["11:30", "외시넨 케이블카 상행", "Oeschinensee", "예약 완료, 11:30~13:00 타임슬롯"],
      ["12:15~13:30", "호숫가 피크닉 & 휴식", "Oeschinensee", "돗자리, 도시락"],
      ["13:30~14:20", "C코스 산책/사진", "Oeschinensee", "20~30분 대표 전망 코스"],
      ["15:20", "하산", "Oeschinensee 케이블카", "왕복 티켓, 시간 여유 있게 선택"],
      ["16:14", "인터라켄 복귀", "Kandersteg → Interlaken Ost", "17:28 도착, 복귀 티켓 별도 구매"],
      ["19:30", "스위스 마지막 밤 디너", "인터라켄", "Fondue Villa 권장"],
    ],
    transport: [
      "Interlaken Ost → Blausee BE: 07:29 → 08:41, 발권 완료",
      "Blausee BE → Kandersteg: 버스 230, 10:41 → 10:54, 발권 완료",
      "Kandersteg → Interlaken Ost: 16:14 → 17:28, 복귀 티켓 별도 구매",
      "Oeschinensee 상행 11:30~13:00 예약 완료",
    ],
    foodCandidates: [
      {
        slot: "점심",
        name: "외시넨 호숫가 피크닉",
        summary: "전날 빵, 치즈, 과일, 음료를 사두고 호숫가에서 쉬는 일정.",
      },
      {
        slot: "저녁 1순위",
        name: "Fondue Villa & Garden",
        summary: "인터라켄 마지막 밤 퐁듀 후보. 정원 분위기라 예약 우선.",
      },
      {
        slot: "저녁 대안",
        name: "Restaurant Stadthaus",
        summary: "운터젠 구시가지 전통식 후보. 산책과 같이 묶기 좋음.",
      },
      {
        slot: "카페/디저트",
        name: "Schuh",
        summary: "Hoheweg의 오래된 카페/레스토랑. 퐁듀나 디저트 백업.",
      },
    ],
  },
  {
    day: 8,
    date: "7월 6일 (월)",
    title: "피렌체 장거리 이동",
    city: "인터라켄 → 피렌체",
    route: "인터라켄 → 취리히 → 밀라노 → 볼로냐 → 피렌체",
    lodging: "Martelli 6 Suite & Apartments",
    stops: [
      { name: "Interlaken Ost", note: "06:59 출발", coords: [46.6905, 7.869] },
      { name: "Zürich HB", note: "08:58 도착", coords: [47.3782, 8.5402] },
      { name: "Milano Centrale", note: "12:53 도착", coords: [45.4863, 9.2027] },
      { name: "Bologna Centrale", note: "15:42 환승", coords: [44.5059, 11.3428] },
      { name: "Firenze SMN", note: "16:39 도착", coords: [43.7768, 11.248] },
      { name: "Martelli 6", note: "체크인", coords: [43.7738, 11.2557] },
      { name: "Duomo di Firenze", note: "오후 산책", coords: [43.7731, 11.256] },
      { name: "Ponte Vecchio", note: "저녁 야경", coords: [43.768, 11.2531] },
    ],
    timeline: [
      ["06:35", "체크아웃", "Hotel Harder Minerva", "전날 짐 패킹"],
      ["06:59", "인터라켄 출발", "Interlaken Ost", "IC81"],
      ["08:58", "취리히 도착", "Zürich HB", "환승 35분"],
      ["09:33", "취리히 출발", "Zürich HB", "EC 15 발권 완료"],
      ["12:53", "밀라노 도착", "Milano Centrale", "경유만"],
      ["14:35", "밀라노 출발", "Milano Centrale", "Frecciarossa 8813 발권 완료"],
      ["15:42", "볼로냐 도착", "Bologna Centrale", "환승 20분"],
      ["16:02", "볼로냐 출발", "Bologna Centrale", "Frecciarossa 9425 발권 완료"],
      ["16:39", "피렌체 도착", "Firenze SMN", ""],
      ["17:10", "숙소 체크인", "Martelli 6", "사전 도착 연락 필요"],
      ["저녁", "베키오 다리 야경", "Ponte Vecchio", ""],
    ],
    transport: [
      "Interlaken Ost → Zürich HB: IC81 06:59 → 08:58",
      "Zürich HB → Milano Centrale: EC 15 09:33 → 12:53 발권 완료",
      "Milano Centrale → Firenze SMN: Frecciarossa 8813/9425 14:35 → 16:39 발권 완료",
      "남하 루트는 공사로 불가, 취리히 우회",
    ],
    foodCandidates: [
      {
        slot: "이동 중",
        name: "역/기차 간식",
        summary: "긴 이동일이라 무리한 점심 대신 샌드위치, 물, 과일 위주로 안정 운영.",
      },
      {
        slot: "도착 후 디저트",
        name: "La Strega Nocciola",
        summary: "두오모 산책 중 들르기 좋은 젤라또 후보.",
      },
      {
        slot: "저녁 특별식",
        name: "La Leggenda dei Frati",
        summary: "전망과 석양을 노리는 피렌체 특별 디너 후보.",
      },
      {
        slot: "저녁 뷰",
        name: "Golden View",
        summary: "폰테 베키오와 아르노강 전망 후보. 도착일 저녁 대안.",
      },
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
    foodCandidates: [
      {
        slot: "점심",
        name: "Da Nerbone",
        summary: "중앙시장 1층 람프레도토/볼리토 샌드위치 후보. 점심 줄 감안.",
      },
      {
        slot: "점심 대안",
        name: "Il Tartufo",
        summary: "중앙시장 2층 트러플 생면 파스타 후보. 캐주얼하게 먹기 좋음.",
      },
      {
        slot: "스냅 전 이른 저녁",
        name: "Trattoria 4 Leoni",
        summary: "올트라르노 전통 트라토리아 후보. 촬영 전엔 너무 무겁지 않게.",
      },
      {
        slot: "스냅 전 대안",
        name: "Gurdulu",
        summary: "현대적 토스카나 요리 후보. 분위기는 좋지만 시간 여유가 필요.",
      },
      {
        slot: "촬영 후",
        name: "Gelateria dei Neri",
        summary: "산타크로체/두오모 쪽 야경 산책 후 젤라또 마무리 후보.",
      },
    ],
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
    foodCandidates: [
      {
        slot: "오후 커피",
        name: "Antico Caffe Greco",
        summary: "스페인 계단 근처 오래된 카페. 트레비/스페인 계단 동선 중 에스프레소 후보.",
      },
      {
        slot: "저녁 1순위",
        name: "Trattoria Da Teo",
        summary: "트라스테베레 디너 후보. 첫 로마 밤에 현지 분위기 내기 좋음.",
      },
      {
        slot: "저녁 대안",
        name: "Grazia & Graziella",
        summary: "트라스테베레 테라스 분위기 후보. 예약 가능하면 편함.",
      },
      {
        slot: "젤라또",
        name: "Otaleg",
        summary: "트라스테베레 산책 후 젤라또 후보.",
      },
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
    foodCandidates: [
      {
        slot: "점심 1순위",
        name: "La Carbonara",
        summary: "몬티 지구 카르보나라 후보. 콜로세움/포로 로마노 후 동선이 좋음.",
      },
      {
        slot: "점심 대안",
        name: "L'Asino d'Oro",
        summary: "움브리아 요리 점심세트 후보. 가성비와 가벼운 점심에 강점.",
      },
      {
        slot: "야경 커피",
        name: "Tazza d'Oro",
        summary: "판테온 근처 에스프레소 후보. 야경 산책 중 짧게 들르기 좋음.",
      },
      {
        slot: "젤라또",
        name: "Gelateria del Teatro",
        summary: "나보나/판테온 주변 젤라또 후보. 저녁 산책 마무리용.",
      },
    ],
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
    foodCandidates: [
      {
        slot: "점심",
        name: "Bonci Pizzarium",
        summary: "바티칸 근처 피자 알 탈리오 후보. 투어 뒤 빠르게 먹기 좋음.",
      },
      {
        slot: "저녁 특별식",
        name: "Roscioli",
        summary: "캄포 데 피오리 근처 미식 디너 후보. 예약 필수급.",
      },
      {
        slot: "저녁 캐주얼",
        name: "Dar Filettaro",
        summary: "바칼라 튀김 후보. 짧게 먹고 와인바로 이어가기 좋음.",
      },
      {
        slot: "와인바",
        name: "Cul de Sac",
        summary: "Dar Filettaro 이후 와인으로 마무리하는 대안.",
      },
    ],
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
    foodCandidates: [
      {
        slot: "마지막 점심",
        name: "Da Enzo al 29",
        summary: "트라스테베레 마지막 카르보나라 후보. 12:00 오픈런 감안.",
      },
      {
        slot: "점심 대안",
        name: "Tonnarello",
        summary: "트라스테베레 인기 파스타 후보. 대기 줄이 길면 시간 관리 필요.",
      },
      {
        slot: "기념품",
        name: "Tazza d'Oro",
        summary: "공항 이동 전 커피 원두 기념품 후보. 판테온 주변 여유 시간에.",
      },
    ],
  },
];

const state = {
  selectedDay: itinerary[0].day,
  selectedGuideIndex: 0,
  map: null,
  markerLayer: null,
  routeLayer: null,
  guideLayer: null,
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
  els.guideSection = document.querySelector("#guide-section");
  els.guideTabs = document.querySelector("#guide-tabs");
  els.guideReading = document.querySelector("#guide-reading");
  els.foodSection = document.querySelector("#food-section");
  els.foodList = document.querySelector("#food-list");
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
  state.guideLayer = L.layerGroup().addTo(state.map);
}

function selectDay(dayNumber) {
  const day = itinerary.find((item) => item.day === dayNumber);
  if (!day) return;

  state.selectedDay = dayNumber;
  state.selectedGuideIndex = 0;
  updateActiveButton(dayNumber);
  renderDayDetails(day);
  renderStops(day);
  renderTimeline(day);
  renderTransport(day);
  renderFoodCandidates(day);
  renderMap(day);
  renderGuide(day);
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

function renderFoodCandidates(day) {
  const candidates = Array.isArray(day.foodCandidates) ? day.foodCandidates : [];

  if (!candidates.length || !els.foodSection || !els.foodList) {
    hideFoodCandidates();
    return;
  }

  els.foodSection.hidden = false;
  const items = candidates.map((candidate) => {
    const item = document.createElement("article");
    item.className = "food-item";

    const slot = document.createElement("span");
    slot.className = "food-slot";
    slot.textContent = candidate.slot;

    const name = document.createElement("strong");
    name.textContent = candidate.name;

    const summary = document.createElement("p");
    summary.textContent = candidate.summary;

    item.append(slot, name, summary);
    return item;
  });

  els.foodList.replaceChildren(...items);
}

function hideFoodCandidates() {
  if (els.foodSection) els.foodSection.hidden = true;
  if (els.foodList) els.foodList.replaceChildren();
}

function renderGuide(day) {
  const guideStops = Array.isArray(day.guideStops) ? day.guideStops : [];

  if (!guideStops.length || !els.guideSection || !els.guideTabs || !els.guideReading) {
    hideGuide();
    return;
  }

  els.guideSection.hidden = false;
  const tabs = guideStops.map((guide, index) => {
    const button = document.createElement("button");
    button.className = "guide-tab";
    button.type = "button";
    button.textContent = guide.label;
    button.setAttribute("aria-pressed", String(index === state.selectedGuideIndex));
    button.addEventListener("click", () => focusGuideStop(day, index));
    return button;
  });

  els.guideTabs.replaceChildren(...tabs);
  renderGuideReading(guideStops[state.selectedGuideIndex]);
  updateGuideTabs();
  renderGuideMarker(guideStops[state.selectedGuideIndex], false);
}

function hideGuide() {
  if (els.guideSection) els.guideSection.hidden = true;
  if (els.guideTabs) els.guideTabs.replaceChildren();
  if (els.guideReading) els.guideReading.replaceChildren();
  if (state.guideLayer) state.guideLayer.clearLayers();
}

function focusGuideStop(day, index) {
  const guide = day.guideStops?.[index];
  if (!guide) return;

  state.selectedGuideIndex = index;
  updateGuideTabs();
  renderGuideReading(guide);
  renderGuideMarker(guide, true);
}

function updateGuideTabs() {
  document.querySelectorAll(".guide-tab").forEach((button, index) => {
    const isActive = index === state.selectedGuideIndex;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderGuideReading(guide) {
  if (!guide || !els.guideReading) return;

  const title = document.createElement("h4");
  title.textContent = guide.title;

  const lead = document.createElement("p");
  lead.textContent = guide.lead;

  const list = document.createElement("ul");
  const points = guide.points.map((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    return item;
  });
  list.replaceChildren(...points);

  els.guideReading.replaceChildren(title, lead, list);
}

function renderGuideMarker(guide, shouldMoveMap) {
  if (!guide || !Array.isArray(guide.coords) || !state.map || !state.guideLayer) return;

  state.guideLayer.clearLayers();
  const marker = L.marker(guide.coords, {
    icon: L.divIcon({
      className: "",
      html: '<span class="guide-marker">◎</span>',
      iconSize: [34, 34],
      iconAnchor: [17, 17],
    }),
  });

  marker.bindPopup(`<strong>${escapeHtml(guide.label)}</strong><span>${escapeHtml(guide.title)}</span>`);
  marker.addTo(state.guideLayer);

  if (shouldMoveMap) {
    state.map.setView(guide.coords, 16);
  }
}

function renderMap(day) {
  if (!state.map || !state.markerLayer || !state.routeLayer) return;

  state.markerLayer.clearLayers();
  state.routeLayer.clearLayers();
  if (state.guideLayer) state.guideLayer.clearLayers();

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
