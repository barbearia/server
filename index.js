const express = require('express');

require('./services/passport');

const app = express();
require('./services/routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);