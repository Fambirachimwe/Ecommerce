import { combineReducers, } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducers';



export default combineReducers({   // our store is just a giant js object  
    user: userReducer,
    cart: cartReducer
});;

