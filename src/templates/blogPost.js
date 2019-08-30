import React from 'react';
import SEO from '../components/seo';
import PageTitle from '../components/pageTitle/pageTitle';
import Layout from '../components/layout/layout';
import styles from './templateStyles/blogPost.module.css';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { title } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} />
      <div className = {styles.postWrapper}>
        <PageTitle>{title}</PageTitle>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}

export default BlogPost;

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
