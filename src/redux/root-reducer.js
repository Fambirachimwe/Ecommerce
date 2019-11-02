import { combineReducers, } from 'redux';
import userReducer from './user/user.reducer';


export default combineReducers({   // our store is just a giant js object  
    user: userReducer
});;

