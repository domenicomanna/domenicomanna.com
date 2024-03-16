import type { FC } from 'react';
import styles from './blogPostHighlightList.module.css';
import BlogPostHighlightListItem from './blogPostHighlightListItem/blogPostHighlightListItem';
import type { BlogPostHighlight } from './blogPostHighlightListItem/blogPostHighlightListItem';

type Props = {
  blogPostHighlights: BlogPostHighlight[];
};

const BlogPostHighlightList: FC<Props> = ({ blogPostHighlights }) => {
  return (
    <div className={styles.posts}>
      {blogPostHighlights.map((highlight) => (
        <BlogPostHighlightListItem key={highlight.slug} blogPostHighlight={highlight} />
      ))}
    </div>
  );
};

export default BlogPostHighlightList;
