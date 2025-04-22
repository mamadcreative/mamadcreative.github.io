window.onload = function () {
  const modal = document.getElementById('musicModal');
  const mainContent = document.getElementById('mainContent');
  const playButton = document.getElementById('playButton');
  const audio = new Audio('music.mp3'); // Ganti dengan file musik kamu

  playButton.onclick = () => {
    audio.play();
    modal.style.display = 'none';
    mainContent.style.display = 'block';
  };

  document.getElementById('surveyForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const answer = document.querySelector('input[name="likeMusic"]:checked');
    if (answer) {
      const sheetURL = 'https://script.google.com/macros/s/AKfycbwW8UpwXm8SlUUtYOYosoPvhMrUiaJMZcEuogbyPalssc23CHIq653keApD4YD-gFPOOw/exec'; // GANTI
      fetch(sheetURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `likeMusic=${encodeURIComponent(answer.value)}`
      }).then(() => {
        alert('Terima kasih atas tanggapannya!');
      }).catch(err => {
        alert('Terjadi kesalahan: ' + err.message);
      });
    } else {
      alert('Silakan pilih salah satu jawaban.');
    }
  });
};
