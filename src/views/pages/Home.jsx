const React = require('react');
const Layout = require('./Layout');
const Card = require('../components/Card');

function Home({ entries, login, role }) {
  return (
    <Layout login={login} role={role}>
      <div className="main-container">
        <h1>Блог для бабушек и внуков</h1>
        {login ? (
          <>
            <h2>Добро пожаловать, {login}!</h2>
            <h3>Инструкция:</h3>
            <p>
              На нашем портале вы можете делиться своими рецептами, полезными
              советами, достижениями, а также просто смешными картинками!
            </p>
            <p>
              Чтобы поделиться вашей публикацией нужно выбрать файл и нажать на
              кнопку "Опубликовать"
            </p>
            <p>Чтобы прослушать текст картинки просто нажмите на текст.</p>
            <div className="upload-form-container">
              <form className="upload-form">
                <label htmlFor="imageUpload" className="imageUpload">
                  ЗАГРУЗИТЬ КАРТИНКУ
                </label>
                <input
                  id="imageUpload"
                  name="image"
                  type="file"
                  accept="image/*"
                />
                <button className="upload-btn" type="button">
                  Опубликовать
                </button>
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
      <script defer src="/js/sound.js" />
    </Layout>
  );
}

module.exports = Home;
