import React, { useContext } from 'react'
import { Context as TrackContext } from '../context/TrackContext'
import { Text, FlatList, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext)
    console.log(state)
    return (
        <>
            <NavigationEvents
                onWillFocus={fetchTracks}
            />
            <Text style={{fontSize:48}}>TrackListScreen</Text>
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <ListItem
                                chevron
                                title={item.name}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

export default TrackListScreen
