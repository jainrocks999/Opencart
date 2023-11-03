import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: hp(7),
    backgroundColor: '#18314F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    
  },
  txt: {
    fontSize: wp(4),
    color: 'white',
    paddingHorizontal: wp(3),

  },
  iconic:{
    margin:10,
  fontSize:wp(8),
  position:'absolute',
  right:wp(3),
 
},
img: {
  height: '100%',
  width: '100%',
},
txt2: {
  alignSelf: 'center',
  marginTop: wp(2),
  fontSize: wp(4),
  fontWeight: '500',
  color: 'black',
},

Price: {
  fontSize: wp(5),
  alignSelf: 'center',
  fontWeight: '500',
  color: 'black',
},
imgcontainer: {
  height: wp(40),
  width: wp(40),
  alignSelf: 'center',
  marginTop: hp(7),
},
  cardView: {
    height: hp(60),
    backgroundColor: '#e6f0f2',
    marginVertical: wp(1),
    width: wp(46),
    marginHorizontal: wp(2),
    borderRadius: wp(2),
    shadowColor: 'black',
    shadowOpacity: 0.05,
   
  },
  loadMoreButtonText:{
    color:'black'
  },
  CardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: wp(1),
    marginHorizontal:wp(2)
  },
  imgcontainer: {
    height: wp(40),
    width: wp(40),
    alignSelf: 'center',
    marginTop: hp(7),
  },
  img: {
    height: '100%',
    width: '100%',
  },
  txt2: {
    alignSelf: 'center',
    marginTop: wp(2),
    fontSize: wp(4),
    fontWeight: '600',
    color: 'black',
  },
  icon2:{
   fontSize:wp(7),
    position:'absolute',
    top:-hp('28%'),
  },
  icon:{
    fontSize:wp(7),
    position:'absolute',
    right:wp(3),
    top:-hp('28%'),
  },
  btn: {
    borderRadius: wp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: wp(22),
    height: hp(3.5),
    borderColor: 'grey',
    alignSelf:'center',
    marginTop:wp(2),
    backgroundColor:'#0f3a8d'
  },
  cardsView: {
    height: hp("100%"),
    backgroundColor: '#e6f0f2',
    width: wp(35),
    marginHorizontal: wp(2),
    borderRadius: wp(2),
    shadowColor: 'black',
    shadowOpacity: 0.05,

   
  },
  priceCOntainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '89%',
    //justifyContent:'space-between',
    marginTop: hp(5),
    marginBottom:hp(2),
    alignSelf: 'center',
  },
  searchContainer:{
    backgroundColor:"white"
  },
  searchBarContainer:{
    backgroundColor:"white",
    borderBottomColor:"white",
    borderTopColor:"white",
    
  },
  searchBarInputContainer:{
    backgroundColor:"white",
  },
 
});
