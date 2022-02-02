const fs = require('fs');
const yaml = require('js-yaml')

async function getTemperature() {
    console.log('Hello World!');

    try {
        let fileContents = fs.readFileSync('./data/data.yml', 'utf8');
        let temperatureValues = await yaml.load(fileContents);

        return temperatureValues

    } catch (err) {
        console.error('getTemperature - Error leyendo el fichero YML', err);
    }
}

module.exports = {
    getTemperature: getTemperature
}