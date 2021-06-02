import React from 'react';

import CollectionItem from '../lecture-item/lecture-item.component';

import './lecture-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='lecture-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;