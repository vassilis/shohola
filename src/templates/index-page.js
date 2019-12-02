import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import People from '../components/People';
import Gallery from '../components/Gallery';
import Intro from '../components/Intro';
import Give from '../components/Give';
import BlogRoll from '../components/BlogRoll';
import HeaderTop from '../components/HeaderTop';
import HeaderBottom from '../components/HeaderBottom';
import Newsletter from '../components/Newsletter';
import Social from '../components/Social';

export function IndexPageTemplate(props) {
  const {
    image,
    notice,
    shownotice,
    title,
    heading,
    footerTitle,
    footerImage,
    profile,
    mission,
    camp,
  } = props;
  // console.log(props);
  return (
    <>
      <HeaderTop
        image={image}
        notice={notice}
        shownotice={shownotice}
        heading={heading}
      />
      <Intro profile={profile} mission={mission} camp={camp} />
      <Give />
      <Social />
      <Gallery />
      <Container fixed>
        <BlogRoll />
        <People />
        <Newsletter props={props} />
      </Container>
      <HeaderBottom footerImage={footerImage} footerTitle={footerTitle} />
    </>
  );
}

IndexPageTemplate.defaultProps = {
  notice: null,
  shownotice: false,
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  notice: PropTypes.string,
  shownotice: PropTypes.bool,
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  mission: PropTypes.object.isRequired,
  camp: PropTypes.object.isRequired,
  footerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  footerTitle: PropTypes.string.isRequired,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        notice={frontmatter.notice}
        shownotice={frontmatter.shownotice}
        title={frontmatter.title}
        heading={frontmatter.heading}
        profile={frontmatter.profile}
        mission={frontmatter.mission}
        camp={frontmatter.camp}
        footerImage={frontmatter.footerImage}
        footerTitle={frontmatter.footerTitle}
      />
    </Layout>
  );
};

IndexPage.defaultProps = {
  data: {},
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
        notice
        shownotice
        heading
        profile {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        mission {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        camp {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        footerImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        footerTitle
      }
    }
  }
`;
