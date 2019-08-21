import React from 'react';
import { Link } from 'gatsby';
import Wrapper from '../../wrapper/wrapper';
import Backdrop from '../../backdrop/backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './header.module.css';
import pdf from '../../../assets/test.pdf';

const Header = (props) => {
  const { hamburgerLinksShouldShow, toggleHamburgerLinks } = props;

  let classesForLinks = [styles.links];
  if (hamburgerLinksShouldShow) classesForLinks.push(styles.hamburgerLinks);

  return (
    <>
      <header className={styles.header}>
        <Wrapper>
          <nav className={styles.nav}>
            <Link className={`${styles.link} ${styles.titleLink}`} to="/">
              <h2 className={styles.title}>Domenico Manna</h2>
            </Link>
            <ul className={classesForLinks.join(' ')}>
              <li className={styles.linkItem}>
                <Link className={styles.link} activeClassName={styles.active} to="/"> Home </Link>
              </li>
              <li className={styles.linkItem}>
                <Link className={styles.link} activeClassName={styles.active} to="/blog"> Blog </Link>
              </li>
              <li className={styles.linkItem}>
                <Link className={styles.link} activeClassName={styles.active} to="/contact"> Contact </Link>
              </li>
              <li className={styles.linkItem}>
                <a className={styles.link} href={pdf} download="resume.pdf"> Resume
                  <FontAwesomeIcon className={styles.download} icon={faDownload} />
                </a>
              </li>
            </ul>
            <FontAwesomeIcon className={styles.hamburger} icon={faBars} onClick={toggleHamburgerLinks} />
          </nav>
        </Wrapper>
      </header>
      <Backdrop backdropShouldShow={hamburgerLinksShouldShow} toggleBackdrop={toggleHamburgerLinks} />
    </>
  );
}

export default Header;