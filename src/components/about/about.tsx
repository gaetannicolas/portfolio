import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
      <h2 className="section-title about__title">Infos</h2>
      <div className="about__wrapper">
        <div>
          <p>
            Moi, c’est Gaétan. Je suis avant tout curieux, j’aime comprendre et crée des choses qui vivent sur Internet que ce soit des sites, des applications ou tout ce qui se trouve autour.
          </p>
          <p>
            J&apos;ai obtenu un Mastère Développeur Web à l&apos;ECV Digitale à Bordeaux en alternance chez Appstud où j&apos;étais développeur front web et mobile pendant 2 ans.
          </p>
          <p>Je suis, à l&apos;heure actuelle, à la recherche d&apos;un emploi, respectant l’humain et la planète, en France et même en Europe en tant que développeur front-end web et mobile.</p>
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