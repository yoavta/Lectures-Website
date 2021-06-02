import React from 'react';

import './lecture-item.styles.scss';

const CollectionItem = ({ id, name, typeObject, imageUrl }) => (
  <div className='lecture-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='lecture-footer'>
      <span className='name'>{name}</span>
      <span className='type-object'>{typeObject}</span>
    </div>
  </div>
);

export default CollectionItem;