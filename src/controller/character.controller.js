const axios = require('axios');

const ts = '1617309428';
const apikey = '7f4986d1e7942fe8d08b5bd80d9ac4ec'
const hash = '53546b20796d97c4f27a4f200309b7a5';

const urlBaseMarvel = 'http://gateway.marvel.com:443/v1/public/characters?';

/*const listAll = axios.create({
    BaseURL: urlBaseMarvel + 'ts=' + ts + '&apikey=' + apikey + '&hash=' + hash
})*/

/*async function listAll = (req, res) => {
    const { data } = await axios(urlBaseMarvel + 'ts=' + ts + '&apikey=' + apikey + '&hash=' + hash);
    res.status(200).send(data);
}*/

/*const { data } = await axios('https://gateway.marvel.com:443/v1/public/characters?apikey=%27)

return res.json([
    { characterId: '' }
])*/

const listAll = async (req, res) => {
    var url = urlBaseMarvel + 'ts=' + ts + '&apikey=' + apikey + '&hash=' + hash;
    console.log(url);
    const data = await axios.get(url);
    console.log(data);
    res.status(200);
}

module.exports = listAll;