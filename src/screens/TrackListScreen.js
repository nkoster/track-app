import React from 'react'
import { Text, Button } from 'react-native'

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{fontSize:48}}>TrackListScreen</Text>
            <Button
                title={'Track Detail'}
                onPress={_ => navigation.navigate('TrackDetailScreen')}
            />
        </>
    )
}

export default TrackListScreen
