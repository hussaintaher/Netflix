import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    movieTitle: {
        color: '#FFF',
        fontSize: 25,
        marginTop: 5,
        marginLeft: 5
    },
    movieInfo: {
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
    },
    movieMatch: {
        color: '#81B622',
    },
    movieYear: {
        color: '#B9B7BD',
        marginLeft: 10
    },
    movieAgeContainer: {
        backgroundColor: 'yellow',
        padding: 2,
        marginLeft: 10
    },
    movieSeasons: {
        color: '#B9B7BD',
        marginLeft: 10
    },
    qualityContainer: {
        backgroundColor: '#FFF',
        padding: 2,
        marginLeft: 10
    },
    qualityTxt: {
        fontWeight: 'bold'
    },
    playStartBtn: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 40,
        flexDirection:'row',
        marginTop: 10
    },
    playStartTxt: {
        fontWeight: 'bold'
    },
    playDownloadBtn: {
        backgroundColor: '#67595E',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 40,
        flexDirection:'row',
        marginTop: 10
    },
    playDownloadTxt: {
        fontWeight: 'bold',
        marginLeft: 8,
        color: '#FFF'
    },
    episodeBoxesWrapper: {
        flexDirection: 'row',
        marginTop: 10 
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
      cast: {
        color: 'white'
      },
    creator: {
        color: 'white'
    },
})

export default styles