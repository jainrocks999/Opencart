import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Mat from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import he from 'he';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import BottumTab from '../../../compoents/BottumTab';
const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.ViewCart);
  console.log('Data:', data);
  let total = 0;
  useEffect(() => {
    getItems(); 9
  }, []);
  const getItems = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      dispatch({
        type: 'openCart/fetchViewCart',
        token: token,
      });
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };
  const cartRemove = async (id) => {
    const token = await AsyncStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "OCSESSID=0f38945159e6b05b73d74b4b9e; currency=USD");
    var formdata = new FormData();
    formdata.append("key", id);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch(`https://ecom.forebearpro.co.in/upload/index.php?route=api/sale/cart.remove&api_token=${token}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
  const totalAmount2 = () => {
    let total = 0
    data != undefined || data != null ?
    data?.map((item, index) => {
      const pri = item?.total.replace(/\$/g, '')
      total = total + parseInt(pri)
    }
    ) 
    : null
    console.log('tyhtittit', JSON.stringify(data));
    return total
  }
  const incrementQuantity = (itemId) => {
    setNewData((prevData) =>
      prevData.map((item, index) =>
        index === itemId
          ? {
            ...item,
            quantity: parseInt(item.quantity) + 1,
            price: (
              parseFloat(item.price) * (parseInt(item.quantity) + 1)
            ).toFixed(2),
          }
          : item
      )
    );
  };
  const decrementQuantity = (itemId) => {
    setNewData((prevData) =>
      prevData.map((item, index) =>
        index === itemId && parseInt(item.quantity) > 0
          ? {
            ...item,
            quantity: parseInt(item.quantity) - 1,
            price: (
              parseFloat(item.price) * (parseInt(item.quantity) - 1)
            ).toFixed(2),
          }
          : item
      )
    );
  };
  const handleDetails = async (item) => {
    const token = await AsyncStorage.getItem('token');
    dispatch({
      type: 'openCart/fetchProductDetail',
      token: token,
      id: item.id,
      navigation,
    });
  };
  const addCart = async (id) => {
    const token = await AsyncStorage.getItem('token');
    dispatch({
      type: 'openCart/fetchAddcart',
      token: token,
      id
    });
  };
  const [newData, setNewData] = useState([]);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.header}>
        <View style={styles.back}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={wp(5.9)}
            color="white"
          />
          <Text style={{ fontSize: wp(4.5), color: 'white' }}>Shopping Cart</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {data.length === 0 ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Your cart is empty</Text>
          </View>
        ) : (
          <>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View style={styles.listContainer}>
                  <View style={styles.imgContainer}>
                    <TouchableOpacity onPress={() => handleDetails(item)}>
                      <Image style={styles.img} source={{ uri: item.image }} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.itemContainer}>
                    <Text
                      style={{
                        marginTop: '10%',
                        fontSize: wp(4),
                        fontWeight: '600',
                      }}>
                      {(item.name)}
                      {/* {he.decode} */}
                    </Text>
                    <View style={{ flexDirection: 'row', marginVertical: wp(1) }}>
                      <Text
                        style={{
                          marginTop: '2%',
                          fontWeight: '800',
                          color: 'black',
                          fontSize: wp(4),
                        }}>
                        {item.total}
                      </Text>
                      <Text
                        style={{
                          marginTop: '2%',
                          fontWeight: '800',
                          color: 'grey',
                          fontSize: wp(4),
                          marginLeft: '5%',
                          textDecorationLine: 'line-through',
                        }}>
                        {' '}
                        $500
                      </Text>
                      {/* <Text
                        style={{
                          marginTop: '2%',
                          fontWeight: '800',
                          color: 'pink',
                          fontSize: wp(4),
                          marginLeft: '5%',
                        }}>
                        65%
                      </Text> */}
                    </View>
                    <Text style={{ marginLeft: '3%', color: 'grey' }}>
                      14 days return policy
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        height: hp(3),
                        width: wp(20),
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginVertical: wp(3),
                      }}>
                      <View
                        style={{
                        }}>
                        <TouchableOpacity
                          onPress={() => decrementQuantity(index)}
                          style={{
                            height: hp(2.5),
                            width: hp(2.5),
                            alignItems: 'center',
                            borderWidth: 1,
                            justifyContent: 'center',
                            borderRadius: wp(1),
                          }}>
                          <Entypo name="minus" size={wp(4.5)} />
                          {/* {item.quantity >= 2 ? (
                          ) : (
                            <Mat name="delete-outline" size={wp(6.5)} />
                          )} */}
                        </TouchableOpacity>
                      </View>

                      <Text style={{ fontSize: wp(4), fontWeight: '600' }}>
                        {item.quantity}
                      </Text>
                      <View
                        style={{
                          height: hp(2.5),
                          width: hp(2.5),
                          alignItems: 'center',
                          borderWidth: 1,
                          justifyContent: 'center',
                          borderRadius: wp(1),
                        }}>
                        <TouchableOpacity
                          onPress={() => addCart(item?.product_id)}
                          style={styles.quantity}>
                          <Entypo name="plus" size={wp(4.5)} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      cartRemove(item.cart_id)
                    }}
                    style={{ width: wp(55), height: hp(0) }}>
                    <AntDesign
                      name="delete"
                      size={wp(7)}
                      style={{ marginTop: '-30%', marginLeft: '-10%' }}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
            <View style={{ padding: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Total Amount: ${totalAmount2().toFixed(2)}
              </Text>
            </View>
            <View style={styles.placeContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Shipping')}
                style={styles.btn}>
                <Text style={styles.btnText}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
      <BottumTab />
    </View>
  );
};
export default Cart;