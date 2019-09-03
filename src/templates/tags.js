import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import BlogPostHighlightList from '../components/blogPostHighlightList/blogPostHighlightList'
import PageTitle from '../components/pageTitle/pageTitle';

const Tags = ({pageContext, data}) => {
  console.log(data);
  console.log(pageContext.tag);
  const {tag} = pageContext
  return (  
    <Layout>
      <SEO title = {`${tag} Articles`}/>
      <PageTitle>{tag}</PageTitle>
      <BlogPostHighlightList postEdges = {data.allMarkdownRemark.edges}/>
    </Layout>
  );
}
 
export default Tags;

export const allPostsWithSelectedTagQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`