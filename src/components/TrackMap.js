import React, { useContext } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'
import { Accuracy } from 'expo-location'

const TrackMap = _ => {
    const { state: { currentLocation } } = useContext(LocationContext)
    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
    }
    // console.log(currentLocation)
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            }}
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 400
    }
})

export default TrackMap
