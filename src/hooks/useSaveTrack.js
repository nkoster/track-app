import { useContext } from 'react'
import { Context as TrackContext } from '../context/TrackContext'
import { Context as LocationContext } from '../context/LocationContext'

export default _ => {
    const { createTrack } = useContext(TrackContext)

    const { state: { locations, name } } = useContext(LocationContext)
    const saveTrack = _ => {
        createTrack(name, locations)
    }
    return [saveTrack]
}
