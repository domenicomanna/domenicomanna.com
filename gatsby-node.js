const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === "MarkdownRemark"){
    const slug = createFilePath({node, getNode});
    console.log(slug);
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(allSlugs)
  
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blogPost.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

const allSlugs = `query {
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}`