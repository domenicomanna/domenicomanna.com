const kebabCase = require("lodash/kebabCase");
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === "MarkdownRemark"){
    const slug = `/${kebabCase(node.frontmatter.title)}/`
      createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(allMarkdownRemarkQuery)
  createBlogPostPages(result.data.postsRemark.edges, createPage);
  createTagPages(result.data.tagsGroup.group, createPage);
}

const createBlogPostPages = (postRemarkEdges, createPage) => {
  postRemarkEdges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blogPost.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

const createTagPages = (tags, createPage) => {
  tags.forEach(tag => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: path.resolve(`./src/templates/tags.js`),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
const allMarkdownRemarkQuery = `query {
  postsRemark: allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
  tagsGroup: allMarkdownRemark(limit: 2000) {
    group(field: frontmatter___tags) {
      fieldValue
    }
  }
}`