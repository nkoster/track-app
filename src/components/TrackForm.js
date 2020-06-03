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
            <View style={{flexDirection:'row'}}>
            {
                name
                ?   recording
                    ? <Button
                        style={styles.button}
                        buttonStyle={{backgroundColor:'#e47'}}
                        title='stop tracker'
                        onPress={stopRecording} />
                    : <Button
                        style={styles.button}
                        buttonStyle={{backgroundColor:'#5090ff'}}
                        title='start tracker'
                        onPress={startRecording} />
                : null
            }
            {
                !recording && locations.length && name
                ? <Button
                    style={styles.button}
                    buttonStyle={{backgroundColor:'#555'}}
                    title={`save`}
                    onPress={saveTrack} />
                : null
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    button: {
        paddingHorizontal: 12,
        marginBottom: 6
    },
    input: {
    }
})

export default TrackForm
