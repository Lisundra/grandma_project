const { Router } = require('express');
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/pages/Home');

const homeRouter = new Router();

// homeRouter.get('/', (req, res) => {
//   renderTemplate(Home, {}, res);
// });

homeRouter.get('/', (req, res) => {
  // const { login } = req.app.locals.user;
  // console.log(login);
  console.log(req.session, '-------------');
  if (req.session) {
    const { login } = req.session;
    renderTemplate(Home, { login }, res);
  } else {
    renderTemplate(Home, {}, res);
  }
});

module.exports = homeRouter;
