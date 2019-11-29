import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 800,
  },
  otherLink: {
    color: theme.palette.text.primary,
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  featuredimage,
  tags,
  title,
  helmet,
  otherPosts,
}) => {
  const PostContent = contentComponent || Content;
  const classes = useStyles();

  return (
    <Container fixed>
      <section className={classes.section}>
        {helmet || ''}
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
          {title}
        </h1>
        <p>{description}</p>
        <PreviewCompatibleImage
          imageStyle={{
            margin: '50px auto',
            borderRadius: 5,
            width: 500,
          }}
          imageInfo={{
            image: featuredimage,
            alt: `${title}`,
          }}
        />
        <PostContent content={content} />
        {tags && tags.length ? (
          <div style={{ marginTop: `4rem` }}>
            <h4>Tags</h4>
            <ul className="taglist">
              {tags.map(tag => (
                <li key={`${tag}tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <Box mt={10}>
          <strong>More Stories</strong>
          {otherPosts.map(p => (
            <Box>
              <Link className={classes.otherLink} to={p.node.fields.slug}>
                {p.node.frontmatter.title}
              </Link>
            </Box>
          ))}
        </Box>
      </section>
    </Container>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.object,
  otherPosts: PropTypes.arrayOf(PropTypes.object),
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post, allMarkdownRemark: otherPosts } = data;
  console.log(otherPosts);

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
        otherPosts={otherPosts.edges}
      />
    </Layout>
  );
};

BlogPost.defaultProps = {
  data: {},
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { templateKey: { eq: "blog-post" } }
        id: { ne: $id }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
