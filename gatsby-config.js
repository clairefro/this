/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

module.exports = {
  siteMetadata: {
    title: `this`,
    author: {
      name: `Claire Froelich`,
    },
    description: `Contemplating the 'this' in this life, inspired by math, coding and science`,
    siteUrl: `https://www.clairefroelichdev.com/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `to8vy027sqma`,
        accessToken: process.env.GATSBY_CONTENTFUL_DELIVERY_KEY,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `to8vy027sqma`,
        accessToken: process.env.GATSBY_CONTENTFUL_PREVIEW_KEY,
        host: `preview.contentful.com`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
}
