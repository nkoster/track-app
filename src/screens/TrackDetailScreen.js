import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'

const TrackDetailScreen = ({ navigation }) => {
    const _id = navigation.getParam('_id')
    const { state } = useContext(TrackContext)
    const track = state.find(item => item._id === _id)
    const initialCoords = track.locations[0].coords
    return (
        <View>
            <Text style={{fontSize:48}}>{track.name}</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
            >
                <Polyline
                    coordinates={track.locations.map(location => location.coords)}
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})
export default TrackDetailScreen
