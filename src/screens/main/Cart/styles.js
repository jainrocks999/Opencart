import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  header:{
    height:hp(7),
    backgroundColor: '#18314F',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    flexDirection: 'row',
  },
  back: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth:1,
    width: wp(38),
    alignItems: 'center',
  },
   delebtn: {
    backgroundColor: '#ededed',
    height: wp(8),
    width: wp(15),
   marginRight:10
  },
  card: {
    // borderWidth:1,
    width: wp(32),
    height: hp(20),
    margin: wp(0.5),
    borderRadius: wp(3),
    backgroundColor: '#e6f0f2',
  },
  progressBarContainer: {
    width: '100%',
    height: 20,
    backgroundColor: '#e6f0f2',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'green',
  },
  item: {
    // borderWidth:1,
    height: hp(6),
    paddingHorizontal: wp(5),
    backgroundColor: '#e6f0f2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f2f5f4',
  },
  cardCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(50),
    backgroundColor:'#e6f0f2'
  },
  listContainer: {
    height: hp(20),
    backgroundColor: '#e6f0f2',
    marginVertical: wp(1),
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgContainer: {
    height: '85%',
    width: '35%',
    
    backgroundColor: '#e6f0f2',
  },
  img: {
    height: '100%',
    width: '100%',
    
   
  },
  itemContainer: {
    // marginLeft:'5%',
    // borderWidth:1,
    width: '55%',
    height: '100%',
    marginLeft: '7%',
  },
  Qnt: {
    height: hp(3),
    width: wp(15),
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
  },
  placeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20
  },
  btn: {
    height: hp(5.5),
    width: wp(95),
    backgroundColor: '#0f3a8d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
  },
  btnText: {
    fontSize: wp(4),
    fontWeight: '500',
    color: 'white',
  },
});
