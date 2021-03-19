import React, {useState} from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import TabBottomNavigator from './../../components/TabBottomNavigator'
import movie from './../../assets/data/movie'
import styles from './styles'
import VideoPlayer from './../../components/VideoPlayer'
import { Entypo, AntDesign, Feather, FontAwesome } from '@expo/vector-icons'; 
import { FlatList } from 'react-native-gesture-handler'
import EpisodeElements from './../../components/EpisodeElements'

const seasonOne = movie.seasons.items[0]
const seasonEpisode = seasonOne.episodes.items[0]
export default function MovieDetailsScreen() {
    const [currentSeason, setCurrentSeason] = useState(seasonOne)
    const [currentEpisode, setCurrentEpisode] = useState(seasonOne.episodes.items[0])
    const seasonNamesList = movie.seasons.items.map(season => season.name);
    
    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <VideoPlayer episode={currentEpisode} />
            <FlatList
                data={currentSeason.episodes.items}
                keyExtractor={(item)=> item.id}
                renderItem={({item}) => (
                    <EpisodeElements episode={item} onPress={setCurrentEpisode}/>
                )}
                
                ListHeaderComponent={(
                <View>
                    {/* Movie Info */}
                    <Text style={styles.movieTitle}>{movie.title}</Text>
                    <View style={styles.movieInfo}>
                        <Text style={styles.movieMatch}>98% match</Text>
                        <Text style={styles.movieYear}>{movie.year}</Text>
                        <View style={styles.movieAgeContainer}>
                            <Text style={styles.age}>12+</Text>
                        </View>
                        <Text style={styles.movieSeasons}>{movie.numberOfSeasons} Seasons</Text>
                        <View style={styles.qualityContainer}>
                            <Text style={styles.qualityTxt}>HD</Text>
                        </View>
                    </View>

                    {/* Buttons */}
                    <Pressable style={styles.playStartBtn}>
                        <Entypo name="controller-play" size={20} color="black" />
                        <Text style={styles.playStartTxt}>Play</Text>
                    </Pressable>
                    <Pressable style={styles.playDownloadBtn}>
                        <AntDesign name="download" size={20} color="white" />
                        <Text style={styles.playDownloadTxt}>Download</Text>
                    </Pressable>

                    {/* details */}
                    <Text style={{ marginVertical: 10, color: 'white' }}>{movie.plot}</Text>
                    <Text style={styles.cast}>Cast: {movie.cast}</Text>
                    <Text style={styles.creator}>Creator: {movie.creator}</Text>

                    {/* Boxes */}
                    <View style={styles.episodeBoxesWrapper}>
                        <Pressable style={styles.episodeBoxes}>
                            <AntDesign name="plus" size={24} color={'white'} />
                            <Text style={{color: 'white'}}>My List</Text>
                        </Pressable>
                        <Pressable style={styles.episodeBoxes}>
                            <Feather name="thumbs-up" size={24} color="white" />
                            <Text style={{color: 'white'}}>Rate</Text>
                        </Pressable>
                        <Pressable style={styles.episodeBoxes}>
                            <FontAwesome name="send-o" size={24} color="white" />
                            <Text style={{color: 'white'}}>Share</Text>
                        </Pressable>
                    </View>
                </View>
                )}
            />
            


        </View>
    )
}
