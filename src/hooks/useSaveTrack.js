import { useContext } from 'react'
import { Context as TrackContext } from '../context/TrackContext'
import { Context as LocationContext } from '../context/LocationContext'
import { navigate } from '../navigationRef'
import distance from '../util/distance'

export default _ => {
    const { createTrack } = useContext(TrackContext)
    const { state: { locations, name }, reset } = useContext(LocationContext)
    let startTime, endTime, duration
    if (locations.length > 0) {
        startTime = locations[0].timestamp / 1000
        endTime = locations[locations.length-1].timestamp / 1000
        duration = endTime - startTime
    }
    const saveTrack = async _ => {
        let totalDistance = 0
        let currentCoords = {
            latitude: locations[0].coords.latitude,
            longitude: locations[0].coords.longitude
        }
        locations.forEach(location => {
            totalDistance += distance(
                currentCoords.latitude, currentCoords.longitude,
                location.coords.latitude, location.coords.longitude
            )
            currentCoords = {...location.coords}
        })
        await createTrack(name, locations, totalDistance, duration)
        reset()
        navigate('TrackListScreen')
    }
    return [saveTrack]
}
