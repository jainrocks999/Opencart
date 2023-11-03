import React, { useEffect } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import BottumTab from '../../../compoents/BottumTab';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Products } from '../../../data/Products';
import Card from '../../../compoents/Card';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const Favorit = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFocuse = useIsFocused();
  const product = useSelector((state) => state.data.ViewWishList);

  useEffect(() => {
    viewWishList();
  }, [isFocuse]);

  const viewWishList = async () => {
    const token = await AsyncStorage.getItem('token');
    dispatch({
      type: 'openCart/fetchViewWishList',
      token: token,
    });
  };

  const RemoveWishList = async (item) => {
    const token = await AsyncStorage.getItem('token');
    await dispatch({
      type: 'openCart/fetchRemoveWishList',
      token: token,
      id: item.product_id,
      navigation,
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AntDesign
              onPress={() => navigation.goBack()}
              name="arrowleft"
              size={wp(5.9)}
              color="white"
            />
            <View style={{ marginLeft: wp(4) }}>
              <Text style={styles.txt}>Wishlist</Text>
            </View>
          </View>
          <View style={{ marginLeft: wp(45) }}></View>
        </View>
        {product.length === 0 ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Your wishlist is empty</Text>
          </View>
        ) : (
          <FlatList
            data={product}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            renderItem={({ item }) => {
              return <Card item={item} sendData={() => RemoveWishList(item)} />;
            }}
          />
        )}
      </View>
      <BottumTab />
    </View>
  );
};

export default Favorit;
