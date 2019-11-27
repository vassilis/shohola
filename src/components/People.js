import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { Grid, Box } from '@material-ui/core';
import PreviewCompatibleImage from './PreviewCompatibleImage';

function People(props) {
  const { data } = props;
  const { edges: people } = data.allMarkdownRemark;

  return (
    <Grid container spacing={5}>
      {people &&
        people.map(({ node: person }) => (
          <Grid item lg={2} key={person.id}>
            <PreviewCompatibleImage
              imageInfo={{
                image: person.frontmatter.avatar,
                alt: `${person.frontmatter.name}`,
              }}
            />
            <Box textAlign="center" mt={2}>
              <strong>{person.frontmatter.name}</strong>
              <br />
              {person.frontmatter.role}
            </Box>
          </Grid>
        ))}
    </Grid>
  );
}

People.defaultProps = {
  data: [],
};

People.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query PeopleQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___pos] }
          filter: { frontmatter: { templateKey: { eq: "people" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                name
                role
                email
                avatar {
                  childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                pos
                additional
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <People data={data} count={count} />}
  />
);
