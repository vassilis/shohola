import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import gallery from '../img/gallery.jpg';
import Slider from './Slider';

const useStyles = makeStyles(theme => ({
  gallery: {
    height: 550,
    backgroundImage: `url(${gallery})`,
    backgroundSize: 'cover',
  },
  galleryTitle: {
    color: theme.palette.common.white,
  },
  link: {
    color: theme.palette.common.white,
    display: 'inline-block',
    marginTop: theme.spacing(3),
    fontSize: '1.2rem',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  img: {
    maxWidth: '100%',
    borderRadius: 5,
  },
}));

export default function Gallery() {
  const classes = useStyles();
  return (
    <Box className={classes.gallery} my={5}>
      <Container fixed>
        <Box p={5}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.galleryTitle}
          >
            <strong>Shohola Photo Archive</strong>
          </Typography>
          <Box mt={3} maxWidth={550} textAlign="center">
            <Slider />
            <a
              href="https://photos.app.goo.gl/qYYsuLJ2Dz3HUnYd9"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <strong>Open Archive</strong>
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
