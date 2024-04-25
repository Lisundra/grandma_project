const regRouter = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../utils/renderTemplate');

const Register = require('../views/pages/Register');

const { Parent, Child, ParentChild } = require('../../db/models');

regRouter.get('/', (req, res) => {
  renderTemplate(Register, null, res);
});
regRouter.post('/', async (req, res) => {
  try {
    const { login, password, role, grandmother } = req.body;
    const parentUser = await Parent.findOne({ where: { login } });
    const childrenUser = await Child.findOne({ where: { login } });

    if (parentUser || childrenUser) {
      return res.json({ err: 'Пользователь с таким логином уже существует' });
    }

    let newUser;
    if (grandmother) {
      const grandUser = await Parent.findOne({
        where: { login: grandmother },
      });
      if (grandUser) {
        const hash = await bcrypt.hash(password, 10);
        newUser = await Child.create({
          login,
          password: hash,
          role,
        });
        await ParentChild.create({
          parent_id: grandUser.id,
          child_id: newUser.id,
        });
      } else {
        return res.json({ err: 'Твоей бабушки тут нет)' });
      }
    }

    if (role === 'parent') {
      const hash = await bcrypt.hash(password, 10);
      newUser = await Parent.create({
        login,
        password: hash,
        role,
      });
    }
    req.session.login = newUser.login;
    req.session.userId = newUser.id;

    req.session.save(() => {
      res.json({
        regDone: `Добро пожаловать, ${newUser.login}, ваша регистрация завершена`,
      });
    });
  } catch (error) {
    res.json({ err: error.message });
    console.log('ОШИБКА НА ЭТАПЕ РЕГИСТРАЦИИ>>>>', error);
  }
});

module.exports = regRouter;
