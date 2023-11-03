import { View, Text,Image } from 'react-native'
import React, { useEffect } from 'react'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage'
const Splash = ({navigation}) => {
useEffect(()=>{
    setTimeout(() => {
        goToto()
    }, 2000);
    const goToto=async()=>{
        const Token=await AsyncStorage.getItem('ctoken')
        if(Token===null || Token===undefined){
            navigation.navigate('Login')
        }
        else{
            navigation.navigate('Home')
        }
        console.log('this is token',Token)
    }
})
  return (
<View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#18314F'}}>
<View
          style={{
            alignItems: 'center',
            alignContent: "center",
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: hp(20),
              width: wp(60),
            }}
            source={require('../../assests/ecom.png')}
          />
        </View>
    </View>
  )
  }
export default Splash


// import {View, Text, Image} from 'react-native';
// import React, {useEffect} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import netinfo from '@react-native-community/netinfo';

// const Splash = ({navigation}) => {
//   useEffect(() => {
//     setTimeout(() => {
//       goTo();
//     }, 2000);
//   }, []);
//   const goTo = async () => {
//     // if (netinfo.isConnected === true) {
//     //   navigation.navigate('Home');
//     // } else {
//     //   navigation.navigate('Internet');
//     // }
//     netinfo.addEventListener(state => {
//       if (state.isConnected) {
//         navigation.navigate('Home');
//       } else {
//         navigation.navigate('Internet');
//       }
//     });
//   };
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Image
//         style={{height: '41%', width: '80%'}}
//         source={{
//           uri: `https://cdn.shopify.com/s/files/1/0548/9570/6327/files/Wholespoon_logo_180x.png?v=1632130611`,
//         }}
//       />
//     </View>
//   );
// };

// export default Splash;