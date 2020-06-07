import React, { useContext } from 'react'
import { Context as TrackContext } from '../context/TrackContext'
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { ListItem, Text } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext)
    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList
                data={state.slice().reverse()}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={_ => {
                            navigation.navigate('TrackDetailScreen', { _id: item._id })
                        }} >
                            <Text style={styles.list}>{
                                (new Date(parseInt(item._id.substring(0,8), 16) * 1000))
                                .toString()
                            }</Text>
                            <ListItem
                                chevron
                                title={item.name}
                                titleStyle={{fontWeight: 'bold', fontSize: 17, color: '#444', textAlign: 'center'}}
                                subtitle={`${(item.distance/1000).toFixed(3)} km  /  ${(item.duration/60).toFixed(1)} min`}
                                subtitleStyle={{textAlign: 'center', marginTop: 4}}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

TrackListScreen.navigationOptions = {
    title: 'track history'
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        color: '#666',
        marginTop: 10,
        paddingLeft: 6,
        paddingTop: 3,
        marginBottom: 0,
        textAlign: 'center'
    }
})

export default TrackListScreen
