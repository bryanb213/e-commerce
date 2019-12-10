import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../form-button/form-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.style.scss';

const CollectionItem = ({item, addItem}) => {
    const { name, imageUrl, price} = item;
    return (
        <div className="collection-item">
            <div className="image"
            style={{backgroundImage: `url(${imageUrl})`}}>

            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} className="custom-button" inverted>Add to Cart</CustomButton>
        </div>
    );
}
//Update collection items so that it pulls into its props 
const mapDispatchToProps = dispatch => ({
    //Where to find the add  item prop
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
