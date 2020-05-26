import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'

const TrackForm = _ => {
    return (
        <View>
            <Spacer>
            <Input
                placeholder='please enter a name here'
                label='TRACK NAME'
            />
            </Spacer>
            <Button
                title='start recording track'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0
    }
})

export default TrackForm
