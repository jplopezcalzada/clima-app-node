const axios = require('axios');




const getLugarLatLng = async(direccion) => {

    const encodeUlr = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUlr}.json`,
        params: { 'access_token': 'pk.eyJ1IjoianBsb3BleiIsImEiOiJja2c2cjd6MGIwMDVsMnFxbnlhbnVoYjBqIn0.EA06NHb9D3jh7JbbNfmWxg' }
    });


    const resp = await instance.get();

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para: ${direccion}`);
    }
    const data = resp.data.features[0];
    const lugar = data.place_name;
    const lng = data.center[0];
    const lat = data.center[1];

    return {
        lugar,
        lat,
        lng
    };

};

module.exports = {
    getLugarLatLng,

};