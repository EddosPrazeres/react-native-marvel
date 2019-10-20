import React from 'react'
import * as views from '../views'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator({
  // HomeScreen: { screen: views.HomeScreen },
  IntroScreen: { screen: views.IntroScreen, navigationOptions:{header: null} },
  // Insert views here
})

export default createAppContainer(AppNavigator)
