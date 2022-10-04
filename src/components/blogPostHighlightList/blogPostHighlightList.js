import React from "react"
import styles from "./blogPostHighlightList.module.css"
import BlogPostHighlight from "../blogPostHighlight/blogPostHighlight"

const BlogPostHighlightList = ({ postEdges }) => {
  return <ul className={styles.posts}>{transformPosts(postEdges)}</ul>
}

const transformPosts = postEdges =>
  postEdges.map(({ node }) => {
    const { title, date, featuredImage } = node.frontmatter
    return (
      <BlogPostHighlight
        key={node.id}
        title={title}
        excerpt={node.excerpt}
        date={date}
        fluidImage={featuredImage.childImageSharp.fluid}
        slug={node.fields.slug}
      />
    )
  })

export default BlogPostHighlightList
