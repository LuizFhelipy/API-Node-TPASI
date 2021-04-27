const express = require('express');
const swaggerJSDoc = require('../documentation.json');
const router = require('./routes/characterRoute');
const swaggerUi = require('swagger-ui-express');
const app = express();

app.use(express.json());
app.use('/', router, swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));
//app.use('/', router);

app.listen(process.env.PORT || 8081, () => {
    console.log('Server started')
})