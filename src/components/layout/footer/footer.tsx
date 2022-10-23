import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialNetworks, email, SocialNetwork } from '../../../constants/socialNetworks';
import Container from '../../ui/container/container';
import * as styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <div className={styles.footer}>
          <span className={styles.copyright}>&copy; {currentYear} Domenico Manna</span>
          <ul className={styles.footerLinks}>
            <li className={styles.linkItem}>
              <a className={styles.link} href={`mailto: ${email.address}`}>
                <FontAwesomeIcon icon={email.icon} />
              </a>
            </li>
            {transformSocialNetworks(socialNetworks)}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

const transformSocialNetworks = (socialNetworks: SocialNetwork[]) => {
  return socialNetworks.map((socialNetwork, index) => (
    <li className={styles.linkItem} key={index}>
      <a className={styles.link} href={socialNetwork.url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={socialNetwork.icon} />
      </a>
    </li>
  ));
};

// const createLink = (socialNetwork) => {
//   if (socialNetwork.network.toLowerCase().includes("email")) {
//     return (
//       <a className={styles.link} href={`mailto: ${socialNetwork.url}`}>
//         <FontAwesomeIcon icon={socialNetwork.icon} />
//       </a>
//     );
//   }

//   return (
//     <a className={styles.link} href={socialNetwork.url} target="_blank" rel="noopener noreferrer">
//       <FontAwesomeIcon icon={socialNetwork.icon} />
//     </a>
//   );
// }
