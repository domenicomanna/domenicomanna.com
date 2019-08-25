import React from 'react';
import styles from './tag.module.css';

const tagTypes = {
  project: styles.project,
  blogPost: styles.blogPost
}

const Tag = ({children, tagType}) => {
  return (  
    <li className = {tagType}>
      {children}
    </li>
  );
}
 
export {Tag, tagTypes};