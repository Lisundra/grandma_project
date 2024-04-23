const React = require('react');

const Layout = require('./Layout');

module.exports = function Register() {
  return (
    <Layout>
      <h2>Заполните форму регистрации</h2>
      <hr />
      <form action="/register" method="POST" id="regForm">
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
        <label htmlFor="selectRole" className="form-label">
          Кто вы?
          <select name="role" className="selectRole" required>
            <option value="parent" selected>
              Бабушка
            </option>
            <option value="child">Внук/Внучка</option>
          </select>
        </label>
        <button type="submit" className="regBtn">
          Зарегистрироваться
        </button>
      </form>
      <hr />
      <h3 className="regErrMsg"></h3>
      <script defer src="/js/reg.js" />
    </Layout>
  );
};
