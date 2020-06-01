import React, { useContext } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const TrackMap = ({ follow }) => {
    const { state: { currentLocation, locations } } = useContext(LocationContext)
    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
    }
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            region={ follow ? {
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            } : null }
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
        height: 250
    }
})

export default TrackMap
