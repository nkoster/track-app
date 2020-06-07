import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import InitialScreen from './src/screens/InitialScreen'
import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDeleteScreen from './src/screens/TrackDeleteScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackProvider } from './src/context/TrackContext'
import { Foundation } from '@expo/vector-icons'; 
import { setNavigator } from './src/navigationRef'

const trackListFlow = createStackNavigator({
  TrackListScreen, TrackDetailScreen, TrackDeleteScreen
})

trackListFlow.navigationOptions = {
  title: 'TRACKS',
  tabBarIcon: ({ tintColor }) => 
    <Foundation name='list' size={20} color={tintColor} active />,
  tabBarOptions: {
    activeTintColor: '#5090ff',
  }
}

const switchNavigator = createSwitchNavigator({
  InitialScreen,
  loginFlow: createStackNavigator({
    SignupScreen, SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
        TrackCreateScreen, trackListFlow, AccountScreen
  }, { order: ['TrackCreateScreen', 'trackListFlow', 'AccountScreen'] })
})

const App = createAppContainer(switchNavigator)

export default _ => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={navigator => { setNavigator(navigator) }} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
}
