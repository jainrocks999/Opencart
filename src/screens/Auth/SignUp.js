import { View, Text, Image, StyleSheet, Keyboard, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Input from '../../compoents/Input'
import Button2 from '../../compoents/Button2'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
const SignUp = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [inputs, setInputs] = React.useState({
    email: '',
    firstname: '',
    lastname: '',
    telephone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = useState(true);
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email address', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }
    if (!inputs.firstname) {
      handleError('Please input firstname', 'firstname');
      isValid = false;
    }
    if (!inputs.lastname) {
      handleError('Please input lastname', 'lastname');
      isValid = false;
    }
    if (!inputs.telephone) {
      handleError('Please input Mobile number', 'telephone');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }
    if (isValid) {
      register();
    }
  };
  const register = async () => {
    const token = await AsyncStorage.getItem('token')
    dispatch({
      type: "openCart/RegisterRequest",
      token: token,
      user: inputs,
      navigation
    })
  }
  const toker = useSelector(state => state.data.token)
  console.log(typeof (toker))
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  useEffect(() => {
    dispatch({
      type: 'openCart/genrateToken',
    })
  }, [])
  return (
    <View style={styles.container}>
      {/* <View style={styles.logoConatainer}>
        <Image style={styles.img} source={{}} />
      </View> */}
      <View style={styles.infoTextContainer}>
        <Text style={styles.login}>Register</Text>
        <Text style={styles.info}>Please enter the details below to continue</Text>
      </View>
      <View showsVerticalScrollIndicator={false} style={{ marginHorizontal: '3%', }}>
        <Input
          onChangeText={text => handleOnchange(text, 'firstname')}
          onFocus={() => handleError(null, 'firstname')}
          iconName="account-outline"
          label="First Name"
          placeholder="Enter your first name"
          error={errors.firstname}
        />
        <Input
          onChangeText={text => handleOnchange(text, 'lastname')}
          onFocus={() => handleError(null, 'lastname')}
          iconName="account-outline"
          label="Last Name"
          placeholder="Enter your last name"
          error={errors.lastname}
        />
        <Input
          onChangeText={text => handleOnchange(text, 'email')}
          onFocus={() => handleError(null, 'email')}
          iconName="email-outline"
          label="Email"
          placeholder="Enter your email address"
          error={errors.email}
        />
        <Input
          keyboardType="numeric"
          onChangeText={text => handleOnchange(text, 'telephone')}
          onFocus={() => handleError(null, 'telephone')}
          iconName="phone-outline"
          label="Mobile Number"
          placeholder="Enter your Mobile no"
          error={errors.telephone}
        />
        <Input
          onChangeText={text => handleOnchange(text, 'password')}
          onFocus={() => handleError(null, 'password')}
          iconName="lock-outline"
          label="Password"
          placeholder="Enter your password"
          error={errors.password}
          password
        />
      </View>

      <Button2 title="Register" onPress={validate} />

      <View style={{
        alignContent: 'center',
        alignItems: "center",
        textAlign: 'center',
       marginBottom:15,
        justifyContent: "center",
        flexDirection: 'row'
      }}>
        <Text
        >Already have an account ?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: '#0f3a8d', }}> Login!</Text>
        </TouchableOpacity>

      </View>



    </View>
  )

}

export default SignUp
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logoConatainer: {
    top: hp(1), // Updated to a number
    width: '90%',
    height: hp(10), // Updated to a number
    marginHorizontal: '5%'
  },
  infoTextContainer: {
    marginHorizontal: '5%',
    marginVertical: hp(2), // Updated to a number
  },
  login: {
    fontSize:20,
    fontWeight: 'bold',
    color: 'black'
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  info: {
    fontWeight: '400',
    color: 'grey'
  }
});
