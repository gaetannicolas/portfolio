module.exports = {
  siteMetadata: {
    title: `Gaétan NICOLAS`,
    tagline: `Developer Front-End`,
    description: `Gaetan NICOLAS - Portfolio - Developer Front-End - React, React Native, VueJS`,
    author: `@gaetannicolas`,
    socialLinks: {
      mail: 'gaetan@gaetannicolas.fr',
      github: 'https://github.com/gaetannicolas',
      linkedIn: 'https://linkedin.com/in/gaétan-nicolas-586711146',
    },
    copyrightTagline: 'Gaétan NICOLAS'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logosvg.png`, // This path is relative to the root of the site.
      },
    },
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Muli:400,600,800`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`fr`, `en`],
        defaultLanguage: `fr`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.tsx`),
      },
    },
  ],
};
