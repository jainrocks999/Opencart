import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import BottumTab from '../../../compoents/BottumTab';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import he from 'he'; // Import the 'he' library for HTML entity decoding

const Categories = ({ navigation }) => {
  const [show, setShow] = useState({
    acount: false,
    payment: false,
  });
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const data = useSelector(state => state.data.categories);

  useEffect(() => {
    fetchCategories();
  }, []);

  const [showSubCategories, setShowCategories] = useState(false);
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    const token = await AsyncStorage.getItem('token');
    dispatch({
      type: 'openCart/fetchCategories',
      token: token,
      page: 'category',
      navigation,
    });
  };

  const onHandleList = (name, value) => {
    setShow(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.back}>
            <AntDesign
              onPress={() => navigation.goBack()}
              name="arrowleft"
              size={wp(5.9)}
              color="white"
            />
            <Text style={{fontSize: wp(4.5), color: 'white' }}>Categories</Text>
          </View>
        </View>

        <ScrollView>
          <FlatList
            data={data}
            onEndReached={() => {}}
            onEndReachedThreshold={1}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              if (index === 1) {
              }
              // Decode the HTML entities within the category name
              const decodedCategoryName = he.decode(item.name);

              return (
                <View style={styles.cardView}>
                  <View style={styles.imgcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Subcategory', { item })}>
                      <Image style={styles.img} source={item.image ? { uri: item.image } : require('../../../assests/noimg.jpeg')} />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.txt2}>{decodedCategoryName}</Text>
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
export default Categories;
