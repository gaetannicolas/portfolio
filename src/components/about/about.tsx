import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FormattedMessage } from "gatsby-plugin-intl"

import './about.css';



// eslint-disable-next-line @typescript-eslint/ban-types
const About: FunctionComponent<{}> = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

   return (
    <section id="about" className="about section">
      <h2 className="section-title about__title"><FormattedMessage id="menu.about" /></h2>
      <div className="about__wrapper">
        <div>
          <p>
            <FormattedMessage id="about.intro" />
          </p>
          <p>
            <FormattedMessage id="about.education" />
          </p>
          <p>
            <FormattedMessage id="about.search" />
          </p>
        </div>
        <div>
          <div className="about__image-wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="image about__image" />
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default About;