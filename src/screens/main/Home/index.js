import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import styles from './Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { SliderBox } from 'react-native-image-slider-box';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Cat from '../../../data/Cat';
import Card from '../../../compoents/Card';
import { Products } from '../../../data/Products';
import Header from '../../../compoents/Header';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import BottumTab from '../../../compoents/BottumTab';
import { TouchableWithoutFeedback } from 'react-native';
import Anty from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import he from 'he'; // Import the 'he' library for HTML entity decoding

const Home = () => {
  const user = useSelector(state => state.data.user);
  const products = useSelector(state => state.data.products);
  const detail = useSelector(state => state.data.productDetails);
  const data = useSelector(state => state.data.categories);
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide index
  const dispatch = useDispatch();
  const silder = [
    require('../../../assests/iphone.jpeg'),
    require('../../../assests/macbook.jpeg'),
  ];
  const isFocus = useIsFocused();
  const [ProductImg, setProductImg] = useState(products);

  useEffect(() => {
    fetchData();
  }, [isFocus]);

  const fetchData = async () => {
    const token = await AsyncStorage.getItem('token');

    dispatch({
      type: 'openCart/fetchProducts',
      token: token,
      page: 'products',
    });
    const Product_img = await AsyncStorage.getItem('Product_list');
    setProductImg(JSON.parse(Product_img));
  };

  const dele = item => {};

  const filteredProduct = products.filter(product => {
    const productName = product.name.toLowerCase();
    // const search = searchQuery.toLowerCase();
    return productName.includes;
  });

  const handleDetail = async id => {
    const token = await AsyncStorage.getItem('token');
    dispatch({
      type: 'openCart/fetchProductDetail',
      token: token,
      id: id,
      navigation,
    });
    console.log('this is home page id', id);
  };

  const addWishList = async id => {
    const token = await AsyncStorage.getItem('token');
    dispatch({
      type: 'openCart/fetchAddWishList',
      token: token,
      id: id,
      navigation,
    });
    console.log('this is id from home page', id);
  };

  const addCart = async id => {
    const token = await AsyncStorage.getItem('token');
    const res = dispatch({
      type: 'openCart/fetchAddcart',
      token: token,
      id: id,
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const token = await AsyncStorage.getItem('token');
    dispatch({
      type: 'openCart/fetchCategories',
      token: token,
      page: 'category',
      navigation,
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#18314F' }}>
      <Header />
      <ScrollView
        style={{ width: '100%', backgroundColor: '#ffffff' }}
        contentContainerStyle={{ }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.conatainer}>
          <FlatList
            data={silder}
            dotColor="#fddae8"
            horizontal
            showsHorizontalScrollIndicator={true}
            pagingEnabled
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View style={styles.photos}>
                  <View style={styles.con}>
                    {/* <View style={styles.ViewContainer}>
                      <Text
                        style={{
                          alignSelf: 'flex-start',
                          fontSize: 15,
                          color: '#3f62e0',
                          fontWeight: '500',
                        }}>
                        special offer
                      </Text>
                      <Text
                        style={{
                          fontSize: wp(10),
                          fontWeight: 'bold',
                          textAlign: 'center',
                          color: 'black',
                        }}>
                        Sale Up To 70% Off
                      </Text>
                    </View> */}
                    <View style={styles.img2}>
                      <Image style={styles.image} source={item} />
                    </View>
                  </View>
                  {/* <TouchableOpacity onPress={()=>{
                    dispatch({
                      type:'openCart/loginRequest'
                    })
                  }} style={styles.btn}>
                    <Text style={{color: 'white'}}>{'Shop Now ->'}</Text>
                  </TouchableOpacity> */}
                </View>
              );
            }}
          />
        </View>

        <View style={{ height: hp(5), width: wp(100), backgroundColor: 'white',marginVertical:20,justifyContent:'center' }}>
          <View style={styles.titleContainer}>
            <Text style={styles.category}>Top Categories</Text>
            <Text
              onPress={() => navigation.navigate('Categories')}
              style={[
                styles.category,
                {
                  color: '#18314F',
                  fontWeight: '400',
                  textDecorationLine: 'underline',
                  fontSize: wp(4),
                  marginRight: 20,
                },
              ]}>
              See All
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            height: hp('20%'),
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.15,
            shadowRadius: 0.84,
            elevation: 1,
          }}>
          <View style={{}}>
            <FlatList
              data={data}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({ item, index }) => {
                if (index === 1) {
                }
                // Decode the HTML entities within the category name
                const decodedCategoryName = he.decode(item.name);
  
                return (
                  <View style={styles.cardsView}>
                    <View style={styles.imagecontainer}>
                      <TouchableOpacity onPress={() => navigation.navigate('Subcategory', { item })}>
                        <Image style={styles.images} source={item.image ? { uri: item.image } : require('../../../assests/noimg.jpeg')} />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.txt2}>{decodedCategoryName}</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>

        <View style={{ height: hp(5), width: '100%', backgroundColor: 'white',marginVertical:20, }}>
          <View style={[styles.titleContainer, ]}>
            <Text style={[styles.category, ]}>Featured</Text>
            <Text
              onPress={() => navigation.navigate('ProductList')}
              style={[
                styles.category,
                {
                  color: '#0f3a8d',
                  fontWeight: '400',
                  textDecorationLine: 'underline',
                  fontSize: wp(4),
                  marginRight: 20,
                },
              ]}>
              See All
            </Text>
          </View>
        </View>
        <FlatList
          data={filteredProduct}
          onEndReached={() => {}}
          onEndReachedThreshold={1}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            // Decode the HTML entities within the product name
            const decodedProductName = he.decode(item.name);

            return (
              <View style={styles.cardView}>
                <TouchableOpacity
                  onPress={() => { addWishList(item.product_id) }}
                >
                  <AntDesign name="hearto" style={styles.iconic} />
                </TouchableOpacity>
                <View style={styles.imgcontainer}>
                  <TouchableOpacity
                    onPress={() => handleDetail(item.product_id)}
                  >
                    <Image style={styles.img} source={{ uri: item.image }} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.txt2}>{decodedProductName}</Text>
                <View style={{ marginTop: 15, marginHorizontal: 5 }}>
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
                            textDecorationLine: 'line-through',
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
                    <Text style={[styles.Price, { color: 'black' }]}>
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
        />
      </ScrollView>
      <BottumTab />
    </View>
  );
};
export default Home;
