const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/fb2fb1035dd175c930533803e4b456f6/' + longitude + ',' + latitude

    request( { url ,json : true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!',undefined)
        }else if (body.error) {
            callback('Unable to find location',undefined)
        }
        else {
            callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of '+ body.daily.data[0].temperatureLow +'There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast