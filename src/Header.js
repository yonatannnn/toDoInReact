// Header.js

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Styles.css';

const Header = () => {
  const history = useHistory();

  const navigateToHome = () => {
    history.push('/');
  };

  const navigateToAbout = () => {
    history.push('/about');
  };

  return (
    <div className="header-container">
      <nav>
        <ul>
          <li>
            <button onClick={navigateToHome}>Home</button>
          </li>
          <li>
            <button onClick={navigateToAbout}>About</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
