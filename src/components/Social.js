import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Typography, Grid, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconFacebook from '../img/icon-facebook.svg';
import IconInstagram from '../img/icon-instagram.svg';
import IconLinkedin from '../img/icon-linkedin.svg';
import IconShohola from '../img/icon-shohola.svg';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: 900,
  },
  icon: {
    maxWidth: 100,
    marginRight: 20,
    marginLeft: 20,
  },
  link: {
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

function Social() {
  const classes = useStyles();
  return (
    <Container fixed>
      <Box id="get-involved" bgcolor="white" borderRadius={5} my={5} p={4}>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          Social Network
        </Typography>
        <Box mt={5}>
          <Grid container spacing={10}>
            <Grid item lg={6}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                mb={3}
              >
                <Link
                  className={classes.link}
                  href="https://www.shohola.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Camp Shohola Website
                </Link>
                <img
                  src={IconShohola}
                  alt="Camp Shohola"
                  className={classes.icon}
                />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                mb={3}
              >
                <Link
                  className={classes.link}
                  href="https://www.linkedin.com/groups/8861885/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Camp Shohola Professional Network
                </Link>
                <img
                  src={IconLinkedin}
                  alt="Linked In"
                  className={classes.icon}
                />
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box display="flex" alignItems="center" mb={3}>
                <img
                  src={IconFacebook}
                  alt="Facebook"
                  className={classes.icon}
                />
                <Box>
                  <Link
                    className={classes.link}
                    href="https://www.facebook.com/CampShohola/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Camp Shohola Facebook Page
                  </Link>
                  <br />
                  <Link
                    className={classes.link}
                    href="https://www.facebook.com/groups/691446744261809/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Camp Shohola Alumni Facebook Group
                  </Link>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" mb={3}>
                <img
                  src={IconInstagram}
                  alt="Instagram"
                  className={classes.icon}
                />
                <Link
                  href="https://www.instagram.com/camp_shohola/"
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Camp Shohola on Instagram
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Social;
