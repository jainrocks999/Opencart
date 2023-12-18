
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Input from '../../compoents/Input'
import Button from '../../compoents/Button'
import { useDispatch, useSelector } from 'react-redux'
import Api from '../../redux/Api'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Forget = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = useState(true);
    const isEmailValid = (email) => {
        console.log(email);
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };
    const isPasswordValid = (password) => {
        console.log(password);
        // const hasUppercase = /[A-Z]/.test(password);
        // const hasLowercase = /[a-z]/.test(password);
        // const hasDigit = /\d/.test(password);
        // return (
        //     hasUppercase &&
        //     hasLowercase &&
        //     hasDigit
        // );
        return true
    };
    const handleValidation = () => {
        const isEmailValidated = isEmailValid(inputs?.email);
        const isPasswordValidated = isPasswordValid(inputs?.password);
        if (isEmailValidated && isPasswordValidated) {
            setIsValid(true);
            login();
        } else {
            setIsValid(false);
            alert('Invalid email or password.');
        }
    };
    const toke = useSelector(state => state.data.token)
    console.log(typeof (toke))

    useEffect(() => {
        dispatch({
            type: 'openCart/genrateToken',
        })

    }, [])
    const handleInput = (text, input) => {
        setInputs(prev => ({ ...prev, [text]: input }))
    }
    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };
    const login = async () => {
        const token = await AsyncStorage.getItem('token')

        dispatch({
            type: "openCart/loginRequest",
            token: token,
            user: inputs,
            navigation
        })
    }
    console.log(inputs)
    return (
        <View style={styles.container}>
            <View style={styles.logoConatainer}>
            <Image
            style={styles.img}
            source={{

            }}
          />
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.login}>Forget Your Passwod</Text>
          <View style={{ width: wp(60), alignSelf: 'center' }}>
            <Text
              style={{
                textAlign: 'center',
                marginVertical: wp(1),
                fontSize: wp(4),
                fontStyle: 'italic',
                color: 'grey',
              }}>
              We will send you an email to reset your password.
            </Text>
          </View>
          <View style={styles.line}></View>
        </View>
             <View style={{ marginHorizontal: 15 }}>
                 <Input
                    onChangeText={(input) => { handleInput('email', input) }}
                    value={inputs.email}
                    onFocus={() => handleError(null, 'email')}
                    iconName="email-outline"
                    label="Email"
                    placeholder="Enter your email address"
                    error={errors.email}
                />
                {/* <Input
                    onChangeText={(input) => handleInput('password', input)}
                    value={inputs.password}
                    onFocus={() => handleError(null, 'password')}
                    iconName="lock-outline"
                    label="Password"
                    placeholder="Enter your password"
                    error={errors.password}
                    password
                /> */}
            </View>
            {!isValid && (
                <Text style={styles.errorText}>
                    Please enter a valid email.
                </Text>
            )}
            <View style={{ marginTop: 50 }}>
                <Button onPress={() => {
                    handleValidation()
                }} name='Send' />
            </View>
       

            <View style={{
                alignContent: 'center',
                alignItems: "center",
                textAlign: 'center',
                marginVertical: hp('5%'),
                justifyContent: "center",
                flexDirection: 'row'
            }}>
            
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: '#0f3a8d',fontSize:20 }}> Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Forget

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    logoConatainer: {

        width: '100%',
        height: hp(20), // Updated to a number

    },
    infoTextContainer: {
        marginHorizontal: '5%',
        marginVertical: '8%'
    },
    login: {
        fontSize: hp(4), // Updated to a number
        fontWeight: 'bold',
        color: 'grey'
    },
    img: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    info: {
        fontSize: hp(2), // Updated to a number
        fontWeight: '400',
        color: 'grey',
    },
    login: {
          fontSize: wp('6%'),
          fontWeight: 'bold',
          color: 'black', //'#a26a39',
          fontStyle: 'italic',
          alignSelf: 'center',
          marginTop: wp(6),
        },
    errorText: {
        color: 'red',
        marginHorizontal: '5%',

    },
});

