const express = require('express');
const controller = require('./controller/character.controller');
const router = require('./routes/characterRoute');


const app = express();

app.use(express.json());
app.use('/', router);

app.listen(8081, () => {
    console.log('Server started on port 8080')
})