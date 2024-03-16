import type { FC } from 'react';
import styles from './blogPostHighlightListItem.module.css';
export type BlogPostHighlight = {
  title: string;
  date: Date;
  slug: string;
};

type Props = {
  blogPostHighlight: BlogPostHighlight;
};

const BlogPostHighlightListItem: FC<Props> = ({ blogPostHighlight }) => {
  const { title, date, slug } = blogPostHighlight;

  return (
    <a href={slug} className={styles.postHighlightLink}>
      <div className={styles.postContent}>
        <h2 className={styles.postTitle}>{title}</h2>
        <span className={styles.postDate}>
          {date.toLocaleDateString(undefined, {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
            timeZone: 'utc',
          })}
        </span>
      </div>
    </a>
  );
};

export default BlogPostHighlightListItem;
