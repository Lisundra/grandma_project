const React = require('react');
const Layout = require('./Layout');
const Card = require('../components/Card');

function GrandmaCards({ cardsData, login, role }) {
  // console.log(cardsData, login, role);
  return (
    <Layout login={login} role={role}>
      <h1>hello</h1>
      <div className="mainContainer">
        {cardsData.map((card) => (
          <Card key={card.id} card={card}/>
        ))}
      </div>
    </Layout>
  );
}

module.exports = GrandmaCards;
