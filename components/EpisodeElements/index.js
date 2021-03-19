import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from '../../components/EpisodeElements/styles'
import { Entypo, AntDesign, Feather, FontAwesome } from '@expo/vector-icons'; 
import movie from '../../assets/data/movie';

export default function EpisodeElements({episode, onPress}) {

    return (
        <View>
            <View style={styles.episodeWrapper}>
                <Pressable 
                    onPress={() => onPress(episode)}
                    style={styles.imageAndTxtContainer}>
                    <Image 
                        style={styles.episodeImage}
                        source={{uri: episode.poster}}
                    />
                    <View style={styles.episodeInfoContainer}>
                        <Text style={styles.episodeInfoTxt}>{episode.title}</Text>
                        <Text style={styles.episodeInfoTxt}>{episode.duration}</Text>
                    </View> 
                </Pressable>
                <Pressable style={styles.episodeDownloadBtn}>
                    <AntDesign name="download" size={20} color="white" />
                </Pressable>
            </View>
            <Text style={styles.episodePlot}>{movie.plot}</Text>
            
        </View>
    )
}
