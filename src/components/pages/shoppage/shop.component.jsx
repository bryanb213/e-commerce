import React, { Component } from 'react';
import ShopData from  './shop.data';
import CollectionPreview from '../../preview-collection/preview-collection.component';

class ShopComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: ShopData
        }
    }


    render() {
        const {collections} = this.state;

        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...collectionProps}) => (
                        <CollectionPreview key={id} {...collectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default ShopComponent;
