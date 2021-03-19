import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function TabBottomNavigator({}) {
    const navigation = useNavigation()
    const [isFocused, setIsFocused] = useState(false)
    const [isActive, setIsActive] = useState({
        home: false,
        comingSoon: false,
        search: false,
        download: false
    })

    const changeState = (tabName) => {
        switch (tabName) {
            case 'home': 
                setIsActive({home: true, comingSoon: false, search: false, download: false})                
                // navigation -->
                console.log(isActive)
                break;
            case 'comingSoon': 
                setIsActive({home: false, comingSoon: true, search: false, download: false});
                console.log(isActive)
                break;
            case 'search': 
                setIsActive({home: false, comingSoon: false, search: true, download: false});
                console.log(isActive)
                break;
            case 'download': 
                setIsActive({home: false, comingSoon: false, search: false, download: true});
                console.log(isActive)
                break;
            default:
                return isActive
        }
    }
    return (
        <View style={{height: 90,flexDirection: 'row'}}>
            <TouchableOpacity 
                onPress={() => {
                    changeState('home')
                    navigation.navigate('HomeScreen')
                }}
                style={styles.boxContainer}>
                <AntDesign name="home" size={24} color={isActive.home? 'white' : '#B9B7BD'} />
                <Text style={{color: isActive.home ? 'white': '#B9B7BD', marginTop: 5}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {
                    changeState('comingSoon')
                    navigation.navigate('MovieDetailsScreen')
                    }}
                style={styles.boxContainer}>
                <MaterialIcons name="video-library" size={24} color={isActive.comingSoon? 'white' : '#B9B7BD'} />
                <Text style={{color: isActive.comingSoon ? 'white': '#B9B7BD', marginTop: 5}}>Coming Soon</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {
                    changeState('search')
                    navigation.navigate('search')
                    }}
                style={styles.boxContainer}>
                <Ionicons name="search" size={24} color={isActive.search? 'white' : '#B9B7BD'} />
                <Text style={{color: isActive.search ? 'white': '#B9B7BD', marginTop: 5}}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {
                    changeState('download')
                    navigation.navigate('download')
                    }}
                style={styles.boxContainer}>
                <AntDesign name="download" size={24} color={isActive.download? 'white' : '#B9B7BD'} />
                <Text style={{color: isActive.download ? 'white': '#B9B7BD', marginTop: 5}}>Download</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    boxContainer: {
        width: '25%', 
        backgroundColor: 'black', 
        height: '100%', 

        justifyContent: 'center', 
        alignItems: 'center'
    }
})