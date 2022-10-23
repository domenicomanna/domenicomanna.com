import { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import BlogPostHighlightList from '../components/blogPostHighlightList/blogPostHighlightList';
import PageTitle from '../components/ui/pageTitle/pageTitle';
import { FluidObject } from 'gatsby-image';
import { BlogPostHighlight } from '../components/blogPostHighlight/blogPostHighlightListItem';

export type SelectedTagArticlesPageContext = {
  tag: string;
};

type Props = {
  pageContext: SelectedTagArticlesPageContext;
  data: Queries.SelectedTagArticlesQuery;
};

const SelectedTagArticles: FunctionComponent<Props> = ({ pageContext, data }) => {
  const { tag } = pageContext;
  return (
    <Layout>
      <SEO title={`${tag} Articles`} />
      <PageTitle>{tag}</PageTitle>
      <h3 style={{ textAlign: 'center' }}>
        <Link style={{ textDecoration: 'none' }} to="/tags/">
          Back to Tags
        </Link>
      </h3>
      <BlogPostHighlightList
        blogPostHighlights={data.allMarkdownRemark.edges.map(
          (x): BlogPostHighlight => {
            const node = x.node;
            const fluidImage = node.frontmatter?.featuredImage
              ? (node.frontmatter.featuredImage.childImageSharp?.fluid as FluidObject)
              : null;
            return {
              id: node.id,
              title: node.frontmatter?.title ?? '',
              excerpt: '',
              date: node.frontmatter?.date ?? '',
              slug: node.fields?.slug ?? '',
              fluidImage,
            };
          }
        )}
      />
    </Layout>
  );
};

export default SelectedTagArticles;

export const allPostsWithSelectedTagQuery = graphql`
  query SelectedTagArticles($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
