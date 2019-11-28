import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { Grid, Box } from '@material-ui/core';
import PreviewCompatibleImage from './PreviewCompatibleImage';

function PeopleGrid(props) {
  const { people, members } = props;
  return (
    <>
      {people && (
        <Grid container spacing={5}>
          {people.map(({ node: person }) => (
            <Grid item lg={3} key={person.id}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: person.frontmatter.avatar,
                  alt: `${person.frontmatter.name}`,
                }}
              />
              <Box textAlign="center" mt={2}>
                {person.frontmatter.email ? (
                  <a
                    href={`mailto:${person.frontmatter.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#000000de' }}
                  >
                    <strong>{person.frontmatter.name}</strong>
                  </a>
                ) : (
                  <strong>{person.frontmatter.name}</strong>
                )}
                <br />
                {person.frontmatter.role}
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
      {members && (
        <Box mt={5}>
          <strong>Additional Committee Members</strong>
          {members.map(({ node: member }) => (
            <Box>{member.frontmatter.name}</Box>
          ))}
        </Box>
      )}
    </>
  );
}

function People(props) {
  const { data } = props;
  const { edges: people } = data.allMarkdownRemark;
  const alumniPeople = people.filter(
    p =>
      p.node.frontmatter.org.includes('alumni') &&
      !p.node.frontmatter.additional,
  );
  const alumniMembers = people.filter(
    p =>
      p.node.frontmatter.org.includes('alumni') &&
      p.node.frontmatter.additional,
  );
  const sholarshipPeople = people.filter(
    p =>
      p.node.frontmatter.org.includes('scholarship') &&
      !p.node.frontmatter.additional,
  );
  const sholarshipMembers = people.filter(
    p =>
      p.node.frontmatter.org.includes('scholarship') &&
      p.node.frontmatter.additional,
  );
  return (
    <>
      <h2>Alumni Association</h2>
      <PeopleGrid people={alumniPeople} members={alumniMembers} />
      <Box mt={10}>
        <h2>Scholarship Foundation</h2>
        <PeopleGrid people={sholarshipPeople} members={sholarshipMembers} />
      </Box>
    </>
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
                org
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <People data={data} count={count} />}
  />
);
