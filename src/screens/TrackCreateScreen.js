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
import Spacer from '../components/Spacer'

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext)
    const [follow, setFollow] = useState(true)
    const [satellite, setSatellite] = useState(false)
    const callback = useCallback(location => {
        addLocation(location, recording)
    }, [recording])
    const [err] = useLocation(isFocused || recording, callback)
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            { err ? <Text style={styles.error}>Problem: enable location services first!</Text> : null }
            <Spacer />
            <Spacer>
                <TrackForm />
            </Spacer>
            <TrackMap follow={follow} satellite={satellite} />
            <View style={styles.checkBoxContainer}>
                <View style={styles.checkboxView}>
                    <CheckBox
                        style={{ width: '50%', padding: 1 }}
                        rightTextStyle={{ marginLeft: 0, paddingLeft: 0 }}
                        title='follow'
                        onPress={_ => setFollow(!follow)}
                        checked={follow}
                    />
                    <CheckBox
                        style={{ width: '50%', padding: 1 }}
                        rightTextStyle={{ marginLeft: 0, paddingLeft: 0 }}
                        title='satellite'
                        onPress={_ => setSatellite(!satellite)}
                        checked={satellite}
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'        
    },
    checkboxView: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default withNavigationFocus(TrackCreateScreen)
