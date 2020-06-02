import React, { useContext } from 'react'
import { Context as TrackContext } from '../context/TrackContext'
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { ListItem, Text } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext)
    // const id = state[0] ? state[0]._id : ''
    const getDate = id => {
        const timestamp = id.substring(0,8)
        const date = new Date(parseInt(timestamp, 16) * 1000)
        return date.toDateString
    }
    return (
        <>
            <NavigationEvents
                onWillFocus={fetchTracks}
            />
            <FlatList
                data={state.slice().reverse()}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={_ => {
                            navigation.navigate('TrackDetailScreen', { _id: item._id })
                        }} >
                            <Text style={styles.list}>{
                                (new Date(parseInt(item._id.substring(0,8), 16) * 1000)).toString()
                            }</Text>
                            <ListItem chevron title={`${item.name}`} />
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        marginTop: 10,
        paddingLeft: 6,
        paddingTop: 3
    }
})

export default TrackListScreen
