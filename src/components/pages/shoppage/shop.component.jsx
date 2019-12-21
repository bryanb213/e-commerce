import React from 'react';

import CollectionPreview from '../../preview-collection/preview-collection.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../../redux/shop/shop.selector';


const ShopComponent = ({ collections }) => ( 
    <div className="shop-page">
        {
            collections.map(({id, ...collectionProps}) => (
                <CollectionPreview key={id} {...collectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopComponent);