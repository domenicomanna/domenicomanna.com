import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import SEO from '../components/seo';
import Comments from '../components/comments/comments';
import Layout from '../components/layout/layout';
import styles from './templateStyles/blogPost/blogPost.module.css';
import './templateStyles/blogPost/codeTitle.css';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { title, date, tags } = post.frontmatter;
  const tagsHeader = tags.length > 1 ? 'Tags:' : 'Tag:'

  return (
    <Layout>
      <SEO title={title} />
      <article className={styles.post}>
        <h1 className={styles.postTitle}>{title}</h1>
        <div className={styles.postMetadata}>
          <span className={styles.postDate}>{date}</span>
          <div className={styles.postTagsWrapper}>
            <span className={styles.postTagsHeader}>{tagsHeader}</span>
            <ul className={styles.postTags}>
              {getTags(tags)}
            </ul>
          </div>
        </div>
        <div className={styles.postMainContent} dangerouslySetInnerHTML={{ __html: post.html }} />
        <Comments />
      </article>
    </Layout>
  );
}

const getTags = tags => (
  tags.map(tag => (
    <li key={tag}>
      <Link to={`/tags/${kebabCase(tag)}`}> {tag}
      </Link>
    </li>
  ))
)

export default BlogPost;

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`
