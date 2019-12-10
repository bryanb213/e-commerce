import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../form-button/form-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import './cart-dropdown.style.scss';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.map(cartItem => (
                <CartItem key={CartItem.id} item={cartItem} />
        ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
        
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state )
})

export default connect(mapStateToProps)(CartDropdown);