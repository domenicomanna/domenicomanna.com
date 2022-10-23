import { GatsbyNode, Actions } from "gatsby"
import _ from "lodash"
import path from "path"
import { SelectedTagArticlesPageContext } from "./src/templates/selectedTagArticles"

type Edge = {
  node: {
    fields: {
      slug: string
    }
  }
}

type Tag = {
  fieldValue: string
}

type MarkdownContentQuery = {
  postsRemark: {
    edges: Edge[]
  }
  tagsGroup: {
    group: Tag[]
  }
}

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const frontMatter = node.frontmatter as Queries.MarkdownRemarkFrontmatter
    const slug = `/${_.kebabCase(frontMatter.title ?? "")}/`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
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
  const result = await graphql(allMarkdownRemarkQuery)
  const data = result.data as MarkdownContentQuery
  createBlogPostPages(data.postsRemark.edges, actions)
  createSelectedTagArticlePages(data.tagsGroup.group, actions)
}

const createBlogPostPages = (postRemarkEdges: Edge[], actions: Actions) => {
  const { createPage } = actions
  postRemarkEdges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blogPost.tsx`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

const createSelectedTagArticlePages = (tags: Tag[], actions: Actions) => {
  const { createPage } = actions

  tags.forEach(tag => {
    createPage<SelectedTagArticlesPageContext>({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: path.resolve(`./src/templates/selectedTagArticles.tsx`),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
