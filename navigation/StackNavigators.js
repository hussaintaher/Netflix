import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
// screens
import HomeScreen from './../screens/HomeScreen'
import MovieDetailsScreen from './../screens/MovieDetailsScreen.js'
import TabTwoScreen from './../screens/TabTwoScreen'

const TabOneStack = createStackNavigator()
const TabTwoStack = createStackNavigator()

const TabOneNavigator = () => {
    return (
        <TabOneStack.Navigator headerMode={false}>
            <TabOneStack.Screen name="HomeScreen" component={HomeScreen} />
            <TabOneStack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
        </TabOneStack.Navigator>
    )
}

const TabTwoNavigator = () => {
    return (
        <TabTwoStack.Navigator headerMode={false}>
            <TabTwoStack.Screen name="TabTwoScreen" component={TabTwoScreen} />
        </TabTwoStack.Navigator>
    )
}




export {
    TabOneNavigator,
    TabTwoNavigator
}