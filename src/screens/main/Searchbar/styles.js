import { Platform, StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    input: {
        borderWidth: wp(.2),
        marginHorizontal: wp(10),
        marginLeft: 0,
        margin: 20,
        marginTop: wp(3),
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'grey',
        paddingVertical: Platform.OS === 'ios' ? wp(2.8) : 0,
        borderRadius: wp(2),
        paddingLeft: wp(3),
        paddingRight: wp(25),
        overflow: 'hidden'
    },
    icon: {
        fontSize: wp(6),
        color: 'grey',
        fontStyle: 'italic'
    },
    textInput: {
        fontSize: wp(5),
        marginLeft: wp(3),
        color: 'grey',
        fontStyle: 'italic'
    },
    list:{
    
        height:hp(18),
        marginHorizontal:wp(3),
        marginVertical:wp(2),
        flexDirection:"row",
        alignItems:'center'
       
    },
    flatList: {
        marginTop: wp(3)
    },
    imgContainer: {
        width: wp(40),
        height: '100%'
    },
    img: {
        height: '100%',
        width: '100%',
      },
      priceCOntainer: {
        flexDirection: 'row',
        alignItems: 'center',
     
        //justifyContent:'space-between',
        marginTop: wp(5),
        alignSelf: 'center',
      },
      Price: {
        fontSize: wp(4),
        alignSelf: 'center',
        fontWeight: '500',
        color: 'black',
      },
    cardView: {
        height: hp(53),
        backgroundColor: '#e6f0f2',
        marginVertical: wp(1),
        width: wp(46),
        marginHorizontal: wp(2),
        borderRadius: wp(2),
        shadowColor: 'black',
        shadowOpacity: 0.05,
       
      },
      txt2: {
        alignSelf: 'center',
        marginTop: wp(2),
        fontSize: wp(4),
        fontWeight: '500',
        color: 'black',
      },
    imgcontainer: {
      height: wp(40),
      width: wp(40),
      alignSelf: 'center',
      marginTop: wp(10),
    },

    title: {
        fontSize: wp(4),
        textAlign: 'center',
       
        width: wp(20),
        fontWeight: '600',
        color: 'black',
        fontStyle: 'italic'

    },
    price: {
        fontSize: wp(4),
        textAlign: 'center',
        marginLeft: wp(3),
        width: wp(50),
        fontWeight: '600',
        color: 'black',
        marginTop: wp(2),
        fontStyle: "italic"
    },
    
});
