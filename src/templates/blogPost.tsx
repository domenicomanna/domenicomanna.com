import { FC } from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import * as styles from './templateStyles/blogPost/blogPost.module.css';
import './templateStyles/blogPost/codeTitle.css';
import { routes } from '../constants/routes';

type Props = {
  data: Queries.BlogPostQuery;
};

const BlogPost: FC<Props> = ({ data }) => {
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
            <ul className={styles.postTags}>
              {tags.map((tag) => (
                <li key={tag}>
                  <Link to={`${routes.tags}/${kebabCase(tag ?? '')}`}> {tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.postMainContent} dangerouslySetInnerHTML={{ __html: post?.html ?? '' }} />
      </article>
    </Layout>
  );
};

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

export default BlogPost;
