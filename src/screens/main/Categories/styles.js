import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";

export default StyleSheet.create({
    header:{
      height:hp(7),
        backgroundColor:'#18314F',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:wp(5),
        flexDirection:'row'
    },
    txt:{
      fontSize: wp(4.5), color: 'white'
    },
    back:{
        flexDirection:'row',
        justifyContent:'space-between',
       // borderWidth:1,
        width:wp(30),
        alignItems:'center'
    },
    cardView: {
     
        backgroundColor: '#e6f0f2',
        marginVertical: wp(1),
        width: wp(46),
        marginHorizontal: wp(2),
        borderRadius: wp(2),
        shadowColor: 'black',
        shadowOpacity: 0.05,
        marginTop:10,
      },
    card:{
       // borderWidth:1,
        width:wp(30),
        height:hp(20),
        margin:wp(.5),
        borderRadius:wp(3),
        backgroundColor:'#e6f0f2'
    },
    img: {
        height: '100%',
        width: '100%',
        marginEnd:10,
      },
      imgcontainer: {
        height: wp(30),
        width: wp(40),
        alignSelf: 'center',
        marginTop: hp(1),
      },
      txt2: {
        alignSelf: 'center',
        marginVertical: hp(2),
        fontSize: wp(4),
        fontWeight: '600',
        color: 'black',
      },
})