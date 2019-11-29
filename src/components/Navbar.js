import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { url } from 'inspector';
import { AppBar, Toolbar, Box, Link } from '@material-ui/core';
import logo from '../img/header.png';
import bg from '../img/header-bg.png';

const useStyles = makeStyles(theme => ({
  navbar: {
    backgroundImage: `url(${bg})`,
  },
  menu: {
    marginLeft: 'auto',
  },
  link: {
    color: theme.palette.common.white,
    margin: '0 12px',
    textDecoration: 'none',
    fontSize: '1.1rem',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
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
        <Box className={`${classes.menu} ${state.navBarActiveClass}`}>
          <Link className={classes.link} href="#ways-to-give">
            Ways to Give
          </Link>
          <Link className={classes.link} href="#photos">
            Photos
          </Link>
          <Link className={classes.link} href="#people">
            People
          </Link>
          <Link className={classes.link} href="#get-involved">
            Get Involved
          </Link>
          <Link className={classes.link} href="mailto:ShoholaAlumni@gmail.com">
            Contact
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
