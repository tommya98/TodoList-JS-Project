const quotes = [
  createQuote("장미꽃은 가시 틈에서 자란다.", "탈무드"),
  createQuote(
    "최후의 승리는 출발선의 비약이 아니라,\n결승점에 이르기까지의 끈기와 노력이다.",
    "워나매커"
  ),
  createQuote("음미되지 않은 인생은 보람이 없다.", "소크라테스"),
  createQuote("자기를 아는 것이 최대의 지혜이다.", "탈무드"),
  createQuote(
    "불은 쇠를 단련시키고 \n 역경은 강한 사람을 단련시킨다.",
    "세네카"
  ),
  createQuote(
    "무엇인가 의논할 때는 과거를 누릴때는 현재를,\n무엇인가 할때는 미래를 생각하라.",
    "세네카"
  ),
  createQuote("인내는 희망을 품은 기술이다.", "시루스"),
  createQuote("운명은 용감한 자를 사랑한다.", "버질"),
  createQuote(
    "우정은 함께 누림으로써 번영의 빛을 더해주고\n나누어 가짐으로써 역경의 짐을 가볍게 한다.",
    "키케로"
  ),
  createQuote("누구나 자기 손아귀에 자기의 운명을 쥐고 있다.", "시푸스"),
  createQuote(
    "인간의 가장 놀라운 특성의 한 가지는\n마이너스를 플러스로 바꾸는 힘이다.",
    "아들러"
  ),
  createQuote("중요한 것보다 소중한 것을 먼저 하라.", "스티븐 코비"),
  createQuote(
    "행복한 사람은 특별한 환경 속에 있는 사람이 아니라\n어떤 특별한 마음자세를 갖고 살아가는 사람이다.",
    "휴 다운스"
  ),
  createQuote(
    "무례한 사람의 행동은\n내 행실을 바로잡게 해주는 스승이다.",
    "공자"
  ),
  createQuote("짧은 인생은 시간을 낭비함으로써 더욱 짧아진다.", "탈무드"),
  createQuote(
    "휴식과 행복은 누구나 갈망하는 바이지만,\n그것은 근면에 의해서만 얻게 된다.",
    "캠퍼스"
  ),
  createQuote("경험은 지식의 어머니이다.", "브래틀"),
  createQuote(
    "우리는 행복이라는 제품을 만들 수 있는 재료와 힘을 갖고 있으면서도\n기성품의 행복만을 찾고 있다.",
    "알랭"
  ),
  createQuote(
    "자신을 존중하는 사람은 타인으로부터 안전하다.\n그는 누구도 뚫을 수 없는 갑옷을 입고 있기 때문이다.",
    "롱펠로우"
  ),
  createQuote(
    "배워도 여전히 채워지지 않는 것이 지혜이며,\n가르쳐도 결코 싫증나지 않는 것이 사랑이다.",
    "맹자"
  ),
  createQuote(
    "삶은 즐겁다. 죽음은 평화롭다.\n골칫거리는 바로 그 중간과정이다.",
    "아이작 아시모프"
  ),
  createQuote("젊은 날의 의무는 부패에 맞서는 것이다.", "커트 코베인"),
  createQuote("사랑하는 것은 천국을 살짝 엿보는 것이다.", "카렌 선드"),
  createQuote("계획 없는 목표는 한낱 꿈에 불과하다.", "생텍쥐페리"),
  createQuote(
    "성공한 사람보다는 가치 있는 사람이 되려 하라.",
    "알버트 아인슈타인"
  ),
  createQuote("낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.", "메이슨 쿨리"),
  createQuote("자신감은 위대한 과업의 첫째 요건이다.", "사무엘 존슨"),
];

const quote = document.querySelector(".quote-text");
const author = document.querySelector(".quote-author");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.text;
author.innerText = "- " + todayQuote.author;

function createQuote(quote, name) {
  return { text: quote, author: name };
}
