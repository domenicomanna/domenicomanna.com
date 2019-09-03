import React from 'react';
import { navigate } from "gatsby"
import styles from './blogPostHighlight.module.css';
import Image from '../image/image';

const BlogPostHighlight = ({ title, date, excerpt, image, slug }) => {
  return (
    <li className={styles.postHighlight} onClick = { () => { navigate(slug) } }>
      <div className={styles.imageWrapper}>
        <Image fileName={image} />
      </div>
      <div className={styles.postContent}>
        <h2 className={styles.postTitle}>{title}</h2>
        <span className={styles.postDate}>{date}</span>
        {/* <p className = {styles.postExcerpt}>{excerpt}</p> */}
      </div>
    </li>

  );
}

export default BlogPostHighlight;
