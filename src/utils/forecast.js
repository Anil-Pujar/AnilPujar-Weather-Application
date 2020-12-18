const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fc2d626facc703f93f3b8c8761441645&query='+ latitude +','+ longitude +'&units=m';

    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
           callback('Unable to connect to weather service!',undefined)
        } else if (body.error) {
           callback('Unable to find location',undefined)
      } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.feelslike + '% chance of rain.')   
        }
    })
}

module.exports = forecast

