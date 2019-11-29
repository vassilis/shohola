import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Button, Typography } from '@material-ui/core';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 900,
  },
  articleTitle: {
    display: 'block',
    color: theme.palette.text.primary,
    fontWeight: 700,
    marginTop: theme.spacing(3),
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

function BlogRoll(props) {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  const classes = useStyles();

  return (
    <>
      <Box bgcolor="white" borderRadius={5} px={4} py={2} mb={2}>
        <Typography className={classes.title} variant="h5" component="h2">
          Latest Stories
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {posts &&
          posts.map(({ node: post }) => (
            <Grid item lg={4}>
              <Box mb={2} bgcolor="white" p={2} borderRadius={5} height="100%">
                <article
                  key={post.id}
                  className={`${classes.article} ${
                    post.frontmatter.featuredpost ? classes.featuredpost : ''
                  }`}
                >
                  {post.frontmatter.featuredimage ? (
                    <div className={classes.thumbnail}>
                      <PreviewCompatibleImage
                        imageStyle={{
                          marginRight: 20,
                          borderRadius: 5,
                          width: '100%',
                        }}
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <Box p={2}>
                    <p className={classes.postMeta}>
                      <Link
                        className={classes.articleTitle}
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                      <small>{post.frontmatter.date}</small>
                    </p>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Button
                        variant="outlined"
                        size="small"
                        component={Link}
                        className={classes.linkMore}
                        to={post.fields.slug}
                      >
                        Keep Reading
                      </Button>
                    </p>
                  </Box>
                </article>
              </Box>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

BlogRoll.defaultProps = {
  data: {},
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          limit: 3
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
