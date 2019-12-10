//Utility functions allow us to keep our files clean and organize
// functions that we may need in multiple files in one location


//takes 2 arguments cart items array tha we have now
//2nd argument is the cart item we want to add
export const addItemToCart = (cartItems, cartItemToAdd) => {
    //find() will return item in array that matches
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem){
        //If we have items map through it and it will return a new array
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            //if it exist add it to the array
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }
    //if item not found return this array 
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};