const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=719da80c7b072090a87b2b9a19a479ca&units=metric&lang=es`);

    return resp.data.main.temp;
};

module.exports = {
    getClima,

};