/* eslint-disable quotes */
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const sessions = require('express-session');
const session = require('express-session');
const bcrypt = require('bcrypt');
const { img } = require('./img');
const { usersDB } = require('./users');
const { checkAuth } = require('./src/views/middlewares/checkAuth');

const server = express();
const PORT = process.env.PORT || 3000;
const secretKey = 'qwerty';
const saltRounds = 10;

server.set('view engine', 'hbs');
server.set('views', path.join(process.cwd(), 'src', 'views'));
server.set('cookieName', 'sessionId');
hbs.registerPartials(path.join(process.cwd(), 'src', 'views', 'partials'));

server.use(express.urlencoded({ extended: true }));
server.use(sessions({
  name: server.get('cookieName'),
  secret: secretKey,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 86400 * 1e3,
  },
}));
server.use(express.static(path.join(process.cwd(), 'public')));
server.use(express.json());

server.use((req, res, next) => {
  const currentEmail = req.session?.user?.email;
  if (currentEmail) {
    const currentUser = usersDB.users.find((user) => user.email === currentEmail);
    res.locals.name = currentUser.name;
  }
  next();
});

server.post('/photogallery', (req, res) => {
  const newPost = req.body;
  newPost.authorEmail = req.session.user.email;
  img.images.push(newPost);
  newPost.id = (img.images.indexOf(newPost) + 1);
  res.redirect('/');
});

server.get('/', (req, res) => {
  const queryLimit = req.query;
  let queryRequest = img.images;
  if (queryLimit.limit !== undefined && queryLimit.reverse !== undefined) {
    queryRequest = img.images.slice(0, queryLimit.limit).reverse();
  } else if (queryLimit.limit !== undefined) {
    queryRequest = img.images.slice(0, queryLimit.limit);
  } else if (queryLimit.reverse !== undefined) {
    queryRequest = img.images.reverse();
  }
  res.render('main', { listOfImages: queryRequest });
});

server.post('/photogallery', (req, res) => {
  const linkform = req.body;
  img.images.push(linkform);
  res.redirect('/');
});

server.get('/auth/signup', (req, res) => {
  res.render('signUp');
});

server.post('/auth/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const hashPass = await bcrypt.hash(password, saltRounds);
  usersDB.users.push({
    name,
    email,
    password: hashPass,
  });
  req.session.user = {
    email,
  };
  res.redirect('/');
});

server.get('/auth/signin', (req, res) => {
  res.render('signIn');
});

server.post('/auth/signin', async (req, res) => {
  const { email, password } = req.body;
  const currentUser = usersDB.users.find((user) => user.email === email);
  if (currentUser) {
    if (await bcrypt.compare(password, currentUser.password)) {
      req.session.user = {
        email,
      };
      return res.redirect('/');
    }
  } else {
    return res.render('unsuccessAuth');
  }
  return res.redirect('/auth/signin');
});

server.get('/auth/signout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.redirect('/');
    res.clearCookie(req.app.get('cookieName'));
    return res.redirect('/');
  });
});

server.get('/secret', checkAuth, (req, res) => {
  res.render('secret');
});

server.delete('/delete', (req, res) => {
  const aEmail = img.images.find((el) => Number(el.id) === Number(req.body.id)).authorEmail;
  if (req.session.user.email === aEmail) {
    const newList = img.images.filter((el) => Number(el.id) !== Number(req.body.id));
    img.images = newList;
    return res.sendStatus(204);
  } return res.sendStatus(403);
});

server.listen(PORT, () => {
  console.log('Работает');
});
