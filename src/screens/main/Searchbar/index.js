import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import BottumTab from '../../../compoents/BottumTab';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
  const SearchBar = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const products = useSelector((state) => state.data.Searchbar);
  console.log('this', products);
  const [input, setInput] = useState('');
  const seachText = route.params?.searchText;
  const dispatch = useDispatch();
  useEffect(() => {
    const delay = 1500;
    const deBounce = setTimeout(() => {
      handleSearchbar();
    }, delay);
    return () => {
      clearTimeout(deBounce);
    };
  }, [input]);
  const handleSearchbar = async () => {
    if (input.trim() === '') {
      // If the input is empty, you can choose to handle this case differently,
      // such as setting products to an empty array or not making the API call.
      return;
    }
    const token = await AsyncStorage.getItem('token');
    dispatch({
      type: 'openCart/fetchsearchbar',
      token: token,
      search: input,
    });
  };
  const handleDetail = async (id) => {
    const token = await AsyncStorage.getItem('token');
    dispatch({
      type: 'openCart/fetchProductDetail',
      token: token,
      id: id,
      navigation,
    });
    console.log('this is home page id', id);
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={{
          flexDirection: 'row',
        }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <AntDesign
              onPress={() => navigation.goBack()}
              name="arrowleft"
              size={wp(5)}
              color="grey"
            />
          </View>
          <View style={styles.input}>
            <Icon name="search1" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholderTextColor={'grey'}
              placeholder="Search Products"
              onChangeText={text => setInput(text)}
            />
          </View>
        </View>
        {input.trim() === '' ? ( // Check if input is empty
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>No search query entered</Text>
          </View>
        ) : (
          <View style={styles.cardView}>
            <View style={styles.imgcontainer}>
              <TouchableOpacity
                onPress={() => handleDetail(products.product_data.product_id)}
              >
                {products?.product_data?.thumb ? (
                  <Image style={styles.img} source={{ uri: products.product_data.thumb }} />
                ) : (
                  <Image
                    style={styles.img}
                    source={require('../../../assests/noimg.jpeg')}
                  />
                )}
              </TouchableOpacity>
            </View>
            <Text style={styles.txt2}>{products?.product_data?.name}</Text>
            <View style={{ marginTop: 15, marginHorizontal: 5 }}>
              <Text> {products?.product_data?.description} </Text>
            </View>
            <View style={styles.priceCOntainer}>
              <Text style={[styles.Price, { marginLeft: wp(10) }]}>
                {products?.product_data?.price}
              </Text>
              <Text
                style={[
                  styles.Price,
                  {
                    textDecorationLine: 'line-through',
                    fontSize: wp(3),
                    fontWeight: 'bold',
                    marginLeft: wp(1),
                    color: 'red',
                  },
                ]}
              >
                {products?.product_data?.tax}
              </Text>
            </View>
          </View>
        )}
      </View>
      <BottumTab/>
    </View>
  );
};
export default SearchBar;