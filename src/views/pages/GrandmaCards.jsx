const React = require('react');
const Layout = require('./Layout');
const CardChild = require('../components/CardChild');

function GrandmaCards({ cardsData, login, role }) {
  // console.log(cardsData, login, role);
  return (
    <Layout login={login} role={role}>
      <h1>hello</h1>
      <h1>Добрый день, {login}</h1>
      <div className="mainContainer">
        {cardsData.map((card) => (
          <CardChild key={card.id} card={card} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = GrandmaCards;
