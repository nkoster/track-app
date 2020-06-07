// import '../_mockLocation'
import React, { useState, useContext, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Text, CheckBox } from 'react-native-elements'
import TrackMap from '../components/TrackMap'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext)
    const [follow, setFollow] = useState(true)
    const [satellite, setSatellite] = useState(false)
    const callback = useCallback(location => {
        addLocation(location, recording)
    }, [recording])
    const [err] = useLocation(isFocused || recording, callback)
    return (
        <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
            { err ? <Text style={styles.error}>Problem: enable location services first!</Text> : null }
            <TrackMap style={{flex: 4}} follow={follow} satellite={satellite} />
            <TrackForm style={styles.trackForm} satellite={satellite} />
            <View style={styles.checkBoxContainer}>
                <View style={styles.checkboxView}>
                    <CheckBox
                        title='follow'
                        onPress={_ => setFollow(!follow)}
                        checked={follow}
                        checkedColor='#5090ff'
                    />
                    <View style={{width:106}}></View>
                    <CheckBox
                        title='satellite'
                        onPress={_ => setSatellite(!satellite)}
                        checked={satellite}
                        checkedColor='#5090ff'
                        iconRight
                    />            
                </View>
            </View>
        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions = {
    title: 'ADD TRACK',
    tabBarIcon: ({ tintColor }) =>
        <AntDesign name='plussquare' size={20} color={tintColor} />,
    tabBarOptions: {
        activeTintColor: '#5090ff',
    }
}

const styles = StyleSheet.create({
    error: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 100
    },
    checkBoxContainer: {
        position: 'absolute',
        bottom: 6,
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    checkboxView: {
        flexDirection: 'row',
    },
    trackForm: {
        position: 'absolute',
        top: 60
    }
})

export default withNavigationFocus(TrackCreateScreen)
