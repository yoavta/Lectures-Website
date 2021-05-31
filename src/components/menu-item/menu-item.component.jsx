import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({ lecture, lecturer, imageUrl }) => (
  <div className="menu-item">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="lecture"> {lecture} </h1>
      <span className="lecturer-name"> {lecturer}</span>
    </div>
  </div>
);

export default MenuItem;