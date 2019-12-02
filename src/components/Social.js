import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Typography, Grid, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconFacebook from '../img/icon-facebook.svg';
import IconInstagram from '../img/icon-instagram.svg';
import IconLinkedin from '../img/icon-linkedin.svg';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: 900,
  },
  icon: {
    maxWidth: 100,
    marginRight: 20,
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
          <Grid container spacing={5}>
            <Grid item lg={4}>
              <Box display="flex" alignItems="center">
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
                    Shohola Facebook Page
                  </Link>
                  <br />
                  <Link
                    className={classes.link}
                    href="https://www.facebook.com/groups/691446744261809/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shohola Alumni Facebook Group
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4}>
              <Box display="flex" alignItems="center">
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
                  Shohola on Instagram
                </Link>
              </Box>
            </Grid>
            <Grid item lg={4}>
              <Box display="flex" alignItems="center">
                <img
                  src={IconLinkedin}
                  alt="Linked In"
                  className={classes.icon}
                />
                <Link
                  className={classes.link}
                  href="https://www.linkedin.com/groups/8861885/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shohola Professional Network
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
