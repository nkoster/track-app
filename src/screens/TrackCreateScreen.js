import '../_mockLocation'
import React, { useEffect, useState, useContext } from 'react'
import { SafeAreaView } from 'react-navigation'
import {
    requestPermissionsAsync,
    watchPositionAsync,
    Accuracy
} from 'expo-location'
import { Text } from 'react-native-elements'
import TrackMap from '../components/TrackMap'
import { Context as LocationContext } from '../context/LocationContext'

const TrackCreateScreen = _ => {
    const { addLocation } = useContext(LocationContext)
    const [err, setErr] = useState(null)
    const startWatching = async _ => {
        try {
            await requestPermissionsAsync()
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, location => {
                addLocation(location)
            })
        } catch (err) {
            setErr(err)
        }
    }
    useEffect(_ => { startWatching() }, [])
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <TrackMap />
            { err ? <Text>Please enable location services</Text> : null }
        </SafeAreaView>
    )
}

export default TrackCreateScreen
