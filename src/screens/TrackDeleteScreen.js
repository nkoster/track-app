import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'
import { Entypo } from '@expo/vector-icons'
import Spacer from '../components/Spacer'

const TrackDeleteScreen = ({ navigation }) => {
    const { state, deleteTrack } = useContext(TrackContext)
    const _id = navigation.getParam('_id')
    const track = state.find(item => item._id === _id)
    return (
        <View>
            <Text style={styles.text} >You are about to delete this track forever!</Text>
            <Spacer>
            <Button
                title={`delete ${track.name}`}
                onPress={_ => {
                    deleteTrack(_id)
                    return navigation.navigate('TrackListScreen')}
                } />
            </Spacer>
        </View>
    )
}

TrackDeleteScreen.navigationOptions = _ => {
    return {
        title: 'delete',
        headerRight: _ => (
            <Entypo name='trash' size={20} color='rgba(255,50,75,1.0)' style={{paddingRight:7}} />
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 150,
        marginBottom: 20,
        color: 'rgba(255,50,75,1.0)'
    }
})
export default TrackDeleteScreen
