import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/main/Home';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';
//import Tab from "./bottumtab";
import MyDrawer from './drawer';
//import MyTab from "./bottumtab";
import Cart from '../screens/main/Cart';
import Profile from '../screens/main/Profile';
import Details from '../screens/main/Details';
import Categories from '../screens/main/Categories';
import Favorit from '../screens/main/Favorites';
import ProductList from '../screens/main/ProductList';
import OrderList from '../screens/main/OrderList';
import Address from '../screens/main/AddressPage';
import Payment from '../screens/main/Payment';
import OrderDetails from '../screens/main/OrderDetails';
import AddressBook from '../screens/main/AdressBook';
import Splash from '../screens/Auth/Splash';
import Myaddress from '../screens/main/AddressPage/Myaddress';
import ShippingAddressPage from '../screens/main/ShippingAddress.js/ShippingAddress';
import Shippinmethod from '../screens/main/ShippingAddress.js/Shippinmethod';
import Subcategory from '../screens/main/Categories/subcategory';
import Subcategory2 from '../screens/main/Categories/subcategory2';
import SearchBar from '../screens/main/Searchbar';
import Forget from '../screens/Auth/Forget';


const Stack = createStackNavigator();
const myStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SPlash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={MyDrawer} />
        <Stack.Screen name="Register" component={SignUp} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Subcategory" component={Subcategory} />
        <Stack.Screen name="Subcategory2" component={Subcategory2} />
        <Stack.Screen name="Favorite" component={Favorit} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="OrderList" component={OrderList} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Myaddress" component={Myaddress} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="AddressBook" component={AddressBook} />
        <Stack.Screen name="Shipping" component={ShippingAddressPage} />
        <Stack.Screen name="Shippinmethod" component={Shippinmethod} />
        <Stack.Screen name="Searchbar" component={SearchBar} />
      
       
    
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default myStack;
