request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ee82c8ce24824b5cde1f0183a291b9b3&query=' + longitude + ',' + latitude
    request({url, json: true}, (error, {body}) =>{
        if (error) {
            callback('unable to concect to service', undefined)
        } else if(body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined,  body.current.weather_descriptions[0] + ', it is ' + body.current.temperature + ' C, but it feels like ' + body.current.feelslike + ' C, with humidity ' + body.current.humidity + ' %.')
        }
    })
}

module.exports = forecast