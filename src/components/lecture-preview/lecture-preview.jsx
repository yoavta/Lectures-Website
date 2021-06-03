import React from 'react';
import { Link } from 'react-router-dom';

import LectureItem from '../lecture-item/lecture-item.component';

import './lecture-preview.styles.scss';

const LecturePreview = ({ title, items, routeName}) => (
  <div className='lecture-preview'>
    <Link className='title'  to= {`/${routeName}`}>{title.toUpperCase()}</Link>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <LectureItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default LecturePreview;