/* eslint-disable quotes */
const express = require('express');

const path = require('path');

const { img } = require('./img');

const server = express();

const PORT = 3000;

server.set('view engine', 'hbs');
server.set('views', path.join(__dirname, 'src', 'views'));

server.use(express.urlencoded({ extended: true }));

/*server.get('/', (req, res) => {
  res.render('main', { listOfImages: img.images });
});*/

server.post('/photogallery', (req, res) => {
  const newPost = req.body;
  img.images.push(newPost);
  res.redirect('/');
});

server.get('/', (req, res) => {
  const queryLimit = req.query;
  let queryRequest = img.images;
  if (queryLimit.limit !== undefined) {
    queryRequest = img.images.slice(0, queryLimit.limit);
  } else if (queryLimit.reverse !== undefined) {
    queryRequest = img.images.reverse();
  }
  res.render('main', { listOfImages: queryRequest });
});

server.get('/hellopage', (req, res) => {
  res.send('<div>BEST DIV EVER!</div>');
});

server.post('/photogallery', (req, res) => {
  const linkform = req.body;
  img.images.push(linkform);
  res.redirect('/');
});

server.get('*', (req, res) => {
  res.send(`
  <a href = "/">main page</a>`);
});

server.listen(PORT, () => {
  console.log('Работает');
});
