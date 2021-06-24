const express = require('express');
const swaggerJSDoc = require('../documentation.json');
const router = require('./routes/characterRoute');
const swaggerUi = require('swagger-ui-express');
const app = express();

require("dotenv").config()

app.use(express.json());
app.use('/', router, swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));

module.exports = app;