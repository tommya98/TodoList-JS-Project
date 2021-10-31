const weather = document.querySelector(".temperature");
const description = document.querySelector(".description");
const city = document.querySelector(".location");
const API_KEY = "b42110a47749c0360e6df8a5f299c39f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  console.log(lat, lon);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      description.innerText = `${data.weather[0].description}`;
      weather.innerText = `${data.main.temp}℃`;
    });
}

function onGeoError() {
  alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
