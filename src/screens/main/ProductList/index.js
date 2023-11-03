// import React, { useEffect, useState } from 'react';
// import he from 'he';
// import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
// import { SearchBar } from 'react-native-elements';
// import styles from './styles';


// import AntDesign from 'react-native-vector-icons/AntDesign';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';
// import { useNavigation } from '@react-navigation/native';
// import BottumTab from '../../../compoents/BottumTab';
// import { useDispatch, useSelector } from 'react-redux';
// import { ScrollView } from 'react-native-gesture-handler';
// const ProductList = ({ navigation }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const detail = useSelector(state => state.data.productDetails);
//   const products = useSelector((state) => state.data.products);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   const fetchProducts = async () => {
//     const token = await AsyncStorage.getItem('token');
//     dispatch({
//       type: 'openCart/fetchProducts',
//       token: token,
//       page: 'products',
//       navigation,
//     });
//   };
//   const handleDetails = async (id) => {
//     const token = await AsyncStorage.getItem('token');
//     await dispatch({
//       type: 'openCart/fetchProductDetail',
//       token: token,
//       id: id,
//       navigation,
//     });
//   };
//   const addCart = async (id) => {
//     const token = await AsyncStorage.getItem('token')
//     const res = dispatch({
//       type: "openCart/fetchAddcart",
//       token: token,
//       id: id
//     })
//   }
//   const addWishList = async (id) => {
//     const token = await AsyncStorage.getItem('token');
//     dispatch({
//       type: 'openCart/fetchAddWishList',
//       token: token,
//       id: id,
//       navigation,
//     });
//   };
//   const handleSearch = (text) => {
//     setSearchQuery(text);
//   };
//   const filteredProducts = products.filter((product) => {
//     const productName = product.name.toLowerCase();
//     const search = searchQuery.toLowerCase();
//     return productName.includes(search);
//   });

//   return (
//     <View style={{ flex: 1, backgroundColor: 'white' }}>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <AntDesign
//               onPress={() => navigation.goBack()}
//               name="arrowleft"
//               size={wp(5)}
//               color="grey"
//             />
//             <Text style={styles.txt}>Product List</Text>
//           </View>
//         </View>
//         <View style={styles.searchContainer}>
//           <SearchBar
//             placeholder="Search..."
//             onChangeText={handleSearch}
//             value={searchQuery}
//             containerStyle={styles.searchBarContainer}
//             inputContainerStyle={styles.searchBarInputContainer}
//             inputStyle={styles.searchBarInput}
//           />
//         </View>
//         <ScrollView>
//           <FlatList
//             data={filteredProducts}
//             onEndReached={() => {
//             }}
//             onEndReachedThreshold={1}
//             numColumns={2}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item, index }) => {

//               return (
//                 <View style={styles.cardView}>

//                   <View style={styles.imgcontainer}>
//                     <TouchableOpacity
//                       onPress={() => handleDetails(item.product_id)}
//                     >
//                       <Image style={styles.img} source={{ uri: item.image }} />
//                     </TouchableOpacity>
//                   </View>
//                   <Text style={styles.txt2}>{item.name}</Text>
//                   <View style={{}}>

//                     <TouchableOpacity
//                       onPress={() => { addWishList(item.product_id) }}
//                     >
//                       <AntDesign name="hearto" style={styles.icon} />
//                     </TouchableOpacity>
//                   </View>
//                   <View style={{ marginTop: 15 }}>
//                     <Text> {item.description} </Text>
//                   </View>
//                   <View style={styles.priceCOntainer}>
//                     <Text style={[styles.Price, { marginLeft: wp(10), }]}>
//                       {item.special}
//                     </Text>
//                     <Text
//                       style={[
//                         styles.Price,
//                         {

//                           fontSize: wp(3),
//                           fontWeight: 'bold',
//                           marginLeft: wp(1),

//                         },
//                       ]}
//                     >
//                       {item.price}
//                     </Text>
//                   </View>
//                   <Text
//                     style={[
//                       styles.Price,
//                       {

//                         fontSize: wp(3),
//                         fontWeight: 'bold',
//                         marginLeft: wp(1),
//                         color: 'grey',
//                       },
//                     ]}
//                   >
//                     Ex Tax: {item.tax}
//                   </Text>
//                 </View>
//               );
//             }}
//           />
//         </ScrollView>
//       </View>
//       <BottumTab />
//     </View>
//   );
// };

// export default ProductList;

import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import BottumTab from '../../../compoents/BottumTab';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import he from 'he'; // Import the 'he' library for HTML entity decoding

const ProductList = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const detail = useSelector(state => state.data.productDetails);
  const products = useSelector((state) => state.data.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const token = await AsyncStorage.getItem('token');
    dispatch({
      type: 'openCart/fetchProducts',
      token: token,
      page: 'products',
      navigation,
    });
  };
  const addWishList = async id => {
    const token = await AsyncStorage.getItem('token');
    dispatch({
      type: 'openCart/fetchAddWishList',
      token: token,
      id: id,
      navigation,
    });
    console.log('this is id from productlist page', id);
  };
  const handleDetails = async (id) => {
    const token = await AsyncStorage.getItem('token');
    await dispatch({
      type: 'openCart/fetchProductDetail',
      token: token,
      id: id,
      navigation,
    });
  };
  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    const search = searchQuery.toLowerCase();
    return productName.includes(search);
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AntDesign
              onPress={() => navigation.goBack()}
              name="arrowleft"
              size={wp(5)}
              color="white"
            />
            <Text style={styles.txt}>Product List</Text>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Search..."
            onChangeText={handleSearch}
            value={searchQuery}
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchBarInputContainer}
            inputStyle={styles.searchBarInput}
          />
        </View>
        <ScrollView>
          <FlatList
            data={filteredProducts}
            onEndReached={() => {
            }}
            onEndReachedThreshold={1}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {

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
                    onPress={() => handleDetails(item.product_id)}
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
      </View>
      <BottumTab />
    </View>
  );
};

export default ProductList;

