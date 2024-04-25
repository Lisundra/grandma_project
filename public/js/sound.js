const soundContainer = document.querySelector('.cards-container');
const synth = window.speechSynthesis;
soundContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('sound-btn')) {
    const { text } = event.target.dataset;
    // console.log(text);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    synth.speak(utterance);
  }
});