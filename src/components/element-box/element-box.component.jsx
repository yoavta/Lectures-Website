import React from 'react';

import './element-box.component.scss';

const ElementBox = ({ id, name, typeObject, imageUrl }) => (
  <div className='element-box'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='lecture-footer'>
      <span className='name'>{name}sdfsfs</span>
      <span className='type-object'>{typeObject}</span>
    </div>
  </div>
);

export default ElementBox;