import React from 'react';
import PropTypes from 'prop-types';
import { Button, Box, Container, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    position: 'relative',
    height: 800,
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    zIndex: 0,
  },
  heading: {
    fontSize: '4rem',
    color: 'white',
    fontWeight: 900,
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
  title: {
    fontWeight: 900,
  },
  noticeBox: {
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    color: theme.palette.secondary.main,
    backgroundColor: `rgba(0, 0, 0, .5)`,
    textAlign: 'center',
    padding: theme.spacing(1),
    textDecoration: 'none',
  },
}));

export function HeaderTop(props) {
  const { image, notice, shownotice, heading } = props;
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
          image.childImageSharp ? image.childImageSharp.fluid.src : image
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
          marginTop="-150px"
        >
          <h1 className={classes.heading}>{heading}</h1>
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
          {shownotice && notice && (
            <a
              href="https://myshohola.networkforgood.com/"
              target="_blank"
              className={classes.noticeBox}
              rel="noopener noreferrer"
            >
              <Typography className={classes.title} variant="h5">
                {notice}
              </Typography>
            </a>
          )}
        </Box>
      </Container>
    </Box>
  );
}

HeaderTop.defaultProps = {};

HeaderTop.propTypes = {};

export default HeaderTop;
