import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: 900,
  },
}));

function Newsletter() {
  const classes = useStyles();
  return (
    <Box id="get-involved" bgcolor="white" borderRadius={5} my={5} p={4}>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        Subscribe to the Newsletter and Get Involved
      </Typography>
      <Box mt={5} maxWidth={600} mx="auto">
        <iframe
          title="Get Involved"
          src="https://myshohola.dm.networkforgood.com/forms/31493?iframe=1"
          width="100%"
          height="800"
          frameBorder="0"
        />
      </Box>
    </Box>
  );
}

export default Newsletter;
