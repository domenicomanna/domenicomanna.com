import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialNetworks from '../../../constants/socialNetworks';
import styles from './footer.module.css';
import Wrapper from '../../wrapper/wrapper';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <footer className={styles.footer}>
        <span className={styles.copyright}>&copy; {currentYear} Domenico Manna</span>
        <ul className={styles.footerLinks}>
          {transformSocialNetworks(socialNetworks)}
        </ul>
      </footer>
    </Wrapper>
  );
}

export default Footer;

const transformSocialNetworks = (socialNetworks) => {
  return socialNetworks.map((socialNetwork, index) => (
    <li className={styles.linkItem} key={index}>
      {createLink(socialNetwork)}
    </li>
  ));
}

const createLink = (socialNetwork) => {
  if (socialNetwork.identifier.toLowerCase().includes("email")) {
    return;
    // return (
    //   <a className={styles.link} href={`mailto: ${socialNetwork.url}`}>
    //     <FontAwesomeIcon icon={socialNetwork.icon} />
    //   </a>
    // );
  }

  return (
    <a className={styles.link} href={socialNetwork.url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={socialNetwork.icon} />
    </a>
  );
}