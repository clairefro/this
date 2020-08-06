/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
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
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.GATSBY_CONTENTFUL_DELIVERY_KEY,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `to8vy027sqma`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.GATSBY_CONTENTFUL_PREVIEW_KEY,
        host: `preview.contentful.com`,
      },
    },
  ],
}
