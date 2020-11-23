/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faFacebook,
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube
);

import Header from '../header/index';
import './normalize.css';
import './font.css';
import './layout.css';
import Footer from '../footer';

const Layout: FunctionComponent<{children: React.ReactNode;}> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          tagline
          socialLinks {
            github
            facebook
            linkedIn
            twitter
            youTube
            instagram
          }
          copyrightTagline
        }
      }
    }
  `);

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteTagline={data.site.siteMetadata.tagline}
        socialLinks={data.site.siteMetadata.socialLinks}
      />
      <main id="content" className="content">{children}</main>
      <Footer copyrightTagline={data.site.siteMetadata.copyrightTagline}/>
    </>
  );
};

export default Layout;
