import React, { useContext } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'
import { useKeepAwake } from 'expo-keep-awake'

const TrackMap = ({ follow, satellite }) => {
    useKeepAwake()
    const { state: { currentLocation, locations } } = useContext(LocationContext)
    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
    }
    return (
        <MapView
            mapType={satellite ? 'hybrid' : 'standard'}
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
                radius={33}
                strokeColor={satellite ? 'white' : 'black'}
                strokeWidth={3}
                fillColor='#5090ff50'
            />
            <Polyline
                coordinates={locations.map(loc => loc.coords)}
                strokeColor={satellite ? 'white' : 'black'}
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 60, left: 0, right: 0, bottom: 0,
        height: '100%',
        alignSelf: 'stretch'
    }
})

export default TrackMap
