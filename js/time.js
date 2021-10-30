const date = document.querySelector("date");
const clock = document.querySelector("clock");

function getDate() {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = String(today.getMonth() + 1).padStart(2, "0");
  const todayDate = String(today.getDate()).padStart(2, "0");
  const todayDayNum = today.getDay();

  console.log(
    `${todayYear}년 ${todayMonth}월 ${todayDate}일(${getTodayDay(todayDayNum)})`
  );
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

  console.log(`${hour}:${minute}:${second}`);
}

getDate();
getClock();