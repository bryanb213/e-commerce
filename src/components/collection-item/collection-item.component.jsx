import React from 'react';

import CustomButton from '../form-button/form-button.component';
import './collection-item.style.scss';

const CollectionItem = ({id, name, price, imageUrl}) => {
    return (
        <div className="collection-item">
            <div className="image"
            style={{backgroundImage: `url(${imageUrl})`}}>

            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton className="custom-button" inverted>Add to Cart</CustomButton>
        </div>
    );
}

export default CollectionItem;
