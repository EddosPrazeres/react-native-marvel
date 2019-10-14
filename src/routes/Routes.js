import React from 'react'
import * as views from '../views'
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { LogoHeader, RightHeader, SearchHeader } from '../components'
import { colors } from '../styles'
const AppNavigator = createStackNavigator(
  {
    HeroesScreen: { 
      screen: views.HeroesScreen , 
      navigationOptions: {
        headerStyle: {
          backgroundColor: colors.black,
          borderBottomWidth: 0,
        },
        headerTitle: (
          <LogoHeader />
        ),
        headerRight: <RightHeader name="search" />
      },
      
    },
    SearchScreen: { 
      screen: views.SearchScreen,
      navigationOptions: {
        headerTitle: <SearchHeader />,
        headerLeft: null
      }
    },
  // Insert views here
  },
  {
    initialRouteName: 'HeroesScreen',
    defaultNavigationOptions: {
      headerTintColor: colors.primary,
        headerStyle: {
          backgroundColor: colors.black,
          borderBottomWidth: 0,
        },
    }
  }
)

export default createAppContainer(AppNavigator)
