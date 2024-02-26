import { FC } from 'react';
import { Link } from 'gatsby';
import * as styles from './blogPostHighlightListItem.module.css';

export type BlogPostHighlight = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

type Props = {
  blogPostHighlight: BlogPostHighlight;
};

const BlogPostHighlightListItem: FC<Props> = ({ blogPostHighlight }) => {
  const { title, date, slug } = blogPostHighlight;

  return (
    <Link to={slug} className={styles.postHighlightLink}>
      <div className={styles.postContent}>
        <h3 className={styles.postTitle}>{title}</h3>
        <span className={styles.postDate}>{date}</span>
      </div>
    </Link>
  );
};

export default BlogPostHighlightListItem;
