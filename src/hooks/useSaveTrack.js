import { useContext } from 'react'
import { Context as TrackContext } from '../context/TrackContext'
import { Context as LocationContext } from '../context/LocationContext'

export default _ => {
    const { createTrack } = useContext(TrackContext)

    const { state: { locations, name }, reset } = useContext(LocationContext)
    const saveTrack = async _ => {
        await createTrack(name, locations)
        reset()
    }
    return [saveTrack]
}
