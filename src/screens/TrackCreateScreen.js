import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Text } from 'react-native-elements'
import Map from '../components/Map'

const TrackCreateScreen = _ => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <Map />
        </SafeAreaView>
    )
}

export default TrackCreateScreen
