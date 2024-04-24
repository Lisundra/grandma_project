const React = require('react');

function Navbar({ login }) {
  console.log(login);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {login ? (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {login.role === 'parent' && (
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Загрузить картинку
                  </a>
                </li>
              )}
              {login.role === 'child' && (
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Загруженные бабушкой
                  </a>
                </li>
              )}
              <li className="nav-item">
                <div className="nav-link">{login}</div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/logout">
                  Выйти
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Вход
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Зарегистрироваться
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

module.exports = Navbar;
