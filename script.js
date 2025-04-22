function moveFocus(current, next) {
  const currInput = document.getElementById(current);
  if (currInput.value.length === 1 && next) {
    document.getElementById(next).focus();
  }
}

function moveFocusOnBackspace(event, current, prev) {
  if (event.key === "Backspace" && !event.target.value && prev) {
    document.getElementById(prev).focus();
  }
}

function checkPin() {
  const pin6 = document.getElementById("pin6").value;
  const pinError = document.getElementById("pinError");

  if (pin6 === "6") {
    document.getElementById("musicModal").style.display = "flex";
    pinError.textContent = "";
  } else {
    pinError.textContent = "Pin salah, coba lagi ya!";
  }
}

function startMusic() {
  const audio = new Audio("music.mp3");
  audio.play();
  document.getElementById("musicModal").style.display = "none";
}
