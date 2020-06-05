import React, { useContext, useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
    const [savePressed, setSavePressed] = useState(false)
    useEffect(_ => {
        setSavePressed(false)
    })
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
                            title={savePressed ? 'saving, please wait...' : 'save this track'}
                            onPress={async data => {
                                setSavePressed(true)
                                await saveTrack(data)}} />
                        : <Button
                            buttonStyle={{backgroundColor:'#5090ff'}}
                            title='start tracker'
                            onPress={data => {
                                startRecording(data)
                            }} />
                : null
            }
            { savePressed ? <Text style={styles.wait}>saving data...</Text> : null }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wait: {
        textAlign: 'center',
        padding: 20,
        fontSize: 16
    }
})

export default TrackForm
