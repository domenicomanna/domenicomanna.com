import React from 'react';
import styles from './pageTitle.module.css';
const pageTitle = ({children}) => {
  return (  
    <h1 className = {styles.title}>{children}</h1>
  );
}
 
export default pageTitle;