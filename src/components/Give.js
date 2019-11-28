import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from 'gatsby';
import { HTMLContent } from './Content';

const useStyles = makeStyles(theme => ({
  media: {
    height: 300,
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

function Give() {
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
  return (
    <Container>
      <Box bgcolor="white" borderRadius={5} my={5} p={2}>
        <Card className={classes.card} elevation={0}>
          <CardMedia
            className={classes.media}
            image={page.frontmatter.image.childImageSharp.fluid.src}
            title={page.frontmatter.title}
          >
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
