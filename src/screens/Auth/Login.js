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
const Login = () => {
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
                <Image style={styles.img}   source={require('../../assests/ecom.png')}/>
            </View>
          
                <View style={styles.infoTextContainer}>
                    <Text style={styles.login}>Login</Text>
                    <Text style={styles.info}>Please enter the details below to continue</Text>
                </View>
                <View style={{marginHorizontal:15}}>
                <Input
                    onChangeText={(input) => { handleInput('email', input) }}
                    value={inputs.email}
                    onFocus={() => handleError(null, 'email')}
                    iconName="email-outline"
                    label="Email"
                    placeholder="Enter your email address"
                    error={errors.email}
                />
                <Input
                    onChangeText={(input) => handleInput('password', input)}
                    value={inputs.password}
                    onFocus={() => handleError(null, 'password')}
                    iconName="lock-outline"
                    label="Password"
                    placeholder="Enter your password"
                    error={errors.password}
                    password
                />
                </View>
                {!isValid && (
                    <Text style={styles.errorText}>
                        Please enter a valid email and password.
                    </Text>
                )}
                <Button onPress={() => {
                    handleValidation()
                }} name='Login' />
                <Text onPress={() => navigation.navigate('Forget')} style={{
                    alignSelf: 'flex-end',
                    marginRight: '5%',
                    fontSize: hp('2.4%'),
                    color: 'grey'
                }}>Forgot password ?</Text>
                <Text
                    style={{
                        alignSelf: 'center',
                        marginVertical: hp('5%'),
                        fontSize: hp('2.5%'),
                        color: 'grey',
                    }}
                >Dont't have an account ?
                    <TouchableOpacity>

                        <Text onPress={() => navigation.navigate('Register')} style={{ color: '#0f3a8d', fontSize: hp(2.4), fontWeight: 'bold' }}> Sign Up!</Text>
                    </TouchableOpacity></Text>

            
        </View>
    )
}

export default Login

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
    errorText: {
        color: 'red',
        marginTop: hp(1), // Updated to a number
    },
});

