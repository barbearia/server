const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./model/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}))
app.use(passport.initialize());
app.use(passport.session());

require('./services/routes')(app);

if(process.env.NODE_ENV === 'production') {
  /**
   * onde procurar os arquivos .js e .css
   */
  app.use(express.static('/client/build'));

  /**
   * qualquer request que não possua rota definida irá retornar o index.html
   */
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);