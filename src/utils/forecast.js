const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/fb2fb1035dd175c930533803e4b456f6/' + longitude + ',' + latitude + '?units=auto'

    request( { url ,json : true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!',undefined)
        }else if (body.error) {
            callback('Unable to find location',undefined)
        }
        else {
            callback(undefined,body.currently)
        }
    })
}

module.exports = forecast