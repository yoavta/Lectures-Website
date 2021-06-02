import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = ({ lecture, lecturer, imageUrl, history, linkUrl, match }) => (
  <div
    className="menu-item"
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(MenuItem);