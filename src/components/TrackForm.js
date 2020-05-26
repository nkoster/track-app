import React, { useContext } from 'react'
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
    console.log(locations.length)
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
                    title='stop'
                    onPress={stopRecording}
                />
                : <Button
                    title='start recording'
                    onPress={startRecording}
                />
            }
        </View>
    )
}

export default TrackForm
