import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import gallery from '../img/gallery.jpg';

const useStyles = makeStyles(theme => ({
  gallery: {
    height: 500,
    backgroundImage: `url(${gallery})`,
    backgroundSize: 'cover',
  },
  galleryTitle: {
    color: theme.palette.common.white,
  },
  galleryLink: {
    color: theme.palette.common.white,
  },
}));

export default function Gallery() {
  const classes = useStyles();
  return (
    <Box className={classes.gallery} my={5}>
      <Container fixed>
        <Box py={5}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.galleryTitle}
          >
            Shohola Photo Archive
          </Typography>
          <Box>
            <a href="#" className={classes.galleryLink}>
              1950 - 1960
            </a>
            <br />
            <a href="#" className={classes.galleryLink}>
              1960 - 1970
            </a>
            <br />
            <a href="#" className={classes.galleryLink}>
              1970 - 1980
            </a>
            <br />
            <a href="#" className={classes.galleryLink}>
              1980 - 1990
            </a>
            <br />
            <a href="#" className={classes.galleryLink}>
              1990 - 2000
            </a>
            <br />
            <a href="#" className={classes.galleryLink}>
              2000 - 2010
            </a>
            <br />
            <a href="#" className={classes.galleryLink}>
              2010 - 2019
            </a>
            <br />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
