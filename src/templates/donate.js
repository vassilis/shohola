import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const DonatePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <iframe
                title="Donate"
                src="https://donatenow.networkforgood.org/shoholascholarship"
                width="100%"
                height="1520"
                frameBorder="0"
                marginWidth="0"
                marginHeight="0"
                scrolling="no"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DonatePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const DonatePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <DonatePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

DonatePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DonatePage;

export const DonatePageQuery = graphql`
  query DonatePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
