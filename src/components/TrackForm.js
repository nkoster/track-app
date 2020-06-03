import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
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
                style={styles.input}
                value={name}
                onChangeText={changeName}
                placeholder='enter a name here'
                label='TRACK NAME'
            />
            <View>
            {
                name
                ?   recording
                    ? <Button
                        style={styles.button}
                        buttonStyle={{backgroundColor:'#e47'}}
                        title='stop tracker'
                        onPress={stopRecording} />
                    : !recording && locations.length && name
                        ? <Button
                            style={styles.button}
                            buttonStyle={{backgroundColor:'#496'}}
                            title={'save this track'}
                            onPress={saveTrack} />
                        : <Button
                            style={styles.button}
                            buttonStyle={{backgroundColor:'#5090ff'}}
                            title='start tracker'
                            onPress={startRecording} />
                : null
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'column'
    },
    button: {
        // paddingHorizontal: 12,
        // marginBottom: 6
    },
    input: {
    }
})

export default TrackForm
