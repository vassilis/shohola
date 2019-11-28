import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box } from '@material-ui/core';
import logo from '../img/logo.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundColor: theme.palette.secondary.main,
  },
  textWhite: {
    color: theme.palette.common.white,
  },
  socialIcon: {
    height: 50,
    margin: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(1),
    borderRadius: 5,
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <div className="container has-text-white">
          <Grid container spacing={5}>
            <Grid item lg={8}>
              <section className="">
                <Link to="/" className={classes.textWhite}>
                  Home
                </Link>
                <br />
                <Link className={classes.textWhite} to="#">
                  About
                </Link>
                <br />
                <Link className={classes.textWhite} to="#">
                  Events
                </Link>
                <br />
                <Link className={classes.textWhite} to="#">
                  Stories
                </Link>
                <br />
                <Link className={classes.textWhite} to="#">
                  Contact
                </Link>
              </section>
            </Grid>
            <Grid item lg={4}>
              <Box textAlign="center" mb={5}>
                <img src={logo} alt="Shohola" style={{ maxHeight: 150 }} />
              </Box>
              <Box textAlign="center">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    className={classes.socialIcon}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    src={twitter}
                    alt="Twitter"
                    className={classes.socialIcon}
                  />
                </a>
                <a
                  title="instagram"
                  href="https://www.instagram.com/camp_shohola/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    className={classes.socialIcon}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img src={vimeo} alt="Vimeo" className={classes.socialIcon} />
                </a>
              </Box>
            </Grid>
          </Grid>
          <Box color="white">
            © 2019 Shohola Scholarship // All Rights Reserved.
          </Box>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
