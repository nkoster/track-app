import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'

const TrackDetailScreen = ({ navigation }) => {
    const _id = navigation.getParam('_id')
    const { state } = useContext(TrackContext)
    const track = state.find(item => item._id === _id)
    return (
        <View>
            <Text style={{fontSize:48}}>{track.name}</Text>
        </View>
    )
}

export default TrackDetailScreen
