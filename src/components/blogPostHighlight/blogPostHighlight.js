import React from 'react';
import styles from './blogPostHighlight.module.css';
import TagList from '../../components/tagList/tagList';
import {Tag, tagTypes} from '../tag/tag';

let tags1 = ['react', 'Javascript'];

const BlogPostHighlight = ({ title, date, tags, description, slug }) => {
  return (
    <li className={styles.postHighlight}>
      <h2 className={styles.title}>Creating a responsive navigation menu using react</h2>
      <div className={styles.metadata}>
        <span className = {styles.date}>August 16th, 2019</span>
        <Tag tagType = {tagTypes.blogPost}>React</Tag>
        <Tag tagType = {tagTypes.blogPost}>CSS3</Tag>
        <Tag tagType = {tagTypes.blogPost}>Javascript</Tag>
      </div>
      <p>A short description about this post A short description about this post</p>
    </li>
  );
}

export default BlogPostHighlight;