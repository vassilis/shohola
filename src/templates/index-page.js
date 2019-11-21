import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '200px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            textShadow: '0 0 20px #000, 0 1px 1px #333',
          }}
        >
          {title}
        </h1>
        <a
          href="https://donatenow.networkforgood.org/shoholascholarship"
          target="_blank"
          rel="noopener noreferrer"
          className="button is-large btn-donate"
        >
          Donate Now
        </a>
      </div>
    </div>
    <div className="container" style={{ marginTop: 50 }}>
      <div className="columns">
        <div className="column">
          <strong className="">{mainpitch.title}</strong>
          <p className="">{mainpitch.description}</p>
        </div>
        <div className="column" />
      </div>
      <div className="columns" style={{ marginTop: 50, marginBottom: 100 }}>
        <div className="column is-6">
          <h3 className="">Latest stories</h3>
          <BlogRoll />
          <div className="column is-12 has-text-centered">
            <Link className="button" to="/blog">
              More Stories
            </Link>
          </div>
        </div>
        <div className="column is-6">
          <h3 className="">Events</h3>
          <BlogRoll />
          <div className="column is-12 has-text-centered">
            <Link className="button" to="/blog">
              Previous Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
