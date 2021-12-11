import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import '../../scss/components/header.sass';

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
            <NavLink activeClassName="active" className="menu-item" to="/news">
              News
            </NavLink>
            <NavLink activeClassName="active" className="menu-item" to="/pasts">
              Pasts
            </NavLink>
            <NavLink
              activeClassName="active"
              className="menu-item"
              to="/comments"
            >
              Comments
            </NavLink>
            <div className="menu-burger"></div>
            {/* <Link variant="button" className="menu-item active" href="#"> Log In </Link>*/}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
