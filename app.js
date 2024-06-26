require('@babel/register');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { secureRoute, checkUser } = require('./src/middlewares/common');

const regRouter = require('./src/routes/reg.router');
const loginRouter = require('./src/routes/login.router');
const homeRouter = require('./src/routes/homeRouter');
const uploadRouter = require('./src/routes/upload.router');

const app = express();

const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'cookieName',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'grandma',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 1000 * 60 * 60,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'src', 'uploads')));

app.use('/register', secureRoute, regRouter);
app.use('/login', secureRoute, loginRouter);
app.use('/', homeRouter);
app.use('/upload', uploadRouter);

app.listen(PORT, function () {
  console.log(`Server listening at localhost:${this.address().port}`);
});
