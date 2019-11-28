import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from 'gatsby';
import { HTMLContent } from './Content';

const useStyles = makeStyles(theme => ({}));

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
  console.log(data);
  const { markdownRemark: page } = data;
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
          {page.frontmatter.title}
        </Typography>
        <br />
        <HTMLContent content={page.html} />
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
