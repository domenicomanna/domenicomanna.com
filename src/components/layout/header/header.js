import React from 'react';
import Wrapper from '../../wrapper/wrapper';
import Backdrop from '../../backdrop/backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './header.module.css';

const Header = (props) => {

  const { hamburgerLinksShouldShow, toggleHamburgerLinks } = props;
  
  let classesForLinks = [styles.links];
  if (hamburgerLinksShouldShow) classesForLinks.push(styles.hamburgerLinks);

  return (
    <>
    <header className={styles.header}>
      <Wrapper>
        <nav className={styles.nav}>
          <h2 className={styles.title}>Domenico Manna</h2>
          <ul className={classesForLinks.join(' ')}>
            <li className={styles.linkItem}> <a href=""> Home </a> </li>
            <li className={styles.linkItem}> <a href=""> Blog </a> </li>
            <li className={styles.linkItem}> <a href=""> Contact </a> </li>
            <li className={styles.linkItem}>
              <a href=""> Resume <FontAwesomeIcon className={styles.download} icon={faDownload} /> </a>
            </li>
          </ul>
          <FontAwesomeIcon className={styles.hamburger} icon={faBars} onClick = {toggleHamburgerLinks}/>
        </nav>
      </Wrapper>
    </header>
    <Backdrop backdropShouldShow = {hamburgerLinksShouldShow} toggleBackdrop = {toggleHamburgerLinks}/>
    </>
  );
}

export default Header;