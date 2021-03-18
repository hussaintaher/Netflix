import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator'

const MainStack = createStackNavigator()

const RootStackNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name="Tab" component={BottomTabNavigator} />
            </MainStack.Navigator>
        </NavigationContainer>
        
    )
}

export default RootStackNavigator