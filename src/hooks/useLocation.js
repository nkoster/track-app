import { useState, useEffect } from 'react'
import {
    requestPermissionsAsync,
    watchPositionAsync,
    Accuracy
} from 'expo-location'

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null)
    useEffect(_ => {
        let subscriber
        const startWatching = async _ => {
            try {
                await requestPermissionsAsync()
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, callback)
            } catch (e) {
                setErr(e)
            }
        }
        const stop = _ => {
            subscriber && subscriber.remove()
            subscriber = null
        }
        shouldTrack ? startWatching() : stop()
        return _ => {
            stop()
        }
    }, [shouldTrack, callback])
    return [err]
}
