import React, { useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'
import { Entypo } from '@expo/vector-icons'

const TrackDetailScreen = ({ navigation }) => {
    const _id = navigation.getParam('_id')
    const { state } = useContext(TrackContext)
    const track = state.find(item => item._id === _id)
    if (!track) return navigation.navigate('TrackListScreen')
    const initialCoords = track.locations[0].coords
    return (
        <View>
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
                <Text style={styles.title}>{track.name}</Text>
            </MapView>
        </View>
    )
}

TrackDetailScreen.navigationOptions = ({navigation}) => {
    const _id = navigation.getParam('_id')
    return {
        title: 'track details',
        headerRight: _ => (
            <TouchableOpacity
                onPress={_ => navigation.navigate('TrackDeleteScreen', { _id })}
            >
                <Entypo name='trash' size={20} color='black' style={{paddingRight:7}} />
            </TouchableOpacity>
        )

    }
}

const styles = StyleSheet.create({
    map: {
        height: 553
    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: 'rgba(255,255,255,0.5)'
    }
})

export default TrackDetailScreen
