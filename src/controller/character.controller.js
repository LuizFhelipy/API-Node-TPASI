const axios = require('axios');

const ts = '1617309428';
const apikey = '7f4986d1e7942fe8d08b5bd80d9ac4ec'
const hash = '53546b20796d97c4f27a4f200309b7a5';

const urlBaseMarvel = 'http://gateway.marvel.com/v1/public/characters';


//get de todos os characters
const listAll = async (req, res) => {
    var url = urlBaseMarvel + '?ts=' + ts + '&apikey=' + apikey + '&hash=' + hash;
    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    });

}
//get de um character
const listOne = async (req, res) => {

    var url = urlBaseMarvel + '/id?ts=' + ts + '&apikey=' + apikey + '&hash=' + hash;

    await axios.get(url, req.query.id).then(async function (response) {
        console.log(url);
        res.status(200).send(response.data);
    }).catch(function (error) {
        console.log(url);
    });
}



module.exports = {
    listAll,
    listOne
};