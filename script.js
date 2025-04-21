let music;

function startMusic() {
  if (!music) {
    music = new Audio("music.mp3");
  }
  music.play();
  document.getElementById("musicModal").style.display = "none";
}

// Tampilkan modal otomatis saat halaman dibuka
window.onload = function () {
  document.getElementById("musicModal").style.display = "flex";
};
