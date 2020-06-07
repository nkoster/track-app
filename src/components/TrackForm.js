import React, { useContext, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'
import { NavigationEvents } from 'react-navigation'

const TrackForm = ({ satellite }) => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack()
    const [savePressed, setSavePressed] = useState(false)
    return (
        <View style={{alignItems: 'center'}}>
            <NavigationEvents
                onWillBlur={_ => setSavePressed(false)}
            />
            <Input
                value={name}
                onChangeText={changeName}
                inputStyle={{textAlign: 'center'}}
                placeholder='enter a track name here'
            />
            <View style={{width: 200, marginTop: 14}}>
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
                            : <ActivityIndicator size={40} color={satellite ? 'white' : 'black'} />
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

export default TrackForm
