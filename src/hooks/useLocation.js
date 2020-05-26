import { useState, useEffect } from "react"
import {
    requestPermissionsAsync,
    watchPositionAsync,
    Accuracy
} from 'expo-location'

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null)
    const [subscriber, setSubscriber] = useState(null)
    const startWatching = async _ => {
        try {
            await requestPermissionsAsync()
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, callback)
            setSubscriber(sub)
        } catch (e) {
            setErr(e)
        }
    }
    useEffect(_ => {
        if (shouldTrack) {
            startWatching()
        } else {
            subscriber.remove()
            setSubscriber(null)
        }
    }, [shouldTrack])
    return [err]
}
