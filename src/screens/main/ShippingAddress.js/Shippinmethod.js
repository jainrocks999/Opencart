import { View, Text } from 'react-native'
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Cart/styles';
import RazorpayCheckout from 'react-native-razorpay';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
export default function Shippinmethod() {
    const navigation =useNavigation()              
  return (            
    <View style={{flex:1}}>
        <View style={styles.header}>
        <View style={styles.back}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={wp(5.9)}
            color="grey"
          />
          <Text style={{fontSize: wp(4.5),color:'grey',marginLeft:'6%'}}>Shipping Method</Text>
        </View>
      </View>
      <View>
        <Text style={{fontSize:20,
            marginLeft:10,marginVertical:10,
            color:'#000',fontWeight:'700'}}>Choose a delivery speed</Text>
        <View style={{borderWidth:0.5,borderRadius:5,
            alignItems:'center',
            padding:10,flexDirection:'row'}}>
<View style={{backgroundColor:'green',
alignItems:'center',justifyContent:'center',
height:25,width:25,borderRadius:12.5}}>
<View style={{backgroundColor:'white',height:12,width:12,borderRadius:6}}>
</View>
</View>
<View style={{marginLeft:10}}>
    <Text style={{fontSize:17,fontWeight:'700',color:'#50781c'}}>Day of Delivery speed </Text>
    <Text style={{fontSize:19,fontWeight:'700',color:'black'}}>--Free Delivery </Text>
</View>
     </View>
     <TouchableOpacity
    onPress={() => {
      var options = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: 'INR',
        key: 'rzp_test_nS7mvhlfOHnGbx', //Your api key
        amount: '5000',
        name: 'OpenCart',
        prefill: {
          email: 'rohansahusahi@example.com',
          contact: '9191919191',
          name: 'Razorpay Software'
        },
        theme: {color: '#F37254'}
      }
      RazorpayCheckout.open(options).then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      }).catch((error) => {
        // handle failure
        console.log(`Error: ${error.code} | ${error.description}`);
      });
    }}
    style={{backgroundColor:'orange',
    borderRadius:10,marginTop:10,
    marginHorizontal:30,padding:10,alignItems:'center'}}>
        <Text>Continue
        </Text>
    </TouchableOpacity>
      </View>
    </View>
  )
}