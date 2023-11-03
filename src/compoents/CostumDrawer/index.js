import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Check from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CostumDrawer = props => {
  const navigation=useNavigation()
  //e6f0f2
  return (
    <View
      Style={{flex: 1, backgroundColor: '#e6f0f2'}}>
      <View
        style={{width: '100%', backgroundColor: '#18314F', height: hp(15)}}>
        <View style={styles.dp}>
          {/* <View style={styles.img}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
              }}
            />
          </View> */}
          <View style={{marginLeft: wp(10)}}>
            <Text style={[styles.name, {fontSize: 20, fontWeight: '400'}]}>
              welcome
            </Text>
            <Text style={styles.name}>Mr. John</Text>
          </View>
        </View>
        <View style={[styles.DrawerItem, {marginTop: '5%'}]}>
          <View
            style={{
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              left: '15%',
            }}>
            <Icon name="home" size={wp(6)} />
            <TouchableOpacity style={{
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              left: '15%',
            }} >
            <Text onPress={() => navigation.navigate('home')}
              style={{fontSize: wp(4), fontWeight: '500', marginLeft: '5%'}}>
              HOME
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.DrawerItem]}>
          <View
            style={{
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              left: '15%',
            }}>
            <Feather name="grid" size={wp(6)} />
            <TouchableOpacity  onPress={() => navigation.navigate('Categories')} >
            <Text
              style={{fontSize: wp(4), fontWeight: '500', marginLeft: '5%'}}>
              Shop By Category
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.DrawerItem]}>
          <View
            style={{
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              left: '15%',
            }}>
            <Check name="sticker-check-outline" size={wp(7)} />
            <Text
              style={{fontSize: wp(4), fontWeight: '500', marginLeft: '5%'}}>
              My Orders
            </Text>
          </View>
        </View>
        <View style={[styles.DrawerItem]}>
          <View
            style={{
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              left: '15%',
            }}>
            <AntDesign name="idcard" size={wp(7.5)} />
            <Text
              style={{fontSize: wp(4), fontWeight: '500', marginLeft: '5%'}}>
              Career
            </Text>
          </View>
        </View>
        <View style={[styles.DrawerItem]}>
          <View
            style={{
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              left: '19%',
            }}>
            <Foundation name="telephone" size={wp(7.5)} />
            <Text
              style={{fontSize: wp(4), fontWeight: '500', marginLeft: '7%'}}>
              Contact Us
            </Text>
          </View>
        </View>
        <View style={[styles.DrawerItem]}>
          <View
            style={{
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              left: '19%',
            }}>
            <Foundation name="power" size={wp(7.5)} />
            <Text
            onPress={async()=>{
              await AsyncStorage.clear()
              navigation.navigate('Login')
            }}
              style={{fontSize: wp(4), fontWeight: '500', marginLeft: '7%'}}>
              Logout
            </Text>
          </View>
        </View>
        <View
          style={{
           
            backgroundColor: '#18314F',
            
            height: hp(100),
            width: '100%',
          }}>
          <View style={{marginLeft: wp(10),height:hp(20),marginTop:30,  }}>
            <Text style={styles.terms}>FAQs</Text>
            <Text style={styles.terms}>ABOUT US</Text>
            <Text style={styles.terms}>TERMS OF USE</Text>
            <Text style={styles.terms}>PRIVACY POLICY</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CostumDrawer;
const styles = StyleSheet.create({
  dp: {
    height: hp(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Platform.OS === 'ios' ? '75%' : '65%',
  },
  img: {
    height: wp(22),
    width: wp(22),
    borderRadius: wp(5.5),
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  name: {
    alignSelf: 'center',
    fontSize:20,
    fontWeight: 'bold',
    color: 'white',
  },
  DrawerItem: {
    height: hp(8),
    borderBottomColor: 'grey',
  },
  terms: {
    fontSize: wp(4),
    fontWeight: '500',
    color: 'white',
    paddingVertical: wp(1),
  },
});
