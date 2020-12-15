import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import PostsList from '../components/posts-list';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Projects from '../components/project/projects';
import Contact from '../components/contact/contact';

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
