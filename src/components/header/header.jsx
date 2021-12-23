import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import '../../scss/components/header.sass';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row header-row">
          <div className="logo">
            <Link to="/hacker-news-avito/" className="logo-link">
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
