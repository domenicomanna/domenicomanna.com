import React, { FunctionComponent } from "react"
import kebabCase from "lodash/kebabCase"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import PageTitle from "../components/pageTitle/pageTitle"
import * as styles from "./pageStyles/tags.module.css"

type TagGroupItem = {
  totalCount: number
  fieldValue: string | null
}

type Props = {
  data: Queries.TagsQuery
}

const Tags: FunctionComponent<Props> = ({ data }) => {
  const tagGroupItems = data.allMarkdownRemark.group as TagGroupItem[]

  // sort tags in descending order by the total amount of times a tag appears in a post
  // so, 4, 3, 2, 1, for example.
  tagGroupItems.sort((tag1, tag2) =>
    tag1.totalCount < tag2.totalCount ? 1 : -1
  )
  return (
    <Layout>
      <SEO title="Tags" />
      <PageTitle>Tags</PageTitle>
      <h3 style={{ textAlign: "center" }}>
        {" "}
        <Link style={{ textDecoration: "none" }} to="/blog/">
          Back to Blog
        </Link>
      </h3>
      <ul className={styles.tags}>{transformTagGroupItems(tagGroupItems)}</ul>
    </Layout>
  )
}

const transformTagGroupItems = (tagGroupItems: TagGroupItem[]) =>
  tagGroupItems.map(tag => (
    <li key={tag.fieldValue}>
      <Link to={`/tags/${kebabCase(tag.fieldValue ?? "")}`}>
        {tag.fieldValue}
      </Link>
      &nbsp; {/* space character */}
      &#40;{tag.totalCount}&#41; {/* Left parenthesis and right parenthesis */}
    </li>
  ))

export default Tags

export const allTagsQuery = graphql`
  query Tags {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
