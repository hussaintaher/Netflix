import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    episodeWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    imageAndTxtContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    episodeImage: {
        aspectRatio: 16/9,
        height: 75,
        resizeMode: 'cover',
        borderRadius: 3
    },
    episodeInfoContainer: {

    },
    episodeInfoTxt: {
        color: '#FFF',
        marginLeft: 10
    },
    episodeDownloadBtn: {
        justifyContent: 'center',
        marginRight: 10
    },
    episodeBoxesWrapper: {
      flexDirection: 'row'  
    },
    episodePlot: {
        color: 'white',
        marginBottom: 5
    },
    episodeBoxes: {
        height: 50,
        width: 50,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default styles

