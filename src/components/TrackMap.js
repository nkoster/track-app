import React, { useContext } from 'react'
import { StyleSheet, ActivityIndicator, Text } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'
import { useKeepAwake } from 'expo-keep-awake'

const TrackMap = ({ follow, satellite }) => {
    useKeepAwake()
    const { state: { currentLocation, locations } } = useContext(LocationContext)
    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
    }
    let totalDistance = 0
    if (locations.length > 2) {
        let currentCoords = {
            latitude: locations[0].coords.latitude,
            longitude: locations[0].coords.longitude
        }
        locations.forEach(location => {
            totalDistance += distance(
                currentCoords.latitude, currentCoords.longitude,
                location.coords.latitude, location.coords.longitude
            )
            currentCoords = {...location.coords}
        })
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
            <Text style={{
                textAlign: 'center',
                fontSize: 14,
                fontWeight: 'bold',
                paddingTop: 4,
                paddingBottom: 4,
                backgroundColor: satellite ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.5)',
                color: satellite ? 'white': 'black'
            }}>{(totalDistance / 1000).toFixed(3)} km</Text>
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
