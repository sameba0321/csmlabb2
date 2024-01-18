const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulFullPost {
        nodes {
          id
        }
      }
    }
  `);

  result.data.allContentfulFullPost.nodes.forEach((node) => {
    createPage({
      path: `/post/${node.id}`,
      component: path.resolve("./src/templates/templateport.js"),
      context: {
        postId: node.id,
      },
    });
  });
};