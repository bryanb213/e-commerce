import CartActionTypes from './cart.types.js';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    //add new value to our initial state 
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action ) =>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
            //reducer has to listen for a new case
            //The new action type
        case CartActionTypes.ADD_ITEM:
            return{
                //bring initial state 
                ...state,
                //set new cart items array to append initial state and the new items
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;