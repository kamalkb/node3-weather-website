const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoia2FtYWxrYjgiLCJhIjoiY2sxbmF6ZTd5MDhqMzNicW9ta3FiZDc3biJ9.4TZwZ48S2PgkL5jvmGO24Q'

    request({ url , json : true}, (error,{ body }) => {
        if (error) {
            callback('Unable to connect to location services!',undefined)
        }else if (body.features.length === 0) {
            callback('Unable to find location. Try another location',undefined)
        }else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode