import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottumTab from '../../../compoents/BottumTab';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native-elements'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
  const Subcategory2 = ({ route }) => {
  const { item } = route.params
  const navigation = useNavigation();
  console.log('this is item', item)
  const detail = useSelector(state => state.data.productDetails);
  const products = useSelector((state) => state.data.products);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProduct();
  }, []);
    const fetchProduct = async () => {
    const token = await AsyncStorage.getItem('token');
    dispatch({
      type: 'openCart/fetchProducts',
      token: token,
      page: 'products',
      navigation,
    });
  };
    const handleDetail = async (id) => {
    const token = await AsyncStorage.getItem('token');
    await dispatch({
      type: 'openCart/fetchProductDetail',
      token: token,
      id: id,
      navigation,
    });
  };
    const addWishLists = async (id) => {
    const token = await AsyncStorage.getItem('token');
    dispatch({
      type: 'openCart/fetchAddWishList',
      token: token,
      id: id,
      navigation,
    });
  };
    const filteredProducts = products.filter((product) =>{
    const productName = product.name.toLowerCase();
  });
  return (
    <View style={{ flex:1,backgroundColor: 'white' }}>
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
            <Text style={styles.txt}>Products</Text>
          </View>
        </View>
        <View style={{ marginLeft: wp(45) }}></View>
      </View>
      <View
        style={{
          flex: 1,
          width: wp(100),
        }}>
        {item?.count ? <FlatList
          data={item.count}
          onEndReached={() => {
          }}
          onEndReachedThreshold={1}
          numColumns={2}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.cardView}>
                <View style={styles.imgcontainer}>
                  <TouchableOpacity
                    onPress={() => handleDetail(item.product_id)}
                  >
                    <Image style={styles.img} source={item.image ? { uri: item.image } : require('../../../assests/noimg.jpeg')} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.txt2}>{item.name}</Text>
                <View style={{}}>
                  <TouchableOpacity
                    onPress={() => { addWishLists(item.product_id) }}
                  >
                    <AntDesign name="hearto" style={styles.icon} />
                  </TouchableOpacity>
                </View>
                <View style={{ marginTop:15}}>
                  <Text> {item.description} </Text>
                </View>
                <View style={styles.priceCOntainer}>
                  {item.special ? (
                    <>
                      <Text style={[styles.Price, { color: 'black' }]}>
                        {item.special}
                      </Text>
                      <Text
                        style={[
                          styles.Price,
                          {
                            textDecorationLine:'line-through',
                            fontSize: wp(3),
                            fontWeight: 'bold',
                            marginLeft: wp(1),
                            color: 'red',
                          },
                        ]}
                      >
                        {item.price}
                      </Text>
                    </>
                  ) : (
                    <Text style={[styles.Price,{ color:'black'}]}>
                      {item.price}
                    </Text>
                  )}
                  <Text
                    style={[
                      styles.Price,
                      {
                        fontSize: wp(3),
                        fontWeight: 'bold',
                        marginLeft: wp(1),
                        color: 'grey',
                      },
                    ]}
                  >
                    Ex Tax: {item.tax}
                  </Text>
                </View>
              </View>
            );
          }}
        /> : <View style={{ height: 200, width: 150 }}>
          <Text>{item.name}</Text>
        </View>}
      </View>
      <BottumTab />
    </View>
  )
}
const styles = StyleSheet.create({
  imgcontainer: {
    height: wp(30),
    width: wp(40),
    alignSelf: 'center',
    marginTop: wp(10),
  },
  img:{
    height: '100%',
    width: '100%',
    marginEnd: 10,
  },
  cardView: {
    height: hp(30),
    backgroundColor: '#e6f0f2',
    marginVertical: wp(1),
    width: wp(46),
    marginHorizontal: wp(2),
    borderRadius: wp(2),
    shadowColor: 'black',
    shadowOpacity: 0.05,
    marginTop: 10,
  },
  txt: {
    fontSize: wp(4.5), color: 'white'
  },
  txt2:{
    alignSelf: 'center',
    marginTop: wp(2),
    fontSize: wp(4),
    fontWeight: '600',
    color: 'black',
  },
  header: {
    height:hp(7),
    backgroundColor: '#18314F',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  txt: {
    fontSize: wp(4),
    color: 'white',
    paddingHorizontal: wp(3),
  },
  cardView: {
    height: hp(53),
    backgroundColor: '#e6f0f2',
    marginVertical: wp(1),
    width: wp(46),
    marginHorizontal: wp(2),
    borderRadius: wp(2),
    shadowColor: 'black',
    shadowOpacity: 0.05,
  },
  loadMoreButtonText: {
    color: 'black'
  },
  CardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: wp(1),
    marginHorizontal: wp(2)
  },
  imgcontainer: {
    height: wp(40),
    width: wp(40),
    alignSelf: 'center',
    marginTop: wp(10),
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
    fontSize: wp(7),
    position: 'absolute',
    top: -hp('28%'),
  },
  icon:{
    fontSize: wp(7),
    position: 'absolute',
    right: wp(3),
    top: -hp('26%'),
  },
  btn:{
    borderRadius: wp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: wp(22),
    height: hp(3.5),
    borderColor: 'grey',
    alignSelf: 'center',
    marginTop: wp(2),
    backgroundColor: '#0f3a8d'
  },
  priceCOntainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '89%',
    marginTop: wp(3),
    marginBottom: wp(2),
    alignSelf: 'center',
  },
  Price: {
    fontSize: wp(4),
    alignSelf: 'center',
    fontWeight: '500',
    color: 'black',
  },
  searchContainer: {
    backgroundColor: "white"
  },
  searchBarContainer: {
    backgroundColor: "white",
    borderBottomColor: "white",
    borderTopColor: "white",
  },
  searchBarInputContainer: {
    backgroundColor: "white",
  },
});
export default Subcategory2

