import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import PageTitle from '../components/pageTitle/pageTitle';
import BlogPostHighlightList from '../components/blogPostHighlightList/blogPostHighlightList';

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <PageTitle>Blog</PageTitle>
      <BlogPostHighlightList postEdges= {data.allMarkdownRemark.edges}/>
    </Layout>
  );
}

export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 140)
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
          }
          fields{
            slug
          }
        }
      }
    }
  }
`