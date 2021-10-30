const calender = document.querySelector(".calender");
const clock = document.querySelector(".clock");

function getCalender() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");
  const dayNum = today.getDay();

  calender.innerText = `${year}년 ${month}월 ${date}일(${getTodayDay(dayNum)})`;
}

function getTodayDay(num) {
  if (num === 0) {
    return "일";
  } else if (num === 1) {
    return "월";
  } else if (num === 2) {
    return "화";
  } else if (num === 3) {
    return "수";
  } else if (num === 4) {
    return "목";
  } else if (num === 5) {
    return "금";
  } else {
    return "토";
  }
}

function getClock() {
  const today = new Date();
  const hour = String(today.getHours()).padStart(2, "0");
  const minute = String(today.getMinutes()).padStart(2, "0");
  const second = String(today.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${minute}:${second}`;
}

function getTime() {
  getCalender();
  getClock();
}

getTime();
setInterval(getTime, 1000);
