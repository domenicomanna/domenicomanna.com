import { GatsbyNode, Actions, CreatePagesArgs } from 'gatsby';
import _ from 'lodash';
import path from 'path';
import { SelectedTagArticlesPageContext } from './src/templates/selectedTagArticles';

type MarkdownContentQuery = {
  postsRemark: Queries.MarkdownRemarkConnection;
  tagsGroup: Queries.MarkdownRemarkGroupConnection;
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const frontMatter = node.frontmatter as Queries.MarkdownRemarkFrontmatter;
    const slug = `/${_.kebabCase(frontMatter.title ?? '')}/`;
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

export const createPages: GatsbyNode['createPages'] = async (createPagesArgs: CreatePagesArgs) => {
  const markdownContent = await getMarkdownContent(createPagesArgs);
  if (!markdownContent) return;
  const blogPostSlugs = markdownContent.postsRemark.edges.map((x) => x.node?.fields?.slug ?? '');
  const tagSlugs = markdownContent.tagsGroup.group.map((x) => x.fieldValue ?? '');
  createBlogPostPages(blogPostSlugs, createPagesArgs.actions);
  createSelectedTagArticlePages(tagSlugs, createPagesArgs.actions);
};

const getMarkdownContent = async (createPagesArgs: CreatePagesArgs): Promise<MarkdownContentQuery | undefined> => {
  const { graphql } = createPagesArgs;

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
  }`;
  const result = await graphql<MarkdownContentQuery>(allMarkdownRemarkQuery);
  return result.data;
};

const createBlogPostPages = (blogPostSlugs: string[], actions: Actions) => {
  const { createPage } = actions;
  for (const slug of blogPostSlugs) {
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/blogPost.tsx`),
      context: {
        slug: slug,
      },
    });
  }
};

const createSelectedTagArticlePages = (tagSlugs: string[], actions: Actions) => {
  const { createPage } = actions;

  for (const slug of tagSlugs) {
    createPage<SelectedTagArticlesPageContext>({
      path: `/tags/${_.kebabCase(slug)}/`,
      component: path.resolve(`./src/templates/selectedTagArticles.tsx`),
      context: {
        tag: slug,
      },
    });
  }
};

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({ actions }) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {
      // allows jsx to be used without importing react
      reactRuntime: 'automatic',
    },
  });
};
