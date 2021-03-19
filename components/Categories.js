import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function Categories({category}) {
    const navigation = useNavigation()
    const moviesList = category.movies

    const onMoviePress = (movie) => {
        navigation.navigate('MovieDetailsScreen', {id: movie.id})
    }
    
    return (
        <View style={styles.imageListWrapper}>
            <FlatList
                data={moviesList}
                keyExtractor={(item)=> item.id}
                renderItem={({item}) => (
                    <Pressable onPress={() => onMoviePress(item)}>
                        <Image
                            style={styles.imageStyle}
                            source={{uri: item.poster}}
                        />
                    </Pressable>
                    
                )}
                horizontal
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 150,
        height: 200,
        marginHorizontal: 10,
    },
    imageListWrapper: {
        marginTop: 10
    }
})
