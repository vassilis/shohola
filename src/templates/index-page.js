import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
// import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import EventsRoll from '../components/EventsRoll';

export const IndexPageTemplate = ({
  image,
  profileImage,
  title,
  heading,
  profile,
  mission,
  camp,
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
          {heading}
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
        <div className="column is-8">
          <strong className="">{profile.title}</strong>
          <p className="">{profile.description}</p>
          <br />
          <strong className="">{mission.title}</strong>
          <p className="">{mission.description}</p>
          <br />
          <strong className="">{camp.title}</strong>
          <p className="">{camp.description}</p>
        </div>
        <div className="column is-4" style={{ textAlign: 'right' }}>
          <img
            src={
              profileImage.childImageSharp
                ? profileImage.childImageSharp.fluid.src
                : profileImage
            }
            alt={title}
          />
        </div>
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
          <EventsRoll />
          <div className="column is-12 has-text-centered">
            <Link className="button" to="/blog">
              More Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  profileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  mission: PropTypes.string.isRequired,
  camp: PropTypes.string.isRequired,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        profileImage={frontmatter.profileImage}
        title={frontmatter.title}
        heading={frontmatter.heading}
        profile={frontmatter.profile}
        mission={frontmatter.mission}
        camp={frontmatter.camp}
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
        profileImage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        profile {
          title
          description
        }
        mission {
          title
          description
        }
        camp {
          title
          description
        }
      }
    }
  }
`;
