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
    backgroundColor: theme.palette.secondary.main,
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
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
        <Box px={5} py={10}>
          <Grid container spacing={5}>
            <Grid item lg={10}>
              <section className="">
                <Box color="white" mb={2}>
                  <strong>Social Network</strong>
                </Box>
                <Link
                  to="https://www.instagram.com/camp_shohola/"
                  className={classes.link}
                  target="_blank"
                >
                  Camp Shohola on Instagram
                </Link>
                <br />
                <Link
                  className={classes.link}
                  to="https://www.facebook.com/CampShohola/"
                  target="_blank"
                >
                  Camp Shohola Facebook Page
                </Link>
                <br />
                <Link
                  className={classes.link}
                  to="https://www.facebook.com/groups/691446744261809/"
                  target="_blank"
                >
                  Camp Shohola Alumni Facebook Group
                </Link>
                <br />
                <Link
                  className={classes.link}
                  to="https://www.linkedin.com/groups/8861885/"
                  target="_blank"
                >
                  Camp Shohola Professional Network
                </Link>
                <br />
                <br />
                <Link
                  className={classes.link}
                  to="mailto:ShoholaAlumni@gmail.com"
                  target="_blank"
                >
                  Contact via Email
                </Link>
                <Box color="white" mt={5}>
                  © 2019 Shohola Scholarship // All Rights Reserved.
                </Box>
              </section>
            </Grid>
            <Grid item lg={2}>
              <Box textAlign="right">
                <img src={logo} alt="Shohola" style={{ maxHeight: 180 }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
