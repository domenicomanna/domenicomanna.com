import React from 'react';
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from './hero.module.css'
import { Button, buttonTypes } from '../button/button';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.name}>
        Hi, I'm Domenico
      </h1>
      <p className={styles.description}>
        I study computer science and currently work as a C# developer.
        I enjoy web development and like to write about programming.
      </p>
      <div className={styles.buttonWrapper}>
        <Link to = "projects" smooth = {true} offset = {-120} >
          <Button type={buttonTypes.primary}>
            Checkout my projects
           <FontAwesomeIcon className={styles.icon} icon={faArrowDown} />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;