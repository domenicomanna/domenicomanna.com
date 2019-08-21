import React from 'react';
import styles from './tagList.module.css';
import Tag from '../tag/tag';

const TagList = ({tags}) => {
  let transformedTags = transformTags(tags);
  
  return (  
    <ul className = {styles.tags}>
      {transformedTags}
    </ul>
  );
}
 
export default TagList;

const transformTags = (tags) => {
  return tags.map((tag, index) => (
    <Tag key = {index} content = {tag}/>
  ));
}