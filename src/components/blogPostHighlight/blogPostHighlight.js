import React from "react"
import { navigate } from "gatsby"
import Img from "gatsby-image"
import styles from "./blogPostHighlight.module.css"

const BlogPostHighlight = ({ title, date, excerpt, fluidImage, slug }) => {
  return (
    <li
      className={styles.postHighlight}
      onClick={() => {
        navigate(slug)
      }}
    >
      <Img className={styles.featuredImage} fluid={fluidImage} />
      <div className={styles.postContent}>
        <h2 className={styles.postTitle}>{title}</h2>
        <span className={styles.postDate}>{date}</span>
      </div>
    </li>
  )
}

export default BlogPostHighlight
