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
    const answer = document.querySelector('input[name=\"likeMusic\"]:checked');
    if (answer) {
      const sheetURL = 'https://script.google.com/macros/s/AKfycbwWVOMm8hiLf96Le11egrxjB2OSZ1eLb3Pggw9jWPrMT4xGRT7AHlaGRCDVqknI6mrhuw/exec'; // Ganti dengan URL Google Apps Script kamu
      fetch(sheetURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `likeMusic=${answer.value}`
      });
      alert('Terima kasih atas tanggapannya!');
    }
  });
};
