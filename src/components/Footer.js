import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, Link } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import EmailIcon from '@material-ui/icons/Email';
import logo from '../img/logo.png';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: grey[900],
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.common.white,
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
  emailIcon: {
    marginRight: 5,
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
                  href="https://www.instagram.com/camp_shohola/"
                  className={classes.link}
                  target="_blank"
                >
                  Camp Shohola on Instagram
                </Link>
                <br />
                <Link
                  className={classes.link}
                  href="https://www.facebook.com/CampShohola/"
                  target="_blank"
                >
                  Camp Shohola Facebook Page
                </Link>
                <br />
                <Link
                  className={classes.link}
                  href="https://www.facebook.com/groups/691446744261809/"
                  target="_blank"
                >
                  Camp Shohola Alumni Facebook Group
                </Link>
                <br />
                <Link
                  className={classes.link}
                  href="https://www.linkedin.com/groups/8861885/"
                  target="_blank"
                >
                  Camp Shohola Professional Network
                </Link>
                <br />
                <br />
                <Link
                  className={classes.link}
                  href="mailto:ShoholaAlumni@gmail.com"
                  target="_blank"
                >
                  <EmailIcon className={classes.emailIcon} />
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
