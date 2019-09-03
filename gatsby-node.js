const kebabCase = require("lodash/kebabCase");
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === "MarkdownRemark"){
    let slug = createFilePath({node, getNode});
    slug = slug.replace("index.md", "");
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
  createAllBlogPages(result.data.postsRemark.edges, createPage);
  createAllTagPages(result.data.tagsGroup.group, createPage);
}

const createAllBlogPages = (postRemarkEdges, createPage) => {
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

const createAllTagPages = (tags, createPage) => {
  tags.forEach(tag => {
    let tagInKebabCase = kebabCase(tag.fieldValue)
    createPage({
      path: `/tags/${tagInKebabCase}/`,
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