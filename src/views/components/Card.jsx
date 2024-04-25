const React = require('react');

function Card({ card }) {
  return (
    <div className="card-container">
      <div className="owner">
        {card.Parent.login}
      </div>
      <div className="image-container">
        <img
          src="/image/61df2daf-0553-4907-a5b2-ba8478c8cd07.jpg"
          alt={`Uploaded image: ${card.text}`}
          style={{ width: '200px', height: 'auto' }}
        />
      </div>
      {/* <div className="text-container">
        <div className="text">
          {card.text}
        </div>
      </div> */}
      {/* <div className="text-btn">
          <button type="button">
              РАСПОЗНАТЬ ТЕКСТ
          </button>
          <button type="button">
              ОЗВУЧИТЬ ТЕКСТ
          </button>
        </div> */}
    </div>
  );
}

module.exports = Card;
