import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {TabOneNavigator, TabTwoNavigator} from './StackNavigators'
const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={TabOneNavigator} />
            <BottomTab.Screen name="TabTwo" component={TabTwoNavigator} />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator
