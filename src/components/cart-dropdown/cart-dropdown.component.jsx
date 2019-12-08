import React from 'react';

import CustomButton from '../form-button/form-button.component';

import './cart-dropdown.style.scss';

const Cart = () => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
        
    </div>
)

export default Cart;