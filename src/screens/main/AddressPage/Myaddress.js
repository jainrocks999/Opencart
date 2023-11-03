import { View, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottumTab from '../../../compoents/BottumTab';
import Header from '../../../compoents/Header';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
export default function Myaddress() {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const isFocus = useIsFocused()
  useEffect(() => {
    AddressList()
  }, [isFocus])
  const AddressList = async () => {
    const token = await AsyncStorage.getItem('token')
    dispatch({
      type: "openCart/fetchViewAddress",
      token: token,
    })
  }
  const DeleteAddress = async (Id) => {
    const token = await AsyncStorage.getItem('token')
    const res = dispatch({
      type: "openCart/fetchDeleteAddress",
      token: token,
      id: Id
    })
    console.log('response address screen ==>>>>> ', res);
    AddressList()
  }
  const addresslist = useSelector(state => state.data.ViewAddress)
  return (
    <View style={{ flex: 1, backgroundColor: '#18314F' }}>
    <Header />
    <ScrollView
      style={{ width: '100%', backgroundColor: '#ffffff' }}
      contentContainerStyle={{ }}
      showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 20 , marginTop:20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Your Addresses</Text>
        </View>
        <TouchableOpacity

          onPress={() => {
            navigation.navigate('Address')
          }}
          style={{
            marginTop: '3%',
            flexDirection: 'row', justifyContent: 'space-between',
            padding: 10, marginHorizontal: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5
          }}>
          <Text style={{ fontSize: 18 }}>
            Add a new address
          </Text>
          <Text style={{ fontSize: 15 }}></Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <View style={styles.CardContainer}>
            <Text style={{ fontSize: 18, fontWeight: '700', marginLeft: 10, marginVertical: 10 }}>Personal Addresses</Text>

            <FlatList
              data={addresslist}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) => {

                return (
                  <View style={{ borderWidth: 1, padding: 10, marginVertical: 4, marginHorizontal: 20, borderRadius: 10 }}>

                    <Text style={{ fontWeight: '600', fontSize: 16 }}>{item.firstname} {item.lastname}</Text>
                    <Text>{item.address_1}</Text>
                    <Text>{item.city} {item.postcode} {item.country}</Text>
                    <Text>{item.country}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15, }}>

                      <TouchableOpacity
                        onPress={() => { alert('Edit') }}
                        style={{ padding: 10, borderRadius: 10, backgroundColor: '#18314F' }}>
                        <Text style={{color:'white'}}>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => { DeleteAddress(item.address_id) }}
                        style={{ padding: 10, marginHorizontal: 30, borderRadius: 10, backgroundColor: '#18314F' }}>
                        <Text style={{color:'white'}}>Remove</Text>
                      </TouchableOpacity>

                    </View>
                  </View>

                );

              }}
            />
          </View>

        </View>

    

    </ScrollView>
      <BottumTab />
    </View>
  )
}

const data = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
]