import React from 'react';

import './element-box.component.scss';

import  VideoElement from '../video-element/video-element.component';
const ElementBox = ({ id, name, typeObject, imageUrl,elementUrl }) => (
  <div className='element-box'>
      <h2 className='name'>{name}</h2>


  <VideoElement typeObject={typeObject} elementUrl={elementUrl} />
    <div className='lecture-footer'>
      <span className='type-object'>{typeObject}</span>
    </div>
  </div>
);

export default ElementBox;