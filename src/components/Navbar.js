import React, { useState } from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
// import { url } from 'inspector';
import { AppBar, Toolbar, Button, Box } from '@material-ui/core';
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
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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
          <Button component={Link} className={classes.link} to="#">
            About
          </Button>
          <Button component={Link} className={classes.link} to="#">
            Stories
          </Button>
          <Button component={Link} className={classes.link} to="#">
            Events
          </Button>
          <Button component={Link} className={classes.link} to="#">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
