import { createSlice } from "@reduxjs/toolkit";
const mySlice=createSlice({
    name:'openCart',
    initialState: {
        isLoading: false,
        user: null,
        token: null,
        categories: null,
        products: [],
        productDetails: null,
        ViewAddress: [],
        AddAddress: [],
        ViewWishList: [],
        ViewCart: [], // Initialize ViewCart as an empty array
      },
    reducers:{
        loginRequest:(state)=>{
           state.isLoading=true;
        },
        loginSuccess:(state,action)=>{
            state.isLoading=false;
            state.user=action.payload
        },
        loginError:(state)=>{
            state.isLoading=false
        },
        RegisterRequest:(state)=>{
           state.isLoading=true;
        },
        RegisterSuccess:(state,action)=>{
            state.isLoading=false;
            state.user=action.payload
        },
        RegisterError:(state)=>{
            state.isLoading=false
        },
        genrateToken:(state)=>{
           state.isLoading=true
        },
        genrateTokenSuccess:(state,action)=>{
           state.isLoading=false
           state.token=action.payload
        },
        genrateTokenError:(state)=>{
            state.isLoading=false
        },
        fetchCategories:(state)=>{
            state.isLoading=true
        },
        fetchCategoriesSuccess:(state,action)=>{
            state.isLoading=false,
            state.categories=action.payload
        },
        fetchCategoriesError:(state)=>{
            state.isLoading=false
        },
        fetchProducts:(state)=>{
            state.isLoading=true
        },
        fetchProductsSuccess:(state,action)=>{
            state.isLoading=false,
            state.products=action.payload
        },
        fetchProductsError:(state)=>{
            state.isLoading=false
        },
        fetchProductDetail:(state)=>{
            state.isLoading=true
        },
        fetchProductdetailSuccess:(state,action)=>{
            state.isLoading=false,
            state.productDetails=action.payload
        },
        fetchProductdetailError:(state)=>{
            state.isLoading=false
        },
        fetchAddcart:(state)=>{
            state.isLoading=true
        },
        fetchAddcartSuccess: (state, action) => {
            state.isLoading = false;
             state.ViewCart=action.payload
          },
        fetchAddcartError:(state)=>{
            state.isLoading=false
        },
       
        fetchAddAddress:(state)=>{
            state.isLoading=true
        },
        fetchAddAddressSuccess:(state,action)=>{
            state.isLoading=false,
            state.AddAddress=action.payload
        },
        fetchAddAddressError:(state)=>{
            state.isLoading=false
        },
        fetchViewAddress:(state)=>{
            state.isLoading=true
        },
        fetchViewAddressSuccess:(state,action)=>{
            state.isLoading=false,
            state.ViewAddress=action.payload
        },
        fetchViewAddressError:(state)=>{
            state.isLoading=false
        },
        fetchDeleteAddress:(state)=>{
            state.isLoading=true
        },
        fetchDeleteAddressSuccess:(state,action)=>{
            state.isLoading=false
            
        },
        fetchDeleteAddressError:(state)=>{
            state.isLoading=false
        },
        fetchShippingAddress:(state)=>{
            state.isLoading=true
        },
        fetchShippingAddressSuccess:(state,action)=>{
            state.isLoading=false
        },
        fetchShippingAddressError:(state)=>{
            state.isLoading=false
        },
        fetchShippingMethodList:(state)=>{
            state.isLoading=true
        },
        fetchShippingMethodListSuccess:(state,action)=>{
            state.isLoading=false,
            state.ShipList=action.payload
        },
        fetchShippingMethodListError:(state)=>{
            state.isLoading=false
        },
        fetchShippingMethod:(state)=>{
            state.isLoading=true
        },
        fetchShippingMethodSuccess:(state,action)=>{
            state.isLoading=false
        },
        fetchShippingMethodError:(state)=>{
            state.isLoading=false
        },
        fetchPaymentAddress:(state)=>{
            state.isLoading=true
        },
        fetchPaymentAddressSuccess:(state,action)=>{
            state.isLoading=false

        },
        fetchPaymentAddressError:(state)=>{
            state.isLoading=false
        },
        fetchPaymentMethodList:(state)=>{
            state.isLoading=true
        },
        fetchPaymentMethodListSuccess:(state,action)=>{
            state.isLoading=false,
            state.paymentList=action.payload
        },
        fetchPaymentMethodListError:(state)=>{
            state.isLoading=false
        },
        fetchPaymentMethodSave:(state)=>{
            state.isLoading=true
        },
        fetchPaymentMethodSaveSuccess:(state,action)=>{
            state.isLoading=false            
        },
        fetchPaymentMethodSaveError:(state)=>{
            state.isLoading=false
        },
        fetchAddOrder:(state)=>{
            state.isLoading=true
        },  
        fetchAddOrderSuccess:(state,action)=>{
            state.isLoading=false,
            state.paymentList=action.payload  
        },
        fetchAddOrderError:(state)=>{
            state.isLoading=false
        },
        // fetchcartItemRemove:(state)=>{
        //     state.isLoading=true
        // },
        // fetchRemovecartItemSuccess: (state, action) => {
        //     state.isLoading = false;
        //     state.ViewCart = state.ViewCart.filter((item) => item.cart_id !== action.payload);
        //   },
        //   fetchcartItemRemoveError: state => {
        //     state.isLoading = false;
        //   },
          fetchRemovecartItemSuccess: state => {
            state.isLoading = true;
          },
          fetchcartItemRemove: (state, action) => {
            console.log(action.payload.Id);
    //         const id = action.payload.Id;     
    //    state.ViewCart = state.ViewCart.filter((item)=> item.cart_id !== id);
          },
          fetchcartItemRemoveError: state => {
            state.isLoading = false;
          },
          fetchAddWishList:(state)=>{
            state.isLoading=true
        },
        fetchAddWishListSuccess:(state,action)=>{
            state.isLoading=false
        },
        fetchAddWishListError:(state)=>{
            state.isLoading=false
        },
        fetchViewcart:(state)=>{
            state.isLoading=true
        },
        fetchViewcartSuccess:(state,action)=>{
            state.isLoading=false,
            state.ViewCart=action.payload
        },
        fetchViewcartError:(state)=>{
            state.isLoading=false
        },
          fetchViewWishList:(state)=>{
            state.isLoading=true
        },
        fetchViewWishListSuccess:(state,action)=>{
            state.isLoading=false,
            state.ViewWishList=action.payload
        },
        fetchWishListError:(state)=>{
            state.isLoading=false
        },

        fetchRemoveWishList:(state)=>{
            state.isLoading=true
        },
        fetchRemoveWishListSuccess:(state,action)=>{
             state.isLoading=false
            state.ViewWishList=state.ViewWishList.filter((item,index)=>item.product_id!=action.id)
        },
        fetchRemoveWishListError:(state)=>{
            state.isLoading=false
        },
        fetchsearchbar:(state)=>{
            state.isLoading=true
        },
        fetchsearchbarSuccess:(state,action)=>{
            state.isLoading=false,
            state.Searchbar=action.payload
        },
        fetchsearchbarError:(state)=>{
            state.isLoading=false
        },
    }
})
export const {loginRequest,loginError,loginSuccess}=mySlice.actions
export default mySlice.reducer