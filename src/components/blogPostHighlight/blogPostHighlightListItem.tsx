import React, { FunctionComponent } from 'react';
import { navigate } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import * as styles from './blogPostHighlightListItem.module.css';

export type BlogPostHighlight = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  fluidImage: FluidObject | null;
  slug: string;
};

type Props = {
  blogPostHighlight: BlogPostHighlight;
};

const BlogPostHighlightListItem: FunctionComponent<Props> = ({ blogPostHighlight }) => {
  const { title, date, excerpt, fluidImage, slug } = blogPostHighlight;

  return (
    <li
      className={styles.postHighlight}
      onClick={() => {
        navigate(slug);
      }}
    >
      {fluidImage && <Img className={styles.featuredImage} fluid={fluidImage} />}
      <div className={styles.postContent}>
        <h2 className={styles.postTitle}>{title}</h2>
        <span className={styles.postDate}>{date}</span>
      </div>
    </li>
  );
};

export default BlogPostHighlightListItem;
