import '../_mockLocation'
import React, { useContext, useCallback } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import TrackMap from '../components/TrackMap'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import Spacer from '../components/Spacer'

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext)
    const callback = useCallback(location => {
        addLocation(location, recording)
    }, [recording])
    const [err] = useLocation(isFocused || recording, callback)
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <TrackMap />
            { err ? <Text>Please enable location services</Text> : null }
            <Spacer />
            <Spacer>
                <TrackForm />
            </Spacer>
        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions = {
    title: 'ADD TRACK',
    tabBarIcon: <AntDesign name='plussquare' size={20} color='silver' />
}

export default withNavigationFocus(TrackCreateScreen)
