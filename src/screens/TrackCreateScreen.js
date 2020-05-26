import '../_mockLocation'
import React, { useContext } from 'react'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import TrackMap from '../components/TrackMap'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import Spacer from '../components/Spacer'

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext)
    const [err] = useLocation(isFocused, addLocation)
    // console.log(isFocused)
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <TrackMap />
            { err ? <Text>Please enable location services</Text> : null }
            <Spacer />
            <Spacer>
                <TrackForm />
            </Spacer>
        </SafeAreaView>
    )
}

export default withNavigationFocus(TrackCreateScreen)
