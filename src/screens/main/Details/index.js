import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  alert,
} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import Input from '../../../compoents/Input';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottumTab from '../../../compoents/BottumTab';
import Entypo from 'react-native-vector-icons/Entypo';
import Datepicker from 'react-native-datepicker';
import { WebView } from 'react-native-webview';
import CheckBox from 'react-native-check-box';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import he from 'he';
  const Details = ({ route, navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const detail = useSelector((state) => state.data.productDetails);
  const [Descr, setDescr] = useState(
    detail.detail.description.substring(0,50)
  );
  const [readTxt, setreadTxt] = useState(false);
  const option = detail.options;
  const image = `https://ecom.forebearpro.co.in/upload/image/${detail.detail.image}`;
  const img = [
    image,
    image,
    image,
    image,
  ];
  const dispatch = useDispatch();
  const addCart = async () => {
    const token = await AsyncStorage.getItem('token');
    dispatch({
      type: 'openCart/fetchAddcart',
      token: token,
      id: detail.detail.product_id,
    });
  };
  const [isSelected, setSelection] = useState(true);
  const [message, setMessage] = useState("");
  const [textarea, settextarea] = useState("");
  const [Date, setDate] = useState("");
  const [Time, settime] = useState("");
  const [Uploadfile, setuploadfile] = useState("");
  const [Timedate, settimedate] = useState("");
  const [selectedDate, setSelectedDate] = useState('');
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateInputValue, setDateInputValue] = useState('');
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShowDatePicker(false);
    setSelectedDate(currentDate);
    setDateInputValue(currentDate.toISOString());
  };
  const showDatepicker = () => {
    setShowDatePicker(true);
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#e6f0f2' }}>
      <View style={styles.header}>
        <View style={styles.back}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={wp(5.9)}
            color="white"
          />
          <Text style={{ fontSize: wp(4.5), color: 'white', marginRight: 2 }}>Categories</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ justifyContent:'center'}}>
        <View>
          <SliderBox
            style={{ height: hp(50), width: wp(100), backgroundColor: 'white' }}
            images={img}
            resizeMode='contain'
            dotColor="#fddae8"
            inactiveDotColor="#cccccc"
            ImageComponentStyle={{
            }}
              dotStyle={{
              width: wp(5),
              height: wp(5),
              borderRadius: 15,
            }}
            imageLoadingColor="#2196F3"
          />
        </View> 
        <View style={styles.details}>
          <View style={[styles.name, {alignSelf: 'center', flexDirection: 'row', justifyContent: 'center' }]}>
            {/* Decode the HTML entities within the product name */}
            <Text style={{ fontSize: wp(5), fontWeight: '500', color: 'black' }}>
              {he.decode(detail.detail.name)}
            </Text>
          </View>
          <View style={{ flexDirection: 'column', marginHorizontal: 20 }}>
            <Text style={{ fontSize: wp(5), color: 'black' }}>
              ₹ {detail.detail.price}
            </Text>
            <Text style={[styles.prDeta,{ flexDirection: 'row', alignItems: 'center', }]}>
              MRP incl.of all taxes
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: hp(2) }}>
            <Text style={{ fontSize: wp(4), color: 'black' }}>
              Availability - {detail.detail.stock_status}
            </Text>
          </View>
          <View style={[styles.ratting, {}]}>
            <AntDesign name='star' size={wp(3.5)} color='#FFD700' />
            <AntDesign name='star' size={wp(3.5)} color='#FFD700' />
            <AntDesign name='star' size={wp(3.5)} color='#FFD700' />
            <AntDesign name='star' size={wp(3.5)} color='#FFD700' />
            <AntDesign name='staro' size={wp(3.5)} color='#FFD700'/>
            <Text style={{ fontSize: wp(3) }}>{'(170)'}</Text>
            <View style={{ marginLeft: '30%' }}>
              <TouchableOpacity
                style={[styles.btn3, { height: hp(6), width: wp(40), }]}
                onPress={() => {
                  addCart();
                }}>
                <Text
                  style={{ fontSize: wp(5),fontWeight: '500',color: 'white' }}>
                  ADD TO CART
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.description, { paddingHorizontal: 5, fontSize: wp(15) }]}>
            <Text style={{ fontWeight: 'bold', fontSize: wp(4), marginBottom: 10 }}>
              Description
            </Text>
            <View>
              <Text>
                {!readTxt ? Descr : he.decode(detail.detail.description)}{' '}
                <Text
                  onPress={() => { setreadTxt(readTxt => !readTxt) }}
                  style={{ color: 'blue', fontSize: 14, fontWeight: '500' }}>
                  {!readTxt ? 'Show More..' : 'Show less..'}
                </Text>
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 50 }}>
            <FlatList
              data={option}
              renderItem={({ item }) => (
                <View style={{}}>
                  {/* Decode the HTML entities within the product option name */}
                  <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 20, marginVertical: 5 }}>
                    {he.decode(item.name)}
                  </Text>
                  <FlatList
                    data={item.product_option_value}
                    horizontal={true}
                    renderItem={({ item }) => (
                      <View style={{
                        height: 50, width: 100, marginHorizontal: 15, marginVertical: 20,
                        alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between',
                      }}>
                        <View style={styles.checkboxContainer}>
                          <CheckBox
                            value={isSelected}
                            onValueChange={() => setSelection(!isSelected)}
                            style={styles.checkbox}
                          />
                          <Text style={{ fontWeight: "700" }}>
                            {he.decode(item.name)}
                          </Text>
                        </View>
                        <Text>({item.price})</Text>
                      </View>
                    )}
                  />
                </View>
              )}
            />
          </View>
          <View style={{ marginHorizontal: 15, marginTop: 20 }}>
            <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 10, marginVertical: 5 }}> Text </Text>
            <TextInput style={styles.inputcontainer}
              placeholder="Text"
              label="Text"
              value={message}
              onChangeText={(text) => setMessage(text)}
              onSubmitEditing={() => alert(`Welcome to ${message}`)}
            />
          </View>
          <View style={{ marginHorizontal: 15, marginTop: 20 }}>
            <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 10, marginVertical: 5 }}> Textarea </Text>
            <TextInput style={{
              height: hp(20),
              borderRadius: 5,
              marginTop: 10,
              flexDirection: 'row',
              paddingHorizontal: 15,
              borderWidth: 0.5,
            }}
              placeholder="Textarea"
              label="Text"
              value={textarea}
              onChangeText={(text) => settextarea(text)}
              onSubmitEditing={() => alert(`Welcome to ${message}`)}
            />
          </View>
          <View style={{ marginHorizontal: 15, marginTop: 20, }}>
            <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 10, marginVertical: 5 }}>Date</Text>
            <Datepicker
              style={{
                width: 350,
                marginTop: 10,
              }}
              date={selectedDate}
              mode="date"
              placeholder="Select date"
              format="YYYY-MM-DD"
              minDate="2020-01-01"
              maxDate="2025-12-31"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position:'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={handleDateChange}
            />
          </View>
            <View style={{ marginHorizontal: 15, marginTop: 20 }}>
            <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 10, marginVertical: 5 }}>Time</Text>
            <TextInput style={styles.inputcontainer}
              placeholder="Time"
              label="Text"
              value={Time}
              onChangeText={(text) => settime(text)}
              onSubmitEditing={() => alert(`Welcome to ${message}`)}
            />
          </View>
          <View style={{ marginHorizontal: 15, marginTop: 20, }}>
            <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 10, marginVertical: 5 }}>Date & Time</Text>
            <TextInput style={styles.inputcontainer}
              placeholder="Date & Time"
              label="Text"
              value={Timedate}
              onChangeText={(text) => settimedate(text)}
              onSubmitEditing={() => alert(`Welcome to ${message}`)}
            />
          </View>
          <View style={{ marginHorizontal: 15, height: hp(50), marginTop: 20, height: hp(50) }}>
              <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 10, marginVertical: 5 }}>File</Text>
            <TouchableOpacity style={styles.inputcontainerr}>
              <Text style={{ justifyContent: 'center', alignSelf: 'center', paddingHorizontal: 40, color: 'white', fontWeight: '600', fontSize: 15 }}> Upload file</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottumTab />
    </View>
  );
};
export default Details;
