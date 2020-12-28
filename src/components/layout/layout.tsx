/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header/index';
import './normalize.css';
import './font.css';
import './layout.css';
import Contact from '../contact/contact';

const Layout: FunctionComponent<{children: React.ReactNode;}> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          tagline
          socialLinks {
            mail
            github
            linkedIn
          }
          copyrightTagline
        }
      }
    }
  `);

  return (
    <>
      <Header />
      <main id="content" className="content">
        {children}
        <Contact socialLinks={data.site.siteMetadata.socialLinks} copyrightTagline={data.site.siteMetadata.copyrightTagline}/>
      </main>

    </>
  );
};

export default Layout;
