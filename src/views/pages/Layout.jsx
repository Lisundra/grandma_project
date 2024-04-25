const React = require('react');
const Navbar = require('../components/Navbar');

function Layout({ children, login }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles/style.css" />
        <title>Бабушкин помощник</title>
      </head>
      <body>
        <Navbar login={login} />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;
