const React = require('react');

function Navbar({ login, role }) {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        {login ? (
          <div className="collapse navbar-collapse" id="navbarNav">
            {role === 'child' && (
              <a className="nav" href="grandmaCards">
                <span>Загруженные бабушкой</span>
              </a>
            )}
            <div className="nav">{login}</div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav" href="/">
                  <span>Дом</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav" href="/logout">
                  <span>Выйти</span>
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav" href="/">
                  <span>Дом</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav" href="/login">
                  <span>Вход</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav" href="/register">
                  <span>Зарегистрироваться</span>
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

