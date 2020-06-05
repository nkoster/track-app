import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'
import { NavigationEvents } from 'react-navigation'

const TrackForm = _ => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack()
    const [savePressed, setSavePressed] = useState(false)
    return (
        <View>
            <NavigationEvents
                onWillBlur={_ => setSavePressed(false)}
            />
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
                        ? !savePressed 
                            ? <Button
                                buttonStyle={savePressed
                                    ? {backgroundColor:'#888'}
                                    : {backgroundColor:'#496'}}
                                title='save this track'
                                onPress={data => {
                                    setSavePressed(true)
                                    saveTrack(data)}} />
                            : <Text style={styles.wait}>saving {name}, please wait...</Text>
                        : <Button
                            buttonStyle={{backgroundColor:'#5090ff'}}
                            title='start tracker'
                            onPress={data => {
                                startRecording(data)
                            }} />
                : null
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wait: {
        textAlign: 'center',
        padding: 10,
        fontSize: 16,
        color: '#666'
    }
})

export default TrackForm
