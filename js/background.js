const images = [
  "black_background.png",
  "brown_background.png",
  "dark_green_background.png",
  "green_background.png",
];
const body = document.querySelector("body");

const backgroundImg = images[Math.floor(Math.random() * images.length)];

body.style = `background-image: url("img/${backgroundImg}")`;
