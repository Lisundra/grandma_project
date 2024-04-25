
const React = require('react');

function Card({ entry }) {

  const speakText = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    synth.speak(utterance);
  };

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={entry.image_path} alt={Uploaded image: ${entry.text}} />
      </div>
      <div className="text-block">
        <div className="text-container">
          <div className="text">
            {entry.text}
          </div>
          <div className="sound-btn-container">
            <button className="sound-btn" type="button" onClick={() => speakText(entry.text)}>
              ОЗВУЧИТЬ ТЕКСТ
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

module.exports = Card;