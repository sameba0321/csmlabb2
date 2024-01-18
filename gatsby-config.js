/**
 * @type {import('gatsby').GatsbyConfig}
 *
 */
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      { endpoint: "/", name: "Home" },
      { endpoint: "/portpage", name: "Portfolio" },
      { endpoint: "/about", name: "About" },
      { endpoint: "/kontakt", name: "Contact" },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.ACCESS_TOKEN,
        spaceId: process.env.SPACE_ID,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
