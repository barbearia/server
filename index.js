const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')
require('./model/User')
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
require('./services/routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);