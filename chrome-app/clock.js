const clock = document.querySelector("#clock");
const calendar = document.querySelector("#calendar");
function getDate() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
  calendar.innerText = `${date.getMonth() + 1}월 ${date.getDate()}일`;
}
getDate();
setInterval(getDate, 1000);
