import * as Location from 'expo-location'

const tenMetersWithDegrees = 0.0001

const getLocation = increment => {
    return {
        timestamp: 1590428057,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 5.2142 + increment * tenMetersWithDegrees,
            latitude: 52.3465 + increment * tenMetersWithDegrees
        }
    }
}

let counter = 0

const interval = setInterval(_ => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++
}, 1000)

// clearInterval(interval) ; console.log('interval cleared')