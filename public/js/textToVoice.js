console.log('connected!');

document
  .querySelector('.text-btn')
  .addEventListener('onclick', (event) => {
    event.preventDefault();

    const text = document.querySelector('.text');

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    synth.speak(utterance);
  });
