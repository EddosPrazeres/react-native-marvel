import React from 'react'
import * as views from '../views'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator({
  HeroesScreen: { 
    screen: views.HeroesScreen , 
    navigationOptions: {
      title: "Marvel",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: '#21252d',
        borderBottomWidth: 0,
      },
    },
  },
  // Insert views here
})

export default createAppContainer(AppNavigator)
