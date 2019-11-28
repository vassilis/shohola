import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import jumping from '../img/jumping.jpg';
import paulsesay from '../img/paulsesay.jpg';
import roadtrip from '../img/roadtrip.jpg';

const useStyles = makeStyles(theme => ({
  boxes: {
    marginTop: -150,
    backgroundColor: theme.palette.common.white,
  },
  card: {
    height: '100%',
  },
  media: {
    height: 200,
    position: 'relative',
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    fontWeight: 'bold',
    color: theme.palette.common.white,
  },
}));

function Intro(props) {
  const classes = useStyles();
  const { profile, mission, camp } = props;
  return (
    <Container fixed>
      <Box className={classes.boxes} p={2} borderRadius={5}>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <Card className={classes.card} elevation={0}>
              <CardMedia
                className={classes.media}
                image={jumping}
                title={profile.title}
              >
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {profile.title}
                </Typography>
              </CardMedia>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {profile.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4}>
            <Card className={classes.card} elevation={0}>
              <CardMedia
                className={classes.media}
                image={paulsesay}
                title={mission.title}
              >
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {mission.title}
                </Typography>
              </CardMedia>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {mission.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4}>
            <Card className={classes.card} elevation={0}>
              <CardMedia
                className={classes.media}
                image={roadtrip}
                title={camp.title}
              >
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {camp.title}
                </Typography>
              </CardMedia>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {camp.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

Intro.defaultProps = {
  profile: '',
  mission: '',
  camp: '',
};

Intro.propTypes = {
  profile: PropTypes.string,
  mission: PropTypes.string,
  camp: PropTypes.string,
};

export default Intro;
