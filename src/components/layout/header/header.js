import React from 'react';
import { Link } from 'gatsby';
import Wrapper from '../../wrapper/wrapper';
import Backdrop from '../../backdrop/backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './header.module.css';
import pdf from '../../../assets/test.pdf';

const pageLinks = [
  { to: "/", text: "Home" },
  { to: "/blog/", text: "Blog" },
  { to: "/about/", text: "About" },
  { to: "/contact/", text: "Contact" },
]

const Header = (props) => {
  const { hamburgerLinksShouldShow, toggleHamburgerLinks } = props;

  let classesForListOfLinks = [styles.listOfLinks];
  if (hamburgerLinksShouldShow) classesForListOfLinks.push(styles.hamburgerLinks);

  return (
    <>
      <header className={styles.header}>
        <Wrapper>
          <nav className={styles.nav}>
            <Link className={`${styles.link} ${styles.nameLink}`} to="/">
              <h2 className={styles.name}>Domenico Manna</h2>
            </Link>
            <ul className={classesForListOfLinks.join(' ')}>
              {transformPageLinks()}
              {/* <li>
                <a className={`${styles.link} ${styles.resumeLink}`} href={pdf} download="resume.pdf"> 
                  Resume
                  <FontAwesomeIcon className={styles.download} icon={faDownload} />
                </a>
              </li> */}
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

const transformPageLinks = () => {
  return pageLinks.map((pageLink, index) => (
    <li key = {index}>
      <Link className={styles.link} activeClassName = {styles.active} to={pageLink.to}>
        {pageLink.text}
      </Link>
    </li>
  ))
}