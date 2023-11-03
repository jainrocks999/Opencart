import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../Cart/styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
  
const ShippingAddressPage = () => {


  useEffect(()=>{

    AddressList()
  },[])

const navigation =useNavigation()
const dispatch =useDispatch()
const AddressList = async()=>{
console.log('caaled');
  const token= await AsyncStorage.getItem('token')

dispatch({
  type: "openCart/fetchViewAddress",
  token:token,  
})

}
const addresslist = useSelector(state =>state.data.ViewAddress)
console.log( 'addresslist ; ', addresslist);




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
          <Text style={{fontSize: wp(4.5), color: 'grey',marginLeft:'6%'}}>Shipping Address</Text>
        </View>
          </View>

          <ScrollView contentContainerStyle={{}}> 

      <View style={{marginVertical:10}}>
   <TouchableOpacity 
onPress={()=>{
    navigation.navigate('Address')
  }}
style={{marginTop:'3%',
flexDirection:'row',justifyContent:'space-between',
padding:10,marginHorizontal:10,borderTopWidth:0.5,borderBottomWidth:0.5}}>
    <Text style={{fontSize:18}}>
        Add a new address
    </Text>
    <Text style={{fontSize:15}}></Text>
    <AntDesign name='right' size={20} />
</TouchableOpacity>
   </View>
      <View style={{}}>
      <FlatList
        data={addresslist}
        scrollEnabled={false}
        renderItem={({item}) =>  (
       <View style={{flex:1,borderWidth:1, 
       marginHorizontal:20,marginVertical:5,padding:10,borderRadius:10}}>
<Text style={{fontWeight:'600',fontSize:16}}>{item.firstname} {item.lastname}</Text>
<Text>{item.address_1}</Text>
<Text>{item.city} {item.postcode} {item.country}</Text>
<Text>{item.country}</Text>

<View style={{marginTop:'5%'}}>
    <TouchableOpacity
    onPress={()=>{
        navigation.navigate('Shippinmethod')
      }}
    style={{backgroundColor:'orange',
    borderRadius:10,marginTop:10,
    marginHorizontal:30,padding:10,alignItems:'center'}}>
        <Text>Use This Address
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:'orange',
    borderRadius:10,marginVertical:10,
    marginHorizontal:30,padding:10,alignItems:'center'}}>
        <Text>Edit Address
        </Text>
    </TouchableOpacity>
    </View>
        </View>
   ) } />

      </View>
        <View   style={{heightL:hp(40)}}  />
      </ScrollView>
    </View>
  );
};

export default ShippingAddressPage;


const data = [
    {
    name:'Address',
    pincode:'451449',
    image:"https://www.google.com/url?sa=i&url=https",
    mobile:'7878787878'
    ,
    address:'Sudama Nagar',
    village:'amka',


},
    {
    name:'Address',
    pincode:'451449',
    image:"https://www.google.com/url?sa=i&url=https",
    mobile:'7878787878'
    ,
    address:'Rajendra nagar',
    village:'amka',


},


]
