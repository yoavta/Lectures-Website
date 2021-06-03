import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/school-icon.svg";

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
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


      {currentUser ? <div className='option' onClick={()=>auth.signOut()}>התנתק</div> :
      <Link className="signin" to="/signin">
        התחברות
      </Link>}
    </div>
  </div>
);

export default Header;
