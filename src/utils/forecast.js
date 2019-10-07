const request = require('request')
log = console.log

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/36e9b61d12b15b3411704df0decf5f4c/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect forecast services!', undefined)
        } else if (body.error) {
            callback('Unable to find the location.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ` It is currently ${body.currently.temperature} degrees out. There is ${body.currently.precipProbability} chance of rain.`
                )
        }
    } )
}

module.exports = forecast 