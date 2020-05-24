import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-navigation'
import { requestPermissionsAsync } from 'expo-location'
import { Text } from 'react-native-elements'
import TrackMap from '../components/TrackMap'

const TrackCreateScreen = _ => {
    const [err, setErr] = useState(null)
    const startWatching = async _ => {
        try {
            await requestPermissionsAsync()
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
