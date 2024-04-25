const React = require('react');
const Layout = require('./Layout');
const Card = require('../components/Card');

function Home({ entries, login, role }) {
  // console.log(entries);
  return (
    <Layout login={login} role={role}>
      <div className="main-container">
        <h1>Блог для бабушек и внуков</h1>
        {login ? (
          <>
            <h2>Добро пожаловать, 
            {login}
            !
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
            <div className="cards-container">
              {entries.map((entry) => (
                <Card key={entry.id} entry={entry} login={login} />
              ))}
            </div>
          </>
        ) : (
          <h2>Авторизуйтесь, чтобы смотреть и добавлять картинки</h2>
        )}
      </div>
      <script defer src="/js/uploadSuccess.js" />
    </Layout>
  );
}

module.exports = Home;
