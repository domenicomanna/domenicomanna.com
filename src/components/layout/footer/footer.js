import React from 'react';
import socialMediaLinks from '../../../constants/socialMedia';
import styles from './footer.module.css';
import Wrapper from '../../wrapper/wrapper';
import socialMedia from '../../../constants/socialMedia';

const Footer = () => {
  console.log(socialMediaLinks);
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <footer className={styles.footer}>
        <span className={styles.copyright}>&copy; {currentYear} Domenico Manna</span>
        <ul className = {styles.footerLinks}>
          {transformSocialMediaLinks(socialMediaLinks)}
        </ul>
      </footer>
    </Wrapper>
  );
}

export default Footer;

const transformSocialMediaLinks = (socialMediaLinks) => {
  return socialMediaLinks.map((socialMedia, index) => {
    const trailingSlash = index === socialMediaLinks.length - 1 ? `` : `/`;
    console.log(trailingSlash);
    return (
      <li className = {styles.linkItem} key = {index}>
        <a className = {styles.link} href = {socialMedia.url} target = "_blank">{socialMedia.displayText}</a>
        <span>{trailingSlash}</span>
      </li>
    )
  })
}