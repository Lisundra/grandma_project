const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <h2 className="hTag">Войти</h2>
      <form action="/login" method="POST" id="loginForm" className="loginForm">
        <label htmlFor="inputLogin" className="form-label">
          Имя
        </label>
        <input
          name="login"
          type="text"
          className="inputLogin"
          id="inputLogin"
        />
        <label htmlFor="inputPas" className="form-label">
          Пароль
        </label>
        <input
          name="password"
          type="password"
          className="inputPas"
          id="inputPas"
        />
        <button type="submit" className="loginBtn">
          Войти
        </button>
      </form>
      <script defer src="/js/login.js" />
    </Layout>
  );
};
