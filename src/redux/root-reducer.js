import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    //the reducer for user
    user: userReducer,
    cart: cartReducer
});