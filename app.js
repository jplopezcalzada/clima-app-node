const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad par aobtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coordenadas.lugar} es de ${temp}`;
    } catch (error) {
        return `No pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion).then(console.log).catch(console.log);