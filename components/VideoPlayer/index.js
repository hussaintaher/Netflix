import React, {useState, useRef, useEffect} from 'react'
import { View, Text } from 'react-native'
import { Video } from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import styles from './styles'

export default function VideoPlayer({episode}) {
    const video = useRef(Playback) // ?
    const [status, setStatus] = useState({});
    useEffect(() => {
        if (!video) {
            return;
        }
        (async () => {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                { uri: episode.video },
                {},
                false
            );
        })();
    }, [episode])


    return (
        <Video
            ref={video}
            style={styles.video}
            source={{
                uri: episode.video,
            }}
            posterSource={{
                uri: episode.poster,
            }}
            posterStyle={{
                resizeMode: 'cover',
            }}
            usePoster={true}
            useNativeControls
            resizeMode="contain"
            onPlaybackStatusUpdate={status => setStatus(() => status)}            
        />
    )
}
