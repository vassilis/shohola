import React from 'react';
import PropTypes from 'prop-types';
import { Button, Box, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    position: 'relative',
    height: 800,
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    zIndex: 0,
  },
  btnDonate: {
    color: theme.palette.text.primary,
    fontWeight: 900,
    fontSize: '1.2rem',
    '&:hover': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  },
  footerTitle: {
    fontSize: '3rem',
    color: 'white',
    fontWeight: 900,
    lineHeight: 1.5,
  },
}));

export function HeaderBottom(props) {
  const { footerImage, footerTitle } = props;
  // console.log(props);
  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      className={classes.header}
      style={{
        backgroundImage: `url(${
          footerImage.childImageSharp
            ? footerImage.childImageSharp.fluid.src
            : footerImage
        })`,
      }}
    >
      <Container fixed>
        <Box
          display="flex"
          lineHeight="1"
          justifyContent="space-around"
          alignItems="center"
          flexDirection="column"
        >
          <h2 className={classes.footerTitle}>{footerTitle}</h2>
          <Button
            component={Link}
            href="https://myshohola.networkforgood.com/"
            variant="contained"
            color="secondary"
            size="large"
            className={classes.btnDonate}
            target="_blank"
          >
            Donate Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

HeaderBottom.defaultProps = {};

HeaderBottom.propTypes = {};

export default HeaderBottom;
