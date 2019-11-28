import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({}));

function Give(props) {
  const { data } = props;
  const classes = useStyles();
  return (
    <Container>
      <Box bgcolor="white" borderRadius={5} my={5} p={5}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          {data.title}
        </Typography>
        <br />
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      </Box>
    </Container>
  );
}

Give.defaultProps = {
  data: {},
};

Give.propTypes = {
  data: PropTypes.object,
};

export default Give;
