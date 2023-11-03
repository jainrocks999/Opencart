import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, TouchableOpacity, Text, View, Image } from 'react-native';
import BottumTab from '../../../compoents/BottumTab';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const Subcategory = ({ navigation, route }) => {
    const [show, setShow] = useState({
        acount: false,
        payment: false,
    });
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const { item } = route.params

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



                    {item?.children ? <FlatList
                        data={item.children}
                        onEndReached={() => {
                        }}
                        onEndReachedThreshold={1}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => {

                            return (
                                <View style={styles.cardView}>

                                    <View style={styles.imgcontainer}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Subcategory2', { item })} >
                                            <Image style={styles.img} source={item.image ? { uri: item.image } : require('../../../assests/noimg.jpeg')}/>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.txt2}>{item.name}</Text>


                                </View>



                            );

                        }}
                    /> : <View style={{ height: 200, width: 150 }}>


                        <Text>{item.name}</Text>




                    </View>}
                </View>
            </View>
            <BottumTab />
        </View>
    );

};
export default Subcategory;
