import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview';

import {selectCollections} from '../../redux/shop/shop.selectors';

import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux';




const ShopPage = ({collections}) => (
    // const {collections} = this.state;

    <div className='shop-page'>
        {
            collections.map(({ id, ...otherColletionProps }) => (
                <CollectionPreview key={id} {...otherColletionProps} />
            ))
        }


    </div>
        
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});


export default connect(mapStateToProps)(ShopPage);