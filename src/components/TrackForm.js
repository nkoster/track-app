import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
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
                name
                ?   recording
                    ? <Button
                        buttonStyle={{backgroundColor:'#e47'}}
                        title='stop'
                        onPress={stopRecording} />
                    : <Button
                        buttonStyle={{backgroundColor:'#5090ff'}}
                        title='start recording'
                        onPress={startRecording} />
                : null
            }
            <Spacer />
            {
                !recording && locations.length && name
                ? <Button
                    buttonStyle={{backgroundColor:'#555'}}
                    title={`save ${name}`}
                    onPress={saveTrack} />
                : null
            }
        </View>
    )
}

export default TrackForm
