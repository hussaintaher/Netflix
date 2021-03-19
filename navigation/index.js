import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import Colors from './../constants/Colors'
// screens
import {TabOneNavigator, TabTwoNavigator} from './StackNavigators'
import SigninScreen from './../screens/AuthScreen/SigninScreen'
import SignoutScreen from './../screens/AuthScreen/SignoutScreen'

const Tab = createBottomTabNavigator()

const RootStackNavigator = () => {
    console.log(Colors.tint)
    return (
        <NavigationContainer>
            <Tab.Navigator headerMode={false} tabBarOptions={{
                activeTintColor: Colors.dark.tint,
                tabStyle: {marginVertical: 5},
                style: {
                    backgroundColor: Colors.dark.background,
                    borderTopWidth: 0,
                    height: 55
                },
            }}>
            <Tab.Screen
                name="Home"
                component={TabOneNavigator}
                options={{
                tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="ComingSoon"
                component={TabTwoNavigator}
                options={{
                tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} />,
                title: 'Coming Soon'
                }}
            />
            <Tab.Screen
                name="Search"
                component={TabTwoNavigator}
                options={{
                tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Downloads"
                component={TabTwoNavigator}
                options={{
                tabBarIcon: ({ color }) => <AntDesign name="download" size={24} color={color} />,
                }}
            />
            </Tab.Navigator>
        </NavigationContainer>
        
    )
}

export default RootStackNavigator