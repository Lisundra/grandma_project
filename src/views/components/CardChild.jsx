const React = require('react');

function Card({ card }) {
  return (
    <div className="childcontainer">
      <div className="owner">{card.Parent.login}</div>
      <div className="image-container">
        <img
          src={card.image_path}
          alt=""
          style={{ width: '200px', height: 'auto' }}
        />
      </div>
    </div>
  );
}

module.exports = Card;
