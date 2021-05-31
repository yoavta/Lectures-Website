import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
    <div className="menu-item">
        <div className="content">
        <h1 className="lecture"> אלגברה לינארית 1</h1>
          <span className="lecturer-name"> עדי בן צבי</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
        <h1 className="lecture"> אלגברה לינארית 1</h1>
          <span className="lecturer-name">אלעד עטייא</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="lecture"> אלגברה לינארית 2</h1>
          <span className="lecturer-name"> עדי בן צבי</span>
        </div>
      </div>      <div className="menu-item">
        <div className="content">
        <h1 className="lecture"> אלגברה לינארית 3</h1>
          <span className="lecturer-name"> עדי בן צבי</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
        <h1 className="lecture"> אלגברה לינארית 6</h1>
          <span className="lecturer-name">אלעד עטייא</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="lecture"> אלגברה לינארית 9</h1>
          <span className="lecturer-name"> עדי בן צבי</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;

