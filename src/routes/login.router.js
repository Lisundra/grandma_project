const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../utils/renderTemplate');

const Login = require('../views/pages/Login');

const { Parent, Child } = require('../../db/models');

loginRouter.get('/', (req, res) => {
  renderTemplate(Login, null, res);
});

loginRouter.post('/', async (req, res) => {
  try {
    const { login, password } = req.body;
    const parentUser = await Parent.findOne({ where: { login } });
    const childrenUser = await Child.findOne({ where: { login } });
    if (!parentUser || !childrenUser) {
      console.log('-_____________-');
      res.redirect('/register');
    } else {
      const user = parentUser || childrenUser;
      const checkPass = await bcrypt.compare(password, user.password);
      console.log(user, '++++++++++++++++++++');
      if (checkPass) {
        req.session.login = user.login;
        req.session.userId = user.id;
        req.session.save(() => {
          res.redirect('/');
        });
      } else {
        res.status(401).send('Неверный логин или пароль');
      }
    }
  } catch (error) {
    console.log(`loginRouter => ${error}`);
  }
});

module.exports = loginRouter;
