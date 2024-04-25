const homeRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/pages/Home');
const { Content } = require('../../db/models');

homeRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cookieName');
    res.redirect('/');
  });
});

homeRouter.get('/', async (req, res) => {
  try {
    // console.log('+++++++++++++++ мы в этой ручке +++++++++++++++');
    const { login, role } = req.session;
    const metaEntries = await Content.findAll({
      order: [['id', 'DESC']],
    });
    const entries = metaEntries.map((entry) => entry.get({ plain: true }));
    renderTemplate(Home, { entries, login, role }, res);
  } catch (err) {
    console.error('Error on homeRouter.get() ====>>>>', err);
  }
});

module.exports = homeRouter;
