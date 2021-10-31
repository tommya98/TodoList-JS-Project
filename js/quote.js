const quotes = [
  createQuote("장미꽃은 가시 틈에서 자란다.", "탈무드"),
  createQuote(
    "최후의 승리는 출발선의 비약이 아니라, \n 결승점에 이르기까지의 끈기와 노력이다.",
    "워나매커"
  ),
  createQuote("음미되지 않은 인생은 보람이 없다.", "소크라테스"),
];

const quote = document.querySelector(".quote-text");
const author = document.querySelector(".quote-author");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.text;
author.innerText = "-" + todayQuote.author;

function createQuote(quote, name) {
  return { text: quote, author: name };
}
