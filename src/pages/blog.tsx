import { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import PageTitle from '../components/pageTitle/pageTitle';
import BlogPostHighlightList from '../components/blogPostHighlightList/blogPostHighlightList';
import { BlogPostHighlight } from '../components/blogPostHighlight/blogPostHighlightListItem';
import { FluidObject } from 'gatsby-image';

type Props = {
  data: Queries.BlogQuery;
};

const Blog: FunctionComponent<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <PageTitle>Blog</PageTitle>
      <h3 style={{ textAlign: 'center' }}>
        <Link style={{ textDecoration: 'none' }} to="/tags">
          Tags
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
              excerpt: node.excerpt ?? '',
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

export default Blog;

export const query = graphql`
  query Blog {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 140)
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
