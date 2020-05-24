import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import MapView, { Polyline } from 'react-native-maps'

const TrackMap = _ => {
    let points = []
    for (let i=0; i<20; i++) {
        if (i % 2 === 0) {
            points.push({
                latitude: 52.346552 + i * 0.001,
                longitude: 5.214206 + i * 0.001
            })
        } else {
            points.push({
                latitude: 52.346552 - i * 0.002,
                longitude: 5.214206 + i * 0.001
            })
        }
    }
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 52.346552,
                longitude: 5.214206,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            }}
        >
            <Polyline
                coordinates={points}
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 400
    }
})

export default TrackMap
