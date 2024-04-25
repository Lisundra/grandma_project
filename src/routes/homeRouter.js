const homeRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/pages/Home');
const { Content } = require('../../db/models');

// homeRouter.get('/', (req, res) => {
//   try {
//     const { login } = req.session;
//     renderTemplate(Home, { login }, res);
//   } catch (err) {
//     console.error('Ошибка при получении данных:', err);
//     res.status(500).send('Ошибка на сервере');
//   }
// });

homeRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cookieName');
    res.redirect('/');
  });
});

homeRouter.get('/', async (req, res) => {
  try {
    // console.log('+++++++++++++++ мы в этой ручке +++++++++++++++');
    const { login } = req.session;
    const metaEntries = await Content.findAll({
      order: [['id', 'DESC']],
    });
    const entries = metaEntries.map((entry) => entry.get({ plain: true }));
    renderTemplate(Home, { entries, login }, res);
  } catch (err) {
    console.error('Error on homeRouter.get() ====>>>>', err);
  }
});

module.exports = homeRouter;
