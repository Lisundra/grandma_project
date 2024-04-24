const React = require('react');

function Card({ card, login }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={card.image_path} alt={Uploaded image: ${card.text}} />
      </div>
      <div className="text-container">
        <div className="text">
          {card.text}
        </div>
        <div className="text-btn">
          <button type="button">
            ОЗВУЧИТЬ ТЕКСТ
          </button>
        </div>
        <div className="upload-btn">
          <form action="/upload" method="post" encType="multipart/form-data">
            <label htmlFor="imageUpload">ЗАГРУЗИТЬ КАРТИНКУ</label>
            <input id="imageUpload" name="image" type="file" accept="image/*" />
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}

module.exports = Card;