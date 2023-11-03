import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { key } from './constants';
export default class Api {
  static genrateToken = () => {
    // var myHeaders = new Headers();
    // myHeaders.append("Cookie", "OCSESSID=922c23154294237253b091b64b; currency=USD");
    var formdata = new FormData();
    formdata.append('username', 'Default');
    formdata.append(
      'key',
      'J1yMIZch7GvCQQ8u1CSkGO62r2458XYYcczXmimGGFM2SMavnUJa8eJEQ2R6mCf2UHhtOQDrw5q1ZNP0P0uQwzRu5jAOSXhZJLe7sTl3lCprfJRk5fuU4blx246uLNPxKezlivEuEzOkv5MZDo4xVftPISm3YX1gbVF0INbuD7L2Qlo7COnsFk7HcbBwxJTqNcApJ6oXKfBmcSEraLI3ZY0ajad8ZS8jwkygsuIXciKEDcwIZyXcknIF75iX0utf',
    );
    var requestOptions = {
      method: 'POST',
      // headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    const res = fetch(
      'https://ecom.forebearpro.co.in/upload/index.php?route=api/account/login',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        return JSON.parse(result);
      })
      .catch(error => console.log('error', error));
    return res;
  };
  static login = (token, data) => {
    var requestOptions = {
      method: 'POST',
      // headers: myHeaders,
      body: data,
      redirect: 'follow',
    };

    const res = fetch(
      `https://ecom.forebearpro.co.in/upload/index.php?route=api/custom/customerlogin.login&api_token=${token}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        return JSON.parse(result);
      })
      .catch(error => console.log('error', error));
    return res;
  };
  static Register = (token, data) => {
    var requestOptions = {
      method: 'POST',
      // headers: myHeaders,
      body: data,
      redirect: 'follow',
    };

    const res = fetch(
      `http://ecom.forebearpro.co.in/upload/index.php?route=api/custom/registrationctrl.registration&api_token=${token}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        return JSON.parse(result);
      })
      .catch(error => console.log('error', error));
    return res;
  };
  static Category = token => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    const res = fetch(
      `https://ecom.forebearpro.co.in/upload/index.php?route=api/custom/categoryctrl.list&api_token=${token}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        return JSON.parse(result)
      })
      .catch(error => console.log('error', error));
    return res;
  };
  static products = async token => {
    var requestOptions = {
      method: 'GET',

      redirect: 'follow',
    };
    const res = fetch(
      `https://ecom.forebearpro.co.in/upload/index.php?route=api/custom/productctrl.productlistNew&api_token=${token}&limit=10`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        return JSON.parse(result);
      })
      .catch(error => console.log('error', error));

    return res;
  };
  static productdetails = (token, id) => {




    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const res = fetch(`https://ecom.forebearpro.co.in/upload/index.php?route=api/custom/productctrl.info&api_token=${token}&product_id=${id}`, requestOptions)
      .then(response => response.text())
      .then(result => { return JSON.parse(result) })
      .catch(error => console.log('error', error));

    return res;
  };
  static addCart(token, id) {
    // Create a form data object with the necessary parameters
    var formdata = new FormData();
    formdata.append('product_id', id);
    formdata.append('customer_id', '1');
  
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };
  
    const res = fetch(`https://ecom.forebearpro.co.in/upload/index.php?route=api/sale/cart.add&api_token=${token}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        return JSON.parse(result);
      })
      .catch(error => console.log('error', error));
  
    return res;
  }
  
  
  static AddAddressData = (token, data) => {
    var formdata = new FormData();
    formdata.append('firstname', data.firstName);
    formdata.append('lastname', data.lastName);
    formdata.append('address_1', data.address1);
    formdata.append('address_2', data.address2);
    formdata.append('city', data.city);
    formdata.append('postcode', data.pincode);
    formdata.append('country_id', data.country);
    formdata.append('zone_id', '1');
    formdata.append('company', data.addressAs);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    const res = fetch(
      `https://ecom.forebearpro.co.in/upload/index.php?api_token=${token}&route=api/custom/registrationctrl.saveAdd`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        return JSON.parse(result);
      })
      .catch(error => console.log('error', error));
    return res;
  };
  static ViewAddress = token => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    const res = fetch(
      `https://ecom.forebearpro.co.in/upload/index.php?api_token=${token}&route=api/custom/registrationctrl.getAddrList`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        return JSON.parse(result);
      })
      .catch(error => console.log('error', error));

    return res;
  };
  static DeleteAddress = (token, id) => {
    console.log(id);

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    const res = fetch(
      `https://ecom.forebearpro.co.in/upload/index.php?api_token=${token}&route=api/custom/registrationctrl.deleteAddress&address_id=${id}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        return result;
      })
      .catch(error => console.log('error', error));

    return res;
  };
  static ShippingAddress = token => {
    var formdata = new FormData();
    formdata.append('firstname', 'abc');
    formdata.append('lastname', 'test');
    formdata.append('address_1', 'Address Line one');
    formdata.append('city', 'Indore');
    formdata.append('country_id', '99');
    formdata.append('postcode', '452001');
    formdata.append('zone_id', '1492');

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    const res = fetch(
      `https://ecom.forebearpro.co.in/upload/index.php?route=api/sale/shipping_address&api_token=${token}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        return result;
      })
      .catch(error => console.log('error', error));

    return res;
  };
  static ShippingMethod = token => {
    var formdata = new FormData();
    formdata.append('shipping_method', 'flat.flat');

    var requestOptions = {
      method: 'POST',

      body: formdata,
      redirect: 'follow',
    };

    const res = fetch(
      `https://ecom.forebearpro.co.in/upload/index.php?route=api/sale/shipping_method.save&api_token=${token}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        return result;
      })
      .catch(error => console.log('error', error));

    return res;
  };
  static ShippingMethodList = token => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      'OCSESSID=82d4b6456e7050a07e5afd0e78; currency=USD',
    );

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    const res = fetch(
      `https://ecom.forebearpro.co.in/upload/index.php?route=api/sale/shipping_method&api_token=${token}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    return res;
  };
  static PaymentAddress = token => {
    var formdata = new FormData();
    formdata.append('firstname', 'ankit');
    formdata.append('lastname', 'Kumar');
    formdata.append('address_1', 'Address Line one');
    formdata.append('city', 'Indore');
    formdata.append('country_id', '99');
    formdata.append('zone_id', '1492');

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    const res = fetch(
      `https://ecom.forebearpro.co.in/upload/index.php?route=api/sale/payment_address&api_token=${token}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    return res;
  };
  static PaymentMethodList = token => {
    var requestOptions = {
      method: 'GET',

      redirect: 'follow',
    };

    const res = fetch(
      `https://ecom.forebearpro.co.in/upload/index.php?route=api/sale/payment_method&api_token=${token}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    return res;
  };
  static PaymentMethodSave = token => {
    var formdata = new FormData();
    formdata.append('payment_method', 'cod.cod');

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };
    const res = fetch(
      `https://ecom.forebearpro.co.in/upload/index.php?route=api/sale/payment_method.save&api_token=${token}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    return res;
  };
  static AddOrder = token => {
    var formdata = new FormData();
    formdata.append('shipping_method', 'Flat Rate');
    formdata.append('payment_method', 'cod.cod');

    var requestOptions = {
      method: 'POST',

      body: formdata,
      redirect: 'follow',
    };

    const res = fetch(
      `https://ecom.forebearpro.co.in/upload/index.php?route=api/sale/order.confirm&api_token=${token}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    return res;
  };
  static cartItemRemove = action => {
    console.log('api=>>>>>>>.',action.Id);
    var myHeaders = new Headers();
myHeaders.append("Cookie", "OCSESSID=0f38945159e6b05b73d74b4b9e; currency=USD");

var formdata = new FormData();
formdata.append("key", action.Id);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch(`https://ecom.forebearpro.co.in/upload/index.php?route=api/sale/cart.remove&api_token=${action.token}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
    return res={
      success: "Success: You have modified your shopping cart!"
    };
  }

     static RemoveWishList = (action) => {
      console.log(action.id);
      var formdata = new FormData();
      formdata.append('product_id', action.id);
  
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };
  
      const res = fetch(
        `https://ecom.forebearpro.co.in/upload/index.php?route=api/custom/wishlistctrl.remove&api_token=${action.token}`,
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          return JSON.parse(result)
  
        })
        .catch(error => console.log('error', error));
  
      return res;
    };
    static addWishList = (token, id) => {
    console.log('cdkdkdkdkddkdkdk', id)
    try {
      var formdata = new FormData();
      formdata.append('product_id', id);
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };
      const res = fetch(
        `https://ecom.forebearpro.co.in/upload/index.php?route=api/custom/wishlistctrl.add&api_token=${token}`,
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          return JSON.parse(result);
        })
        .catch(error => console.log('error', error));

      return res;
    } catch (rr) {
      throw new Error(rr)
    }
  };
  static ViewCart = token => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  
    const res = fetch(`https://ecom.forebearpro.co.in/upload/index.php?route=api/sale/cart&api_token=${token}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        return JSON.parse(result);
      })
      .catch(error => console.log('ttjttjtttj', error));
  
    return res;
  }
  
  static ViewWishList = token => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    const res = fetch(
      `https://ecom.forebearpro.co.in/upload/index.php?route=api/custom/wishlistctrl.getList&api_token=${token}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        return JSON.parse(result);
      })
      .catch(error => console.log('error', error));
    return res;
  };
  static Searchbar = (token, text) => {
    var formdata = new FormData();
    console.log(text)
   
    var requestOptions = {
      method: 'GET',
     
      redirect: 'follow',
    };

    const res = fetch(
      `http://ecom.forebearpro.co.in/upload/index.php?route=api/custom/searchctrl.search&api_token=${token}&search=${text}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        return JSON.parse(result);
      })
      .catch(error => error);

    return res;
  };
}
