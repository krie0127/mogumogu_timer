let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;
let userId;

console.log("call index.js")
console.log(window)

function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
}

window.startTimer = startTimer

function stopTimer() {
  clearInterval(intervalId);
}

window.stopTimer = stopTimer

function resetTimer() {
  clearInterval(intervalId);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerText = "00:00:00";
}

window.resetTimer = resetTimer

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedHours = hours.toString().padStart(2, "0");
  document.getElementById("timer").innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

window.updateTimer = updateTimer

function onClickPost() {
  console.log("call onClickPost")
  const url = "http://localhost:3000/stopwatches"
  const obj = {hours: hours, minutes: minutes, seconds: seconds}
  console.log(JSON.stringify(obj))
  const res = fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    },
  body: JSON.stringify(obj)
  })
  const data = res.json()

  console.log(data)
}

window.onClickPost = onClickPost

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("startTimer").addEventListener("click", startTimer);
  document.getElementById("stopTimer").addEventListener("click", stopTimer);
  document.getElementById("resetTimer").addEventListener("click", resetTimer);
  document.getElementById("saveTimer").addEventListener("click", saveTimerDataToDB);
});

// タイマーが停止されたときに呼び出される関数
function saveTimerDataToDB() {
  const data = {
    user_id: userId,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }};

// 変数宣言

// 関数宣言

// window オブジェクトに関数を登録する
