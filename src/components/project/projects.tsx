import React, { FunctionComponent } from 'react';
import Image, { FluidObject } from 'gatsby-image';

import './projects.css';

interface ProjectsListsProps {
  projects: Array<{
    node: {
      excerpt: string;
      frontmatter: {
        title: string;
        author: string;
        authorLink: string;
        techno: string;
        link: string;
        image: { childImageSharp: { fluid: FluidObject } };
      };
    };
  }>;
}

const Projects: FunctionComponent<ProjectsListsProps> = ({ projects }) => (
  <section id="projects" className="projects section">
    <h2 className="section-title projects__title">Projects</h2>
    {projects.map(({ node }, index) => {
      const { title, author, authorLink, techno, link, image } = node.frontmatter

      return (
        <div className="project" key={index}>
          <div className="project__image">
            <a href={link} target='blank'>
              <Image className="image" fluid={image.childImageSharp.fluid} />
            </a>
          </div>
          <div className="project__content">
            <h3 className="project__title">
              <a className="project__titleLink" href={link} target='blank'>{title}</a>
            </h3>
            <p className="project__techno">{techno}</p>
            <p className="project__by">@ <a className="project__byLink" href={authorLink} target='blank'>{author}</a></p>
          </div>
          
        </div>
      );
    })}
  </section>
);

export default Projects;