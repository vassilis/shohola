import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Button, Box, Container, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import People from '../components/People';
import Gallery from '../components/Gallery';
import Intro from '../components/Intro';
import Give from '../components/Give';
import BlogRoll from '../components/BlogRoll';

const useStyles = makeStyles(theme => ({
  header: {
    position: 'relative',
    height: 800,
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    zIndex: 0,
  },
  heading: {
    fontSize: '4rem',
    color: 'white',
    fontWeight: 900,
  },
  btnDonate: {
    color: theme.palette.text.primary,
    fontWeight: 900,
    fontSize: '1.2rem',
    '&:hover': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  },
  title: {
    fontWeight: 900,
  },
  noticeBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    color: theme.palette.secondary.main,
    backgroundColor: `rgba(0, 0, 0, .5)`,
    textAlign: 'center',
  },
  footerTitle: {
    fontSize: '3rem',
    color: 'white',
    fontWeight: 900,
    lineHeight: 1.5,
  },
}));

export function IndexPageTemplate(props) {
  const {
    image,
    notice,
    shownotice,
    title,
    heading,
    profile,
    mission,
    camp,
    footerImage,
    footerTitle,
  } = props;
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
          <Box
            display="flex"
            lineHeight="1"
            justifyContent="space-around"
            alignItems="center"
            flexDirection="column"
            marginTop="-150px"
          >
            <h1 className={classes.heading}>{heading}</h1>
            <Button
              component={Link}
              href="https://myshohola.networkforgood.com/"
              variant="contained"
              color="secondary"
              size="large"
              className={classes.btnDonate}
              target="_blank"
            >
              Donate Now
            </Button>
            {shownotice && notice && (
              <Box p={1} className={classes.noticeBox}>
                <Typography className={classes.title} variant="h5">
                  {notice}
                </Typography>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
      <Intro profile={profile} mission={mission} camp={camp} />
      <Give />
      <Gallery />
      <Container fixed>
        <BlogRoll />
        <Box id="people">
          <People />
        </Box>
        <Box id="get-involved" bgcolor="white" borderRadius={5} my={5} p={4}>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Subscribe to the Newsletter and Get Involved
          </Typography>
          <Box mt={5} maxWidth={600} mx="auto">
            <iframe
              title="Get Involved"
              src="https://myshohola.dm.networkforgood.com/forms/31493?iframe=1"
              width="100%"
              height="800"
              frameBorder="0"
            />
          </Box>
        </Box>
      </Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={classes.header}
        style={{
          backgroundImage: `url(${
            footerImage.childImageSharp
              ? footerImage.childImageSharp.fluid.src
              : footerImage
          })`,
        }}
      >
        <Container fixed>
          <Box
            display="flex"
            lineHeight="1"
            justifyContent="space-around"
            alignItems="center"
            flexDirection="column"
          >
            <h2 className={classes.footerTitle}>{footerTitle}</h2>
            <Button
              component={Link}
              href="https://myshohola.networkforgood.com/"
              variant="contained"
              color="secondary"
              size="large"
              className={classes.btnDonate}
              target="_blank"
            >
              Donate Now
            </Button>
          </Box>
        </Container>
      </Box>
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
