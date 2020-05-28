import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'

const TrackForm = _ => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)
    return (
        <View>
            <Spacer>
            <Input
                value={name}
                defaultValue='my track'
                onChangeText={changeName}
                placeholder='please enter a name here'
                label='TRACK NAME'
            />
            </Spacer>
            {
                recording
                ? <Button
                    title='stop'
                    onPress={stopRecording} />
                : <Button
                    title='start recording'
                    onPress={startRecording} />
            }
            <Spacer />
            {
                !recording && locations.length && name
                ? <Button
                    title='save' />
                : null
            }
        </View>
    )
}

export default TrackForm
