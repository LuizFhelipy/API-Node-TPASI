const express = require('express');
const controller = require('../controller/character.controller');

const router = express.Router();



//get de todos os characters
router.get('/v1/public/characters', controller.listAll)
//get de um character
router.get('/v1/public/characters/:id', controller.listOne)

module.exports = router;