import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

function EventsRoll(props) {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <>
      {posts &&
        posts.map(({ node: post }) => (
          <div
            style={{
              marginBottom: '2rem',
            }}
          >
            <article
              key={post.id}
              className={`blog-list-item tile is-child notification ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
            >
              <header>
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
                <p className="post-meta">
                  <Link
                    className="title has-text-dark is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <small className="is-block">{post.frontmatter.date}</small>
                </p>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button is-small" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </>
  );
}

EventsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query EventsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "event" } } }
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
                    fluid(maxWidth: 200, quality: 100) {
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
    render={(data, count) => <EventsRoll data={data} count={count} />}
  />
);
