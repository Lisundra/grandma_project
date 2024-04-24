const homeRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/pages/Home');

homeRouter.get('/', (req, res) => {
  try {
    const { login, role } = req.session;
    renderTemplate(Home, { login, role }, res);
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
