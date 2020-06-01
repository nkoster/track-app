import React, { useContext } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'
import { Accuracy } from 'expo-location'

const TrackMap = _ => {
    const { state: { currentLocation, locations } } = useContext(LocationContext)
    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
    }
    // console.log(currentLocation)
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            // region={{
            //     ...currentLocation.coords,
            //     latitudeDelta: 0.01,
            //     longitudeDelta: 0.01
            // }}
        >
            <Circle
                center={currentLocation.coords}
                radius={66}
                strokeColor='rgba(0,0,0,1.0)'
                strokeWidth={3}
                fillColor='rgba(255,255,0,0.5)'
            />
            <Polyline
                coordinates={locations.map(loc => loc.coords)}
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 290
    }
})

export default TrackMap
