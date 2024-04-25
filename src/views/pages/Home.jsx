const React = require('react');
const Layout = require('./Layout');
// const Card = require('../components/Card');

function Home({ login }) {
  return (
    <Layout login={login}>
      <div className="mainContainer">
        <h1>Блог для бабушек и внуков</h1>
        {login ? (
          <>
            <h2>
              Добро пожаловать,
              {login}!
            </h2>
            <h3>Инструкция:</h3>
            <p>
              На нашем портале вы можете делиться своими рецептами, полезными
              советами, достижениями, а также просто смешными картинками!
            </p>
            <p>
              Чтобы поделиться вашей публикацией нужно перейти в раздел
              "Загрузить картинку"
            </p>
            <div className="upload-form-container">
              <form className="upload-form">
                <label htmlFor="imageUpload">ЗАГРУЗИТЬ КАРТИНКУ</label>
                <input
                  id="imageUpload"
                  name="image"
                  type="file"
                  accept="image/*"
                />
                <button className="upload-btn" type="button">Отправить</button>
              </form>
            </div>

            {/* <div className='cardsContainer'>
          {cards?.map(event => (
            <Card key={card.id} card={card} login={login} />
          ))}
        </div> */}
          </>
        ) : (
          <h2>Авторизуйтесь, чтобы смотреть и добавлять картинки</h2>
        )}
      </div>
      <script defer src="/js/uploadSuccess.js"></script>
    </Layout>
  );
}

module.exports = Home;
