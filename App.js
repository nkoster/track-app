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
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef'

const switchNavigator = createSwitchNavigator({
  InitialScreen,
  loginFlow: createStackNavigator({
    SignupScreen, SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackFlow: createStackNavigator({
      TrackListScreen, TrackDetailScreen
    }),
    TrackCreateScreen, AccountScreen
  })
})

const App = createAppContainer(switchNavigator)

export default _ => {
  return (
    <AuthProvider>
      <App ref={navigator => { setNavigator(navigator) }} />
    </AuthProvider>
  )
}
