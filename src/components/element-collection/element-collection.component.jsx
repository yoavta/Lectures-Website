import React from 'react';
import { Link } from 'react-router-dom';

import ElementBox from '../element-box/element-box.component';

import './element-collection.styles.scss';

const ElementCollection = ({ title, items, routeName}) => (
  <div className='element-collection'>
  <h1>{title}</h1>

    <div className='preview'>
      {items
        .map(({ id, ...otherItemProps }) => (
          <ElementBox key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);
export default ElementCollection;