import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import MapView from 'react-native-maps'

const TrackMap = _ => {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 52.346552,
                longitude: 5.214206,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            }}
        />
    )
}

const styles = StyleSheet.create({
    map: {
        height: 400
    }
})

export default TrackMap
