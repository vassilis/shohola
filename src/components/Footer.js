import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, Link as SimpleLink } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'gatsby';
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
        <Box px={4} py={10}>
          <Grid container spacing={5}>
            <Grid item lg={5}>
              <Link className={classes.link} to="#ways-to-give">
                Ways to Give
              </Link>
              <br />
              <Link className={classes.link} to="#photos">
                Shohola Photo Archive
              </Link>
              <br />
              <Link className={classes.link} to="#people-alumni">
                Alumni Association People
              </Link>
              <br />
              <Link className={classes.link} to="#people-scholarship">
                Scholarship Foundation People
              </Link>
              <br />
              <Link className={classes.link} to="#get-involved">
                Get Involved / Newsletter
              </Link>
              <br />
              <br />
              <SimpleLink
                className={classes.link}
                href="mailto:ShoholaAlumni@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EmailIcon className={classes.emailIcon} />
                Contact via Email
              </SimpleLink>
              <Box color="white" mt={5}>
                © 2019 Shohola Scholarship // All Rights Reserved.
              </Box>
            </Grid>
            <Grid item lg={5}>
              <section className="">
                <Box color="white" mb={2}>
                  <strong>Social Network</strong>
                </Box>
                <SimpleLink
                  href="https://www.instagram.com/camp_shohola/"
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Camp Shohola on Instagram
                </SimpleLink>
                <br />
                <SimpleLink
                  className={classes.link}
                  href="https://www.facebook.com/CampShohola/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Camp Shohola Facebook Page
                </SimpleLink>
                <br />
                <SimpleLink
                  className={classes.link}
                  href="https://www.facebook.com/groups/691446744261809/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Camp Shohola Alumni Facebook Group
                </SimpleLink>
                <br />
                <SimpleLink
                  className={classes.link}
                  href="https://www.linkedin.com/groups/8861885/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Camp Shohola Professional Network
                </SimpleLink>
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
