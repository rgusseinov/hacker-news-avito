import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/header.sass';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row header-row">
          <div className="logo">
            <Link to="/" className="logo-link">
              <img src={Logo} alt="Logo" className="logo-img" />
              <span className="logo-text"> Hacker News </span>
            </Link>
          </div>
          <nav className="menu">
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
