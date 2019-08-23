import React from 'react';
import styles from './button.module.css';

const buttonTypes = {
  primary: styles.primary,
  viewProject: styles.viewProject
}

const Button = ({children, type}) => {
  return (  
    <button className = {`${styles.button} ${type}`}>{children}</button>
  );
}

 
export { Button, buttonTypes };