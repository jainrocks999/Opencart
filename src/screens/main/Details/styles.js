import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    height: hp(8),
    width: wp(100),
    alignItems: 'center',
    //justifyContent:'center',
    backgroundColor: '#e6f0f2',
    // borderWidth:1
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 1
  },
  txt: {
    fontSize: wp(4),
    color: 'grey',
    paddingHorizontal: wp(3),
  },
  header: {
    height: hp(6),
    backgroundColor: '#18314F',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    flexDirection: 'row'
  },
  back:{
    flexDirection:'row',
    justifyContent:'space-between',
   // borderWidth:1,
    width:wp(30),
    alignItems:'center'
},
containerr: {
  height:hp(20),
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
  details: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: wp(5),
    borderTopRightRadius: wp(12),
    borderTopLeftRadius: wp(12),
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: .7,
    shadowRadius: 3,
    elevation: 2
  },
  inputcontainer:{
    height: 55,
    borderRadius:5,
    marginTop:10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
  inputcontainerr:{
    height: 55,
    width:wp(50),
    borderRadius:5,
    marginTop:10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    backgroundColor:'grey',
  },
  quantity: {
    height: hp(4),
    width: hp(4),
    alignItems: 'center',
    // borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: '#e6f0f2',
    borderRadius: wp(1),
  },
  checkboxContainer: {
    flexDirection: 'row',
    height:hp(4),

  },
  checkbox: {
    height:hp(10),
    width:wp(8),
  },
  label: {
    margin: 8,
  },
  prDeta: {
    width: wp(35),
    left: wp(1),
    borderRadius: wp(8),
    shadowColor: 'lightgrey',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: .1,
    shadowRadius: 3,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    alignItems: "center",
    justifyContent: 'center'
  },
  count: {
    //  borderWidth: 1,
    right: wp(6),
    height: hp(4),
    width: wp(30),
    paddingHorizontal: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cont: {
    flexDirection: 'row',
    width: '100%',
    // top: wp(1),
    //borderWidth: 1,
    justifyContent: 'space-between'
  },
  plus: {
    height: hp(3.6),
    width: hp(3.6),
    shadowColor: 'lightgrey',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: .1,
    shadowRadius: 3,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    alignItems: "center",
    justifyContent: 'center',
    borderWidth: wp(.1),
    borderRadius: wp(2)
  },
  ratting: {
    // borderWidth:1,
    top: wp(10),
    width: wp(70),
    left: wp(5),
    alignItems: 'center',
    justifyContent: "space-between",

    flexDirection: 'row'
  },
  name: {
    height: hp(10),
    marginTop: 10,

    borderRadius: wp(8),
    shadowColor: 'lightgrey',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: .1,

    shadowRadius: 3,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    alignItems: "center",
    justifyContent: 'center'
  },
  description: {
    marginHorizontal: hp(2),
    marginTop: hp(8),
    fontSize: wp(20),
  },
  btn: {
    borderWidth: 1,
    top: wp(22),
    width: wp(34),
    left: wp(5),
    height: hp(4.7),
    borderRadius: wp(3),
    backgroundColor: '#0f3a8d',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn3: {
    borderColor: 'grey',
    //borderWidth: 1,
    alignItems: 'center',
    padding:12,
    borderRadius: wp(1),
    backgroundColor: '#0f3a8d',
  },
  specification: {
    width: wp(90),
    alignSelf: 'center',
    // borderWidth:1,
    top: hp(5),
    height: hp(5.8),
    borderRadius: wp(2),
    backgroundColor: '#f2f5f4',
    paddingHorizontal: wp(5),
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: 'row'
  },
  // btn2:{
  //   height:hp(4.5),
  //   width:hp(5),
  //   backgroundColor:'#f2f5f4',
  //   borderRadius:wp(1.5),
  //   shadowColor: 'lightgrey',
  //   shadowOffset: { width: 2, height: 4 },
  //   shadowOpacity: .1,
  //   shadowRadius: 3,
  //   alignItems:'center',
  //   justifyContent:'center',
  //   opacity:2
  // }
})