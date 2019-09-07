import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import BlogPostHighlightList from '../components/blogPostHighlightList/blogPostHighlightList'
import PageTitle from '../components/pageTitle/pageTitle';
import styles from './templateStyles/tags.module.css';

const Tags = ({pageContext, data}) => {
  const {tag} = pageContext
  return (  
    <Layout>
      <SEO title = {`${tag} Articles`}/>
      <PageTitle>{tag}</PageTitle>
      <h3 style = {{textAlign: "center"}}>
        <Link to="/tags/">
          Back to Tags
        </Link>
      </h3>
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
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`