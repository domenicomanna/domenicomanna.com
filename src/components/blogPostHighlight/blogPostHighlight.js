import React from 'react';

import styles from './blogPostHighlight.module.css';
import { TagList, tagListTypes } from '../../components/tagList/tagList';
import { Tag, tagTypes } from '../tag/tag';
import Image from '../image/image';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

let tags1 = ['react', 'css'];

const BlogPostHighlight = ({ title, date, tags, description, image, slug }) => {

  return (
    <li className={styles.postHighlight}>
      <div className={styles.imageWrapper}>
        <Image fileName={image} />
      </div>
      <div className={styles.postContent}>
        <h2 className={styles.title}>How to Create a Responsive Navbar in React </h2>
        <span className={styles.date}>August 16th, 2019</span>
        <p>A short description about this post A short description about this post A short description about this post A short description about this post</p>
      </div>
    </li>

  );
}

export default BlogPostHighlight;
