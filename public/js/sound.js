const soundContainer = document.querySelector('.cards-container');
const synth = window.speechSynthesis;
soundContainer.addEventListener('click', (event) => {
  console.log(event.target);
  if (event.target.classList.contains('text-container')) {
    const text = event.target.innerText;
    // console.log(text);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    synth.speak(utterance);
  }
});