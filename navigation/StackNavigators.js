import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
// screens
import HomeScreen from './../screens/HomeScreen'
import MovieDetailsScreen from './../screens/MovieDetailsScreen.js'
import SigninScreen from './../screens/AuthScreen/SigninScreen'
import SignoutScreen from './../screens/AuthScreen/SignoutScreen'

const HomeStack = createStackNavigator()
const AuthStack = createStackNavigator()

const TabOneNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
        </HomeStack.Navigator>
    )
}

const TabTwoNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SigninScreen" component={SigninScreen} />
            <AuthStack.Screen name="SignoutScreen" component={SignoutScreen} />
        </AuthStack.Navigator>
    )
}



export {
    TabOneNavigator,
    TabTwoNavigator
}