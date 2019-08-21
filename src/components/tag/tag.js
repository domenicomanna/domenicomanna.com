import React from 'react';
import styles from './tag.module.css';
const Tag = ({content}) => {
  return (  
    <li className = {styles.tag}>
      {content}
    </li>
  );
}
 
export default Tag;