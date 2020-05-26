import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'

const TrackForm = _ => {
    const {
        state: { name, recording },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)
    return (
        <View>
            <Spacer>
            <Input
                value={_ => name}
                onChange={changeName}
                placeholder='please enter a name here'
                label='TRACK NAME'
            />
            </Spacer>
            {recording
                ? <Button
                    title='stop recording track'
                    onPress={stopRecording}
                />
                : <Button
                    title='start recording track'
                    onPress={startRecording}
                />
            }
        </View>
    )
}

export default TrackForm
