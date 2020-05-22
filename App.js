import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'

const switchNavigator = createSwitchNavigator({
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

export default createAppContainer(switchNavigator)
