const React = require('react');
const Layout = require('./Layout');

function Home({ login }) {
  return (
    <Layout login={login}>
      <div className="mainContainer">
        <h1>Блог для бабушек и внуков</h1>
        {login ? (
          <>
            <h2>
              Добро пожаловать,
              {login}
              !
            </h2>
            {/* <a href="/events">
              <button className="home-button">
                Перейти к выбору мероприятий
              </button>
            </a> */}
          </>
        ) : (
          <h2>Авторизуйтесь, чтобы смотреть и добавлять картинки</h2>
        )}
      </div>
    </Layout>
  );
}

module.exports = Home;
