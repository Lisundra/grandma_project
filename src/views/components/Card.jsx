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
      </div>
    </div>
  );
}
module.exports = Card;
