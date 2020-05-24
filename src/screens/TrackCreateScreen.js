import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Text } from 'react-native-elements'
import TrackMap from '../components/TrackMap'

const TrackCreateScreen = _ => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <TrackMap />
        </SafeAreaView>
    )
}

export default TrackCreateScreen
