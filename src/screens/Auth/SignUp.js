import { View, Text, Image, StyleSheet, Keyboard, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Input from '../../compoents/Input'
import Button2 from'../../compoents/Button2'
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
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }
    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }
    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
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
  useEffect(() =>{
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
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: '3%', }}>
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
          label="Telephone Number"
          placeholder="Enter your telephone no"
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
       </ScrollView>
       <View style={{height: hp('17%')}}>
        <Button2 title="Register"onPress={validate} />
       
          <Text style=
            {{
          
              alignSelf: 'center',
             marginTop:-40,
             justifyContent:'center',
             flexDirection:'row'
            }}>Already have an account ? <TouchableOpacity><Text onPress={() => navigation.navigate('Login')}
              style=
              {{
              
                fontWeight:'bold',
                color: '#0f3a8d',
           
               
              }}
            > Login</Text></TouchableOpacity></Text>
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
    marginVertical: hp(3), // Updated to a number
  },
  login: {

    fontWeight: 'bold',
    color: 'grey'
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
