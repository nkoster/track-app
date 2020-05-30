import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = _ => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack()
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
                    title='save'
                    onPress={saveTrack} />
                : null
            }
        </View>
    )
}

export default TrackForm
