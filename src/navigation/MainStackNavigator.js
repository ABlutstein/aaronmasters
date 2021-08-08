import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import List from '../screens/ListScreen'
import Home from '../screens/WelcomeScreen'
import Color from '../screens/ColorScreen'


const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerStyle: {
              backgroundColor: '#101010'
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerTintColor: '#ffd700',
            headerBackTitleVisible: false
          }}
        >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='List'
          component={List}
          options={{ title: 'List' }}
        />
        <Stack.Screen
          name='Color'
          component={Color}
          options={{ title: 'Colours'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator