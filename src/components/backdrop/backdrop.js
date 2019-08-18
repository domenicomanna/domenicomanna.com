import React from 'react';
import styles from './backdrop.module.css';

const Backdrop = (props) => {
  const {backdropShouldShow, toggleBackdrop} = props;

  const backdropClass = backdropShouldShow ? styles.backdrop : null;

  return (  
    <div onClick = {toggleBackdrop} className = {backdropClass}></div>
  );
}
 
export default Backdrop;