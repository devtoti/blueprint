let interval;
function countdown() {
  clearInterval(interval);
  interval = setInterval(() => {
    const timerElement = document.querySelector(".countdown");
    let [minutes, seconds] = timerElement.innerHTML.split(":").map(num => parseInt(num));

    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(interval);
        sessionExpired();
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    timerElement.innerHTML = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }, 1000);
}

countdown();
function sessionExpired() {
  let callNowText = document.querySelector(".call-now");
  let timerText = document.querySelector(".timer-text");
  let countdown = document.querySelector(".countdown");

  callNowText.innerHTML = "Su sesión ha expirado";
  timerText.innerHTML = "Haga click para recargar y comenzar de nuevo";
  countdown.innerHTML = "0:00";

  callNowText.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  });
}