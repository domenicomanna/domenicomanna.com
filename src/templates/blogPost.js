import React from 'react';
import SEO from '../components/seo';
import PageTitle from '../components/pageTitle/pageTitle';
import {Button, buttonTypes} from '../components/button/button';
import Layout from '../components/layout/layout';
import styles from './templateStyles/blogPost.module.css';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { title, date } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} />
      <article className={styles.post}>
        <h1 className={styles.postTitle}>{title}</h1>
        <div className={styles.postMetadata}>
          <span className={styles.postDate}>{date}</span>
          <ul className = {styles.postTags}>
            <Button type = {buttonTypes.primary}>React</Button>
            <Button type = {buttonTypes.primary}>React</Button>
            <Button type = {buttonTypes.primary}>React</Button>
          </ul>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
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
        date
      }
    }
  }
`
