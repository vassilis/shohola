import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from 'gatsby';
import { useCountUp } from 'react-countup';
import VizSensor from 'react-visibility-sensor';
import { HTMLContent } from './Content';

const useStyles = makeStyles(theme => ({
  media: {
    height: 400,
    position: 'relative',
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    fontWeight: 'bold',
    color: theme.palette.common.white,
  },
  count: {
    position: 'relative',
    marginBottom: 15,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: 50,
      height: 7,
      backgroundColor: 'gold',
      bottom: 0,
      left: '50%',
      marginLeft: -25,
    },
  },
}));

function Give() {
  const { countUp: countUp1, start: start1, reset: reset1 } = useCountUp({
    end: 300,
    prefix: '$',
    suffix: 'K',
    separator: ',',
  });
  const { countUp: countUp2, start: start2, reset: reset2 } = useCountUp({
    end: 79,
  });
  const { countUp: countUp3, start: start3, reset: reset3 } = useCountUp({
    end: 5,
  });
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { templateKey: { eq: "give" } }) {
        id
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }
  `);
  const { markdownRemark: page } = data;
  const classes = useStyles();

  function startCounters(isVisible) {
    console.log(isVisible);
    reset1();
    reset2();
    reset3();
    start1();
    start2();
    start3();
  }

  return (
    <VizSensor
      partialVisibility
      onChange={isVisible => startCounters(isVisible)}
    >
      <Container>
        <Box bgcolor="white" borderRadius={5} my={5} p={2}>
          <Card className={classes.card} elevation={0}>
            <CardMedia
              className={classes.media}
              image={page.frontmatter.image.childImageSharp.fluid.src}
              title={page.frontmatter.title}
            >
              <Box p={5}>
                <Grid container spacing={10}>
                  <Grid item lg={4}>
                    <Box textAlign="center" color="white">
                      <Box
                        fontSize="4rem"
                        fontWeight="bold"
                        className={classes.count}
                      >
                        {countUp1}
                      </Box>
                      <Box fontSize="1.5rem">Raised</Box>
                    </Box>
                  </Grid>
                  <Grid item lg={4}>
                    <Box textAlign="center" color="white">
                      <Box
                        fontSize="4rem"
                        fontWeight="bold"
                        className={classes.count}
                      >
                        {countUp2}
                      </Box>
                      <Box fontSize="1.5rem">Camper Experiences</Box>
                    </Box>
                  </Grid>
                  <Grid item lg={4}>
                    <Box textAlign="center" color="white">
                      <Box
                        fontSize="4rem"
                        fontWeight="bold"
                        className={classes.count}
                      >
                        {countUp3}
                      </Box>
                      <Box fontSize="1.5rem">Camper Experiences</Box>
                      <Box fontSize="1.5rem">2019 Goal</Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Typography
                className={classes.title}
                gutterBottom
                variant="h5"
                component="h2"
              >
                {page.frontmatter.title}
              </Typography>
            </CardMedia>
            <CardContent>
              <Typography variant="body2" component="div">
                <HTMLContent content={page.html} />
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </VizSensor>
  );
}

Give.defaultProps = {
  data: {},
};

Give.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Give;
