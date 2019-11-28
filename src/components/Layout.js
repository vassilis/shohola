import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './Footer';
import Navbar from './Navbar';
import useSiteMetadata from './SiteMetadata';
import theme from './theme';

const useStyles = makeStyles(() => ({
  main: {
    '& .MuiTypography-body2 a': {
      color: theme.palette.primary.main,
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
}));

const TemplateWrapper = ({ children }) => {
  const classes = useStyles();
  const { title, description } = useSiteMetadata();
  return (
    <>
      <CssBaseline />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${withPrefix('/')}img/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${withPrefix('/')}img/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${withPrefix('/')}img/favicon/favicon-16x16.png`}
        />
        <link
          rel="manifest"
          href={`${withPrefix('/')}img/favicon/site.webmanifest`}
        />
        <link
          rel="mask-icon"
          href={`${withPrefix(
            '/',
          )}img/favicon/safari-pinned-tab.svg" color="#005129`}
        />
        <link
          rel="shortcut icon"
          href={`${withPrefix('/')}img/favicon/favicon.ico`}
        />
        <meta name="apple-mobile-web-app-title" content="Shohola" />
        <meta name="application-name" content="Shohola" />
        <meta name="msapplication-TileColor" content="#005129" />
        <meta
          name="msapplication-config"
          content={`${withPrefix('/')}img/favicon/browserconfig.xml`}
        />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Navbar />
        <div className={classes.main}>{children}</div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default TemplateWrapper;
