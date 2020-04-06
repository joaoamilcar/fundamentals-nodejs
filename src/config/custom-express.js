require('marko/node-require').install();
require('marko/express');
const express = require('express');
const app = express();
const routes = require('../app/routes/routes');
const ip = 'localhost';
const port = 3000;
routes(app, port);

// module.exports = app;