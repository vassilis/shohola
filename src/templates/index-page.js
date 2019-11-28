import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import {
  Grid,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import People from '../components/People';
import Gallery from '../components/Gallery';
import Intro from '../components/Intro';
import Give from '../components/Give';

const useStyles = makeStyles(theme => ({
  header: {
    height: 800,
    backgroundSize: 'cover',
    backgroundPosition: '50%',
  },
  heading: {
    fontSize: '4rem',
    color: 'white',
    textShadow: '0 0 20px #000, 0 1px 1px #333',
  },
}));

export function IndexPageTemplate(props) {
  const { image, profileImage, title, heading, profile, mission, camp } = props;
  // console.log(props);
  const classes = useStyles();
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={classes.header}
        style={{
          backgroundImage: `url(${
            image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <Container fixed>
          <div
            style={{
              display: 'flex',
              lineHeight: '1',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <h1 className={classes.heading}>{heading}</h1>
            <Button
              component={Link}
              to="/donate"
              variant="contained"
              color="primary"
              size="large"
            >
              Donate Now
            </Button>
          </div>
        </Container>
      </Box>
      <Intro profile={profile} mission={mission} camp={camp} />
      <Give />
      <Gallery />
      <Container fixed>
        <Box bgcolor="white" borderRadius={5} my={5} p={5}>
          <People />
        </Box>
        <Box bgcolor="white" borderRadius={5} my={5}>
          <iframe
            title="Register to our Newsletter"
            src="https://382c74b4.sibforms.com/serve/MUIEAOUiU7hIuySp5vq2Id2nfH-Pbt_V38X1F2ZxBuMnd3owz25JLJWEslauVYBXIKUAbmHOsz7qPnCnXj6HDN9E-1tbdlTDkeBu9Y-Km-kAxf9Uc1FkMkrmep1skvYHfTHJExG6MD79zD-FxZiSsZfCYc3X0TteK0lFxEL1x1QrnYiwGuTBvIM4gfN1r8fc_pChIgBSkmKw13Yp"
            width="100%"
            height="800"
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '100%',
            }}
          />
        </Box>
      </Container>
      {/* <div className="column is-6">
          <iframe
            title="facebook page"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCampShohola%2F&amp;tabs=timeline&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=true&amp;show_facepile=false&amp;appId=179369728884107&amp;width=800&amp;height=800"
            width="100%"
            height="800"
            scrolling="auto"
            allowFullScreen
            allowTransparency="true"
            allow="encrypted-media"
            style={{
              display: 'block',
              width: '100%',
              height: 800,
            }}
          />
        </div> */}
    </>
  );
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  profileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  mission: PropTypes.object.isRequired,
  camp: PropTypes.object.isRequired,
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
