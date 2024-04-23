const regRouter = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../utils/renderTemplate');

const Register = require('../views/Register');

const { Parent, Children } = require('../../db/models');

regRouter.get('/', (req, res) => {
  renderTemplate(Register, null, res);
});

regRouter.post('/', async (req, res) => {
  try {
    const { login, password, role } = req.body;
    const parentUser = await Parent.findOne({ where: { login } });
    const childrenUser = await Children.findOne({ where: { login } });

    if (parentUser || childrenUser) {
      res.json({ err: 'Пользователь с таким логином уже существует' });
    } else if (role === 'parent') {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await Parent.create({
        login,
        password: hash,
        role,
      });
      req.session.login = newUser.login;
      req.session.userId = newUser.id;

      req.session.save(() => {
        res.json({
          regDone: `Добро пожаловать, ${newUser.login}, ваша регистрация завершена`,
        });
      });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await Children.create({
        login,
        password: hash,
        role,
      });
      req.session.login = newUser.login;
      req.session.userId = newUser.id;

      req.session.save(() => {
        res.json({
          regDone: `Добро пожаловать, ${newUser.login}, ваша регистрация завершена`,
        });
      });
    }
  } catch (error) {
    res.json({ err: error });
    console.log('ОШИБКА НА ЭТАПЕ РЕГИСТРАЦИИ>>>>', error);
  }
});

module.exports = regRouter;
