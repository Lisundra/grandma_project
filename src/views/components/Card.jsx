const React = require('react');

function Card({ entry }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={entry.image_path} alt={`Uploaded image: ${entry.text}`} />
      </div>
      <div className="text-block">
        <div className="text-container">
          {entry.text}
        </div>
        <div className="sound-btn-container">
          <button className="sound-btn" type="button" data-text={entry.text}>
            ОЗВУЧИТЬ ТЕКСТ
          </button>
        </div>
      </div>
    </div>
  );
}

module.exports = Card;
