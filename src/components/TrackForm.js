import React, { useContext } from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'
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
            <Input
                value={name}
                onChangeText={changeName}
                placeholder='enter a track name here'
            />
            <View>
            {
                name
                ?   recording
                    ? <Button
                        buttonStyle={{backgroundColor:'#e47'}}
                        title='stop tracker'
                        onPress={stopRecording} />
                    : !recording && locations.length && name
                        ? <Button
                            buttonStyle={{backgroundColor:'#496'}}
                            title={'save this track'}
                            onPress={saveTrack} />
                        : <Button
                            buttonStyle={{backgroundColor:'#5090ff'}}
                            title='start tracker'
                            onPress={startRecording} />
                : null
            }
            </View>
        </View>
    )
}

export default TrackForm
