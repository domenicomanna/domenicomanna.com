import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import * as styles from './hero.module.css';
import { Button, buttonTypes } from '../button/button';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.name}>Hi, I&apos;m Domenico</h1>
      <p className={styles.description}>
        I work as a software developer, and studied computer science at the University of Bridgeport.
      </p>
      <div className={styles.buttonWrapper}>
        <Link to="projects" smooth={true} offset={-115}>
          <Button type={buttonTypes.primary}>
            Checkout my projects
            <FontAwesomeIcon className={styles.icon} icon={faArrowDown} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
