const axios = require('axios');
const urlBaseMarvel = 'http://gateway.marvel.com/v1/public/characters';


//get de todos os characters
const listAll = async (req, res) => {
    var url = urlBaseMarvel + gethash();
    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    });

}
//get de um character
const listOne = async (req, res) => {
    var id = req.params.id;
    var url = urlBaseMarvel + '/' + id + gethash();


    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(404).send({
            message: `character with id (${id}) not found`
        });
    });
}

//get character comics
const listcharactercomics = async (req, res) => {
    var id = req.params.id;
    var url = urlBaseMarvel + '/' + id + '/comics' + gethash();


    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(404).send({
            message: `character comics with id (${id}) not found`
        });
    });
}

//get character events
const listcharacterevents = async (req, res) => {
    var id = req.params.id;
    var url = urlBaseMarvel + '/' + id + '/events' + gethash();


    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(404).send({
            message: `character events with id (${id}) not found`
        });
    });
}

//get character series
const listcharacterseries = async (req, res) => {
    var id = req.params.id;
    var url = urlBaseMarvel + '/' + id + '/series' + gethash();


    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(404).send({
            message: `character series with id (${id}) not found`
        });
    });
}

//get character stories
const listcharacterstories = async (req, res) => {
    var id = req.params.id;
    var url = urlBaseMarvel + '/' + id + '/stories' + gethash();


    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(404).send({
            message: `character stories with id (${id}) not found`
        });
    });
}

//função de reutilização de código
function gethash() {
    const ts = process.env.ts;
    const apikey = process.env.apikey;
    const hash = process.env.hash;
    return '?ts=' + ts + '&apikey=' + apikey + '&hash=' + hash;
}

module.exports = {
    listAll,
    listOne,
    listcharactercomics,
    listcharacterevents,
    listcharacterseries,
    listcharacterstories
};