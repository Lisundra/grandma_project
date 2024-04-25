const homeRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/pages/Home');
const GrandmaCards = require('../views/pages/GrandmaCards');
const { Child, Content, Parent } = require('../../db/models');

homeRouter.get('/', (req, res) => {
  try {
    const { login, role } = req.session;
    renderTemplate(Home, { login, role }, res);
  } catch (err) {
    console.error('Ошибка при получении данных:', err);
    res.status(500).send('Ошибка на сервере');
  }
});

homeRouter.get('/grandmaCards', async (req, res) => {
  try {
    const { login, role } = req.session;
    const child = await Child.findOne({
      where: { login },
      include: {
        model: Parent,
        attributes: ['id'],
      },
    });
    const parentsIds = child.get({ plain: true }).Parents.map((el) => el.id);
    const cards = await Content.findAll({
      where: {
        parent_id: parentsIds,
      },
      include: {
        model: Parent,
        attributes: ['login'],
      },
    });
    const cardsData = cards.map((card) => card.get({ plain: true }));
    // console.log(cardsData);
    renderTemplate(GrandmaCards, { cardsData, login, role }, res);
  } catch (err) {
    console.error('Ошибка при получении данных:', err);
    res.status(500).send('Ошибка на сервере');
  }
});

homeRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cookieName');
    res.redirect('/');
  });
});

module.exports = homeRouter;
