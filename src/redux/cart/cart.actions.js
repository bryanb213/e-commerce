import CartActionTypes from './cart.types';

// define actual actions 
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});
// function that gets new item and generates a new action
//With an action type of add item and passing is the payload
//then to reducer
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});