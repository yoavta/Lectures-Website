import React from 'react';

import './lecture-item.styles.scss';
import {ReactComponent as YoutubeLogo} from '../../assets/YouTube_play_button_icon.svg';

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
 
      <div>
      {typeObject==='YouTube'?
      (  
    <YoutubeLogo className='logo-object' />
):
    (     <span className='type-object'>{typeObject}</span>)
      }
      </div>
    </div>
  </div>
);

export default CollectionItem;