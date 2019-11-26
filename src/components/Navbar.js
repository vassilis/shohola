import React, { useState } from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
// import { url } from 'inspector';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from '../img/header.png';
import bg from '../img/header-bg.png';

const useStyles = makeStyles(theme => ({
  navbar: {
    backgroundImage: `url(${bg})`,
  },
}));

function Navbar() {
  const [state, setState] = useState({
    active: false,
    navBarActiveClass: '',
  });
  const classes = useStyles();

  const toggleHamburger = () => {
    setState({
      active: !state.active,
      navBarActiveClass: state.active ? 'is-active' : '',
    });
  };

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <div className="navbar-brand">
          <Link to="/" title="Shohola Scholarship" style={{ display: 'flex' }}>
            <img src={logo} alt="Shohola Scholarship" />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
            onKeyDown={() => toggleHamburger()}
            role="button"
            tabIndex={0}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${state.navBarActiveClass}`}>
          <div className="navbar-end has-text-centered">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/blog">
              Stories
            </Link>
            <Link className="navbar-item" to="/events">
              Events
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
