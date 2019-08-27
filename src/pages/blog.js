import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import PageTitle from '../components/pageTitle/pageTitle';
import BlogPostHighlight from '../components/blogPostHighlight/blogPostHighlight';
import { tagTypes } from '../components/tag/tag';
import styles from '../pageStyles/blog.module.css';

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <PageTitle>Blog</PageTitle>
      <ul className={styles.posts}>
        <BlogPostHighlight image = "gats" />
        <BlogPostHighlight image = "gats"/>
        <BlogPostHighlight image = "gatsby-a"/>
      </ul>
    </Layout>
  );
}

export default Blog;