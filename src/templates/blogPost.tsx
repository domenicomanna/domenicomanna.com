import { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import * as styles from './templateStyles/blogPost/blogPost.module.css';
import './templateStyles/blogPost/codeTitle.css';

type Props = {
  data: Queries.BlogPostQuery;
};

const BlogPost: FunctionComponent<Props> = ({ data }) => {
  const post = data.markdownRemark;
  const frontmatter = post?.frontmatter;
  const tags = frontmatter?.tags ?? [];
  const tagsHeader = (frontmatter?.tags ?? []).length > 1 ? 'Tags:' : 'Tag:';

  return (
    <Layout>
      <SEO title={frontmatter?.title ?? ''} />
      <article className={styles.post}>
        <h1 className={styles.postTitle}>{frontmatter?.title ?? ''}</h1>
        <div className={styles.postMetadata}>
          <span className={styles.postDate}>{frontmatter?.date ?? ''}</span>
          <div className={styles.postTagsWrapper}>
            <span className={styles.postTagsHeader}>{tagsHeader}</span>
            <ul className={styles.postTags}>{getTags(tags)}</ul>
          </div>
        </div>
        <div className={styles.postMainContent} dangerouslySetInnerHTML={{ __html: post?.html ?? '' }} />
      </article>
    </Layout>
  );
};

const getTags = (tags: readonly (string | null)[]) =>
  tags.map(tag => (
    <li key={tag}>
      <Link to={`/tags/${kebabCase(tag ?? '')}`}> {tag}</Link>
    </li>
  ));

export default BlogPost;

export const postQuery = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        tags
      }
    }
  }
`;
