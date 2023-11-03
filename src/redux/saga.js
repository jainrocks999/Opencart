import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native/types';
import { call, put, takeEvery } from 'redux-saga/effects'
import Api from './Api';

function* genrateToken() {
    try {
        const res = yield call(Api.genrateToken)
        if (res?.success) {
            yield put({
                type: 'openCart/genrateTokenSuccess',
                payload: res?.api_token
            })
            yield AsyncStorage.setItem('token', res?.api_token)

        }
    } catch (err) {
        yield put({
            type: 'openCart/genrateTokenError'
        })
        console.log(err)
    }
}
function* doLogin(action) {
    let data = new FormData()
    data.append("email", action.user.email);
    data.append("password", action.user.password);

    const res = yield call(Api.login, action.token, data)
    console.log('this is res...', res)
    if (res?.data) {
        yield put({
            type: 'openCart/loginSuccess',
            payload: res.data
        })
        yield AsyncStorage.setItem('ctoken', res.data.customer_token)
        action.navigation.navigate("Home")
    }
    else {
        yield put({
            type: 'openCart/loginError'
        })
    }
}
function* doregister(action) {
    let data = new FormData()
    data.append("email", action.user.email);
    data.append("firstname", action.user.firstname);
    data.append("lastname", action.user.lastname);
    data.append("telephone", action.user.telephone);
    data.append("password", action.user.password);

    const res = yield call(Api.Register, action.token, data)
    console.log('this is res...', res)
    if (res?.data) {
        yield put({
            type: 'openCart/RegisterSuccess',
            payload: res.data
        })
        yield AsyncStorage.setItem('token', res.data.customer_token)
        action.navigation.navigate("Login")
    }
    else {
        yield put({
            type: 'openCart/RegisterError'
        })
    }
}

function* fetchCategories(action) {


    const res = yield call(Api.Category, action.token)


    if (res.categories.length > 1) {

      

        yield put({
            type: 'openCart/fetchCategoriesSuccess',
            payload: res.categories

        })


    }
    else {
        yield put({
            type: "openCart/fetchCategoriesError",
        })
    }
}

function* fetchProducts(action) {
     const res = yield call(Api.products, action.token)



    if (res.products) {
        yield put({
            type: 'openCart/fetchProductsSuccess',
            payload: res.products
        })
        yield AsyncStorage.setItem('Product_list', JSON.stringify(res.products))

    }
    else {
        yield put({
            type: 'openCart/fetchProductsError'
        })
    }
}
function* fetchproductdetail(action) {

    const res = yield call(Api.productdetails, action.token, action.id)

    if (res.detail != null) {

        yield put({
            type: 'openCart/fetchProductdetailSuccess',
            payload: res
        })
        action.navigation.navigate('Details')
    }
    else {
        yield put({
            type: 'openCart/fetchProductdetailError'
        })
    }
}
function* fetchaddcart(action) {

    const res = yield call(Api.addCart, action.token, action.id, action.detail)


    var successValue = res.success;
    console.log('this is res...', res)

    if (successValue == 'Success: You have modified your shopping cart!') {
        alert('Item Add Successfully')
        yield put({
            type: 'openCart/fetchAddcartSuccess',
            payload: action.id
        })
    }
    else {
        yield put({
            type: 'openCart/fetchAddcartError'
        })
    }


}


function* AddAddress(action) {

    const res = yield call(Api.AddAddressData, action.token, action.data)
    console.log("tsisisiresi", JSON.stringify(res.data))

    if (res.data.success) {
        alert('Your address has been successfully added')
        yield put({
            type: 'openCart/fetchAddAddressSuccess',
            payload: res.data.api_id
        })
        yield put({
            type: "openCart/fetchViewAddress",
            token: action.token,
        })

    }
    else {
        yield put({
            type: 'openCart/fetchAddAddressError'
        })
    }

}
function* ViewAddress(action) {
    const res = yield call(Api.ViewAddress, action.token)

    console.log('ye =>>> ', res.data.data.addresses);

    if (res.data.status) {
        console.log('fetched');

        yield put({
            type: 'openCart/fetchViewAddressSuccess',
            payload: res.data.data.addresses
        })

    }
    else {
        yield put({
            type: 'openCart/fetchViewAddressError'
        })
    }
    return res
}
function* DeleteAddress(action) {
    const res = yield call(Api.DeleteAddress, action.token, action.id)

    console.log('res ', res);

    // if(res.length){

    //     yield put({
    //         type:'openCart/fetchDeleteAddressSuccess',
    //         payload:res
    //     })

    //  }
    //  else{
    //     yield put({
    //      type:'openCart/fetchDeleteAddressError'
    //     }) 
    // }

    return res
}
function* ShippingAddress(action) {
    const res = yield call(Api.ShippingAddress, action.token)

    console.log('res ', res);

    // if(res.length){

    //     yield put({
    //         type:'openCart/fetchDeleteAddressSuccess',
    //         payload:res
    //     })
    //  }
    //  else{
    //     yield put({
    //      type:'openCart/fetchDeleteAddressError'
    //     }) 
    // }
    return res
}
function* ShippingMethodList(action) {
    const res = yield call(Api.ShippingMethodList, action.token)
    console.log('res ', res);
    // if(res.length){

    //     yield put({
    //         type:'openCart/fetchDeleteAddressSuccess',
    //         payload:res
    //     })
    //  }
    //  else{
    //     yield put({
    //      type:'openCart/fetchDeleteAddressError'
    //     }) 
    // }
    return res
}
function* ShippingMethod(action) {
    const res = yield call(Api.ShippingMethod, action.token)

    console.log('res ', res);

    // if(res.length){

    //     yield put({
    //         type:'openCart/fetchDeleteAddressSuccess',
    //         payload:res
    //     })

    //  }
    //  else{
    //     yield put({
    //      type:'openCart/fetchDeleteAddressError'
    //     }) 
    // }

    return res
}
function* PaymentAddress(action) {
    const res = yield call(Api.PaymentAddress, action.token)

    console.log('res ', res);

    // if(res.length){

    //     yield put({
    //         type:'openCart/fetchDeleteAddressSuccess',
    //         payload:res
    //     })

    //  }
    //  else{
    //     yield put({
    //      type:'openCart/fetchDeleteAddressError'
    //     }) 
    // }

    return res
}
function* PaymentMethodList(action) {
    const res = yield call(Api.PaymentMethodList, action.token)

    console.log('res ', res);

    // if(res.length){

    //     yield put({
    //         type:'openCart/fetchDeleteAddressSuccess',
    //         payload:res
    //     })

    //  }
    //  else{
    //     yield put({
    //      type:'openCart/fetchDeleteAddressError'
    //     }) 
    // }

    return res
}
function* PaymentMethodSave(action) {
    const res = yield call(Api.PaymentMethodSave, action.token)

    console.log('res ', res);

    // if(res.length){

    //     yield put({
    //         type:'openCart/fetchDeleteAddressSuccess',
    //         payload:res
    //     })

    //  }
    //  else{
    //     yield put({
    //      type:'openCart/fetchDeleteAddressError'
    //     }) 
    // }

    return res
}
function* AddOrder(action) {
    const res = yield call(Api.AddOrder, action.token)

    console.log('res ', res);

    // if(res.length){

    //     yield put({
    //         type:'openCart/fetchDeleteAddressSuccess',
    //         payload:res
    //     })

    //  }
    //  else{
    //     yield put({
    //      type:'openCart/fetchDeleteAddressError'
    //     }) 
    // }

    return res
}
function* RemoveCart(action) {

    console.log('sagagasgasgasagsag=>>>>>>>>>>>>>>>',action);
    // try {
    //     const res = yield call(Api.cartItemRemove, action);
    //     console.log('res=>>>>>.',res);
    //     // if (res.success === "Success: You have modified your shopping cart!") {
    //     //     // Assuming that you store the cart items in the Redux store, remove the item by its ID
    //     //     yield put({
    //     //         type: 'openCart/fetchRemovecartItemSuccess',
    //     //         payload: action.Id,
    //     //     });
    //     // } else {
    //     //     yield put({
    //     //         type: 'openCart/fetchcartItemRemoveError',
    //     //     });
    //     // }
    // } catch (err) {
    //     console.error('this is error',err);
    //     yield put({
    //         type: 'openCart/fetchcartItemRemoveError',
    //     });
    // }
}
// function* fetchcartItemRemove(action) {
//     const res = yield call(Api.cartItemRemove,action);
// console.log(res);
//    if(res.success ==  "Success: You have modified your shopping cart!"){
//       yield put({
//                   type:'openCart/fetchRemovecartItemSuccess',
//                   payload:action
//               })
//            }
//   else{
//       console.log('saga==>>>' , res);
//   }
  
  
// }

function* fetchRemoveWishList(action) {
    const res = yield call(Api.RemoveWishList, action);
    console.log("this issisi", res)
    if (res.success) {
        yield put({
            type: 'openCart/fetchRemoveWishListSuccess',
            payload: res,
            id: action.id
        })
    }
    else {
        yield put({
            type: 'openCart/fetchRemoveWishListError'
        })
    }
}
function* fetchAddwishList(action) {
    try {
        const res = yield call(Api.addWishList, action.token, action.id)
        console.log(res.success);
        if (res.status) {
            alert('Item Add Successfully')
            yield put({
                type: 'openCart/fetchAddcartSuccess',
                payload: action.id
            })
        }
        else {
            yield put({
                type: 'openCart/fetchAddcartError'
            })
        }
    } catch (err) {
    }
}
function* fetchViewcart(action) {

   try{ const res = yield call(Api.ViewCart, action.token)
 

     const product = res?.products;
     console.log(product)

    if (product.length >= 0) {
        console.log('insert cart');

        yield put({
            type: 'openCart/fetchViewcartSuccess',
            payload: product
        })

    }
    else {
        yield put({
            type: 'openCart/fetchViewcartError'
        })
    }}
    catch(err){
        yield put({
            type: 'openCart/fetchViewcartError'
        })
        console.log('this is error',err)
    }
}
// function* fetchViewcart(action){
    
//     const res = yield call(Api.ViewCart,action.token)
//     if(res.products){
  
//        yield put({
//            type:'openCart/fetchViewcartSuccess',
//            payload:res.products
//        })
    
//     }
//     else{
//        yield put({
//            type:'openCart/fetchViewcartError'
//        }) 
//    }
//      return res 
//   }
  

function* fetchViewwishList(action) {

    const res = yield call(Api.ViewWishList, action.token)

    const product = res.products;


    if (product.length >= 0) {
        console.log('insert vishList');
        yield put({
            type: 'openCart/fetchViewWishListSuccess',
            payload:product
        })
    }
    else {
        yield put({
            type: 'openCart/fetchViewWishListError'
        })
    }


}


function* fetchsearchbar(action) {

    try {
        const res = yield call(Api.Searchbar, action.token, action.search)
        console.log('resut------>>>>>>', JSON.stringify(res))
        if (res.breadcrumbs) {

            yield put({
                type: 'openCart/fetchsearchbarSuccess',
                payload: res,

            })

        }
        else {
            yield put({
                type: 'openCart/fetchsearchbarError',

            })
        }
    } catch (err) {
        console.log(err);
        yield put({
            type: 'openCart/fetchsearchbarError',

        })
    }

}
function* saga() {
    yield takeEvery('openCart/genrateToken', genrateToken)
    yield takeEvery('openCart/loginRequest', doLogin);
    yield takeEvery('openCart/RegisterRequest', doregister)
    yield takeEvery('openCart/fetchCategories',fetchCategories)
    yield takeEvery('openCart/fetchProducts', fetchProducts)
    yield takeEvery('openCart/fetchProductDetail', fetchproductdetail)
    yield takeEvery('openCart/fetchAddcart', fetchaddcart)
    yield takeEvery('openCart/fetchViewCart', fetchViewcart)
    yield takeEvery('openCart/fetchcartItemRemove', RemoveCart)
    yield takeEvery('openCart/fetchAddAddress', AddAddress)
    yield takeEvery('openCart/fetchViewAddress', ViewAddress)
    yield takeEvery('openCart/fetchDeleteAddress', DeleteAddress)
    yield takeEvery('openCart/fetchShipingAddress', ShippingAddress)
    yield takeEvery('openCart/fetchShippingMethodList', ShippingMethodList)
    yield takeEvery('openCart/fetchShippingMethod', ShippingMethod)
    yield takeEvery('openCart/fetchPaymentAddress', PaymentAddress)
    yield takeEvery('openCart/fetchPaymentMethodList', PaymentMethodList)
    yield takeEvery('openCart/fetchPaymentMethodSave', PaymentMethodSave)
    yield takeEvery('openCart/fetchAddOrder', AddOrder);
    yield takeEvery('openCart/fetchAddWishList', fetchAddwishList);
    yield takeEvery('openCart/fetchViewWishList', fetchViewwishList);
    yield takeEvery('openCart/fetchRemoveWishList', fetchRemoveWishList);
    yield takeEvery('openCart/fetchsearchbar', fetchsearchbar);
}
export default saga