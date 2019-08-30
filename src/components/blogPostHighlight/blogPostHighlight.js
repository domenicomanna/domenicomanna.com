import React from 'react';
import { navigate } from "gatsby"
import styles from './blogPostHighlight.module.css';
import Image from '../image/image';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const BlogPostHighlight = ({ title, date, excerpt, image, slug }) => {
  console.log(slug);
  
  return (
    <li className={styles.postHighlight} onClick = { () => { navigate(slug) } }>
      <div className={styles.imageWrapper}>
        <Image fileName={image} />
      </div>
      <div className={styles.postContent}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.date}>{date}</span>
        <p>{excerpt}</p>
      </div>
    </li>

  );
}

export default BlogPostHighlight;
