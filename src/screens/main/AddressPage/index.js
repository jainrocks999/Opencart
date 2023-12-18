import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import BottumTab from '../../../compoents/BottumTab';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import Header from '../../../compoents/Header';
import Input from './component';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

  const Address = ({ navigation }) => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Address1, setAddress1] = useState('');
  const [Address2, setAddress2] = useState('');
  const [City, setCity] = useState('');
  const [Pincode, setPincode] = useState('');
  const [Country, setCountry] = useState('');
  const [AddressAs, setAddressAs] = useState('Home'); // Default to Home
  const [Color, setColor] = useState(true); // Default to Home selected

  const dispatch = useDispatch();

  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    pincode: '',
    country: '',
  });

    const handleOnChangeText = (param, input) => {
    switch (param) {
      case 'firstName':
        setFirstName(input);
        break;
      case 'lastName':
        setLastName(input);
        break;
      case 'address1':
        setAddress1(input);
        break;
      case 'address2':
        setAddress2(input);
        break;
      case 'city':
        setCity(input);
        break;
      case 'pincode':
        setPincode(input);
        break;
      case 'country':
        setCountry(input);
        break;
      default:
        break;
    }
  };

    const handleOnError = (param, msg) => {
    setError((prev) => ({ ...prev, [param]: msg }));
  };

    const handleOnSubmit = () => {
    let valid = true;
    const validationErrors = {};

    // Validate First Name
    if (!FirstName) {
      validationErrors.firstName = 'Please enter first name';
      valid = false;
    } else if (FirstName.length < 3) {
      validationErrors.firstName = 'Name should be greater than 2 characters';
      valid = false;
    }

    // Validate Last Name
    if (!LastName) {
      validationErrors.lastName = 'Please enter last name';
      valid = false;
    } else if (LastName.length < 3) {
      validationErrors.lastName = 'Last name should be greater than 2 characters';
      valid = false;
    }

    // Validate Address1
    if (!Address1) {
      validationErrors.address1 = 'Please enter your address';
      valid = false;
    } else if (Address1.length < 15) {
      validationErrors.address1 = 'Please enter full address';
      valid = false;
    }

    // Validate Address2
    if (!Address2) {
      validationErrors.address2 = 'Please enter your address';
      valid = false;
    } else if (Address2.length < 15) {
      validationErrors.address2 = 'Please enter full address';
      valid = false;
    }

    // Validate City
    if (!City) {
      validationErrors.city = 'Please enter your city name';
      valid = false;
    }

    // Validate Pincode
    if (!Pincode) {
      validationErrors.pincode = 'Please enter your pincode';
      valid = false;
    }

    // Validate Country
    if (!Country) {
      validationErrors.country = 'Please enter your country';
      valid = false;
    }

    setError(validationErrors);

    if (valid) {
      // All fields are valid, you can proceed to save the address
      SaveAddress();
    } else {
      Alert.alert('Validation Error', 'Please check the errors in the form.');
    }
  };

    const SaveAddress = async () => {
    // navigation.navigate('Payment')

    const token = await AsyncStorage.getItem('token');
    const addressData = {
      firstName: FirstName,
      lastName: LastName,
      address1: Address1,
      address2: Address2,
      city: City,
      pincode: Pincode,
      country: Country,
      addressAs: AddressAs,
    };

    const res = dispatch({
      type: 'openCart/fetchAddAddress',
      token: token,
      data: addressData,
    });
    console.log('address response ', res);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{marginTop:20}}>
      
       
        <Input
          placeholder="First Name*"
          getTxt={setFirstName}
          value={FirstName}
          onChangeText={(input) => {
            handleOnChangeText('firstName', input);
          }}
          error={error.firstName}
          input2={true}
          onFocus={() => handleOnError('firstName', '')}/>
          {error.firstName && <Text style={styles.errorText}>{error.firstName}</Text>}

       
        <Input
          placeholder="Last Name*"
          getTxt={setLastName}
          value={LastName}
          onChangeText={(input) => {
            handleOnChangeText('lastName', input);
          }}
          error={error.lastName}
          input2={true}

          onFocus={() => handleOnError('lastName', '')}
        />
         {error.lastName && <Text style={styles.errorText}>{error.lastName}</Text>}

     

       
        <Input
          placeholder="Address 1*"
          getTxt={setAddress1}
          value={Address1}
          onChangeText={(input) => {
            handleOnChangeText('address1', input);
          }}
          input2={false}
          error={error.address1}
          onFocus={() => handleOnError('address1', '')}
        />
         {error.address1 && <Text style={styles.errorText}>{error.address1}</Text>}

       
        <Input
          placeholder="Address 2"
          getTxt={setAddress2}
          value={Address2}
          onChangeText={(input) => {
            handleOnChangeText('address2', input);
          }}
          input2={false}
          error={error.address2}
          onFocus={() => handleOnError('address2', '')}
        />
         {error.address2 && <Text style={styles.errorText}>{error.address2}</Text>}

        
        <Input
          placeholder="Locality/Town*"
          getTxt={setCity}
          value={City}
          onChangeText={(input) => {
            handleOnChangeText('city', input);
          }}
          input2={true}
          error={error.city}
          onFocus={() => handleOnError('city', '')}
        />
        {error.city && <Text style={styles.errorText}>{error.city}</Text>}

       
        <Input
          placeholder="Pin Code*"
          getTxt={setPincode}
          value={Pincode}
          onChangeText={(input) => {
            handleOnChangeText('pincode', input);
          }}
          input2={true}
          error={error.pincode}
          onFocus={() => handleOnError('pincode', '')}
        />
         {error.pincode && <Text style={styles.errorText}>{error.pincode}</Text>}

       
        <Input
          placeholder="Country*"
          getTxt={setCountry}
          value={Country}
          onChangeText={(input) => {
            handleOnChangeText('country', input);
          }}
          input2={true}
          error={error.country}
          onFocus={() => handleOnError('country', '')}
        />
         {error.country && <Text style={styles.errorText}>{error.country}</Text>}

        <View style={styles.contact}>
          <Text style={styles.cont}>SAVE ADDRESS AS</Text>
        </View>

        <View style={{ flexDirection: 'row', marginVertical: wp(3), marginHorizontal: wp(3) }}>
          <TouchableOpacity
            onPress={() => {
              setColor(true);
              setAddressAs('Home');
            }}
            style={[styles.btn, { borderColor: Color ? 'green' : 'grey', borderWidth: Color ? 2 : 1 }]}>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setColor(false);
              setAddressAs('Work');
            }}
            style={[
              styles.btn,
              { marginLeft: wp(5), borderColor: Color ? 'grey' : 'green', borderWidth: Color ? 1 : 2 },
            ]}>
            <Text>Work</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleOnSubmit} style={styles.btn2}>
          <Text style={{ color: 'white', fontWeight: '500', fontSize: wp(3.5) }}>SAVE ADDRESS</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottumTab />
    </View>
  );
};

export default Address;
