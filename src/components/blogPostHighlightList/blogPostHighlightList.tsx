import { FunctionComponent } from 'react';
import * as styles from './blogPostHighlightList.module.css';
import BlogPostHighlightListItem from './blogPostHighlightListItem/blogPostHighlightListItem';
import { BlogPostHighlight } from './blogPostHighlightListItem/blogPostHighlightListItem';

type Props = {
  blogPostHighlights: BlogPostHighlight[];
};

const BlogPostHighlightList: FunctionComponent<Props> = ({ blogPostHighlights }) => {
  return (
    <div className={styles.posts}>
      {blogPostHighlights.map(highlight => (
        <BlogPostHighlightListItem key={highlight.id} blogPostHighlight={highlight} />
      ))}
    </div>
  );
};

export default BlogPostHighlightList;
