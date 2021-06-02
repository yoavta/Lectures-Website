import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/school-icon.svg'

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/course">
        1 אלגברה לינארית
      </Link>

      <Link className="option" to="/contact">
        צור קשר
      </Link>

      <Link className="option" to="/signin">
        התחברות
      </Link>
    </div>
  </div>
);

export default Header;
