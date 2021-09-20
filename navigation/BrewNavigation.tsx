import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Servings from '../screens/Servings'
import Size from '../screens/Size'
import Method from '../screens/Method'
import Instructions from '../screens/Instructions'

const Stack = createNativeStackNavigator()

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Servings"
        component={Servings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Size"
        component={Size}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Method"
        component={Method}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Instructions"
        component={Instructions}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
