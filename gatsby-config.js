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
      {endpoint: "/", mame: "Home" },
      {endpoint: "/portpage", name:"portfolio"},
      {endpoint :"/about", name:"about" },
      {endpoint: "/kontakt", name:"contact"},
    ],
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      accessToken: process.env.ACCESS_TOKEN,
      spaceId: process.env.SPACE_ID,
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};