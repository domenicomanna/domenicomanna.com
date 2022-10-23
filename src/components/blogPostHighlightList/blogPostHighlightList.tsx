import { FunctionComponent } from 'react';
import * as styles from './blogPostHighlightList.module.css';
import BlogPostHighlightListItem from '../blogPostHighlightListItem/blogPostHighlightListItem';
import { BlogPostHighlight } from '../blogPostHighlightListItem/blogPostHighlightListItem';

type Props = {
  blogPostHighlights: BlogPostHighlight[];
};

const BlogPostHighlightList: FunctionComponent<Props> = ({ blogPostHighlights }) => {
  return <ul className={styles.posts}>{transformPosts(blogPostHighlights)}</ul>;
};

const transformPosts = (blogPostHighlights: BlogPostHighlight[]) =>
  blogPostHighlights.map(highlight => {
    return <BlogPostHighlightListItem key={highlight.id} blogPostHighlight={highlight} />;
  });

export default BlogPostHighlightList;
