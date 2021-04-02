const express = require('express');
const controller = require('../controller/character.controller');
const axios = require('axios');

const router = express.Router();

const ts = '1617309428';
const apikey = '7f4986d1e7942fe8d08b5bd80d9ac4ec'
const hash = '53546b20796d97c4f27a4f200309b7a5';

const urlBaseMarvel = 'http://gateway.marvel.com/v1/public/characters?';

router.get('/v1/public/characters', async (req, res) => {
    var url = urlBaseMarvel + 'ts=' + ts + '&apikey=' + apikey + '&hash=' + hash;
    await axios.get(url).then(async function (r) {

        res.status(200).send(r);
    });

});

module.exports = router