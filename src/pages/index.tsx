import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Projects from '../components/project/projects';

const getProjects = graphql`
  {
    allMdx(sort: { fields: frontmatter___title, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            author
            authorLink
            techno
            link
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/ban-types
const IndexPage: FunctionComponent<{}> = () => {
  const response = useStaticQuery(getProjects);
  const projects = response.allMdx.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <Projects projects={projects} />
    </Layout>
  );
};

export default IndexPage;
