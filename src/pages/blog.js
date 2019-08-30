import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import PageTitle from '../components/pageTitle/pageTitle';
import BlogPostHighlight from '../components/blogPostHighlight/blogPostHighlight';
import styles from './pageStyles/blog.module.css';

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <PageTitle>Blog</PageTitle>
      <ul className={styles.posts}>
        {transformPosts(data.allMarkdownRemark.edges)}
      </ul>
    </Layout>
  );
}

const transformPosts = postEdges => (
  postEdges.map(({ node }) => {
    const { title, date } = node.frontmatter;
    return (
      <BlogPostHighlight key={node.id}
        title={title}
        excerpt={node.excerpt}
        date={date}
        image="gats"
        slug={node.fields.slug}
      />
    )
  })
)



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