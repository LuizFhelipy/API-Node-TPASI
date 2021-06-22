const express = require('express');
const controller = require('../controller/charactercontroller');

const router = express.Router();



//get de todos os characters
router.get('/v1/public/characters', controller.listAll);
//get de um character
router.get('/v1/public/characters/:id', controller.listOne);
//get character comics
router.get('/v1/public/characters/:id/comics', controller.listcharactercomics);
//get character events
router.get('/v1/public/characters/:id/events', controller.listcharacterevents)
//get character series
router.get('/v1/public/characters/:id/series', controller.listcharacterseries)
//get character stories
router.get('/v1/public/characters/:id/stories', controller.listcharacterstories)

module.exports = router;