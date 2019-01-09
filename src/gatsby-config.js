module.exports = {
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`
      }
    }
  ]
};
