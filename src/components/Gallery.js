import React from 'react';
import { Box, Container, Typography, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import gallery from '../img/gallery.jpg';
import Slider from './Slider';

const useStyles = makeStyles(theme => ({
  gallery: {
    height: 550,
    backgroundImage: `url(${gallery})`,
    backgroundSize: 'cover',
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: 900,
  },
  btn: {
    display: 'inline-block',
    marginTop: theme.spacing(3),
    fontWeight: 900,
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.text.primary,
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
    <Box id="photos" className={classes.gallery} my={5}>
      <Container fixed>
        <Box p={5}>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Shohola Photo Archive
          </Typography>
          <Box mt={3} maxWidth={550} textAlign="center">
            <Slider />
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              href="https://photos.app.goo.gl/qYYsuLJ2Dz3HUnYd9"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              className={classes.btn}
            >
              Open Archive
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
