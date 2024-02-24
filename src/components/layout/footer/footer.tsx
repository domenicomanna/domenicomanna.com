import { socialNetworks, email } from '../../../constants/socialNetworks';
import Container from '../../ui/container/container';
import * as styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const EmailIcon = email.Icon;
  return (
    <footer>
      <Container>
        <div className={styles.footer}>
          <span className={styles.copyright}>&copy; {currentYear} Domenico Manna</span>
          <ul className={styles.footerLinks}>
            <li className={styles.linkItem}>
              <a className={styles.link} href={`mailto: ${email.address}`}>
                <EmailIcon />
              </a>
            </li>
            {socialNetworks.map((socialNetwork, index) => {
              const Icon = socialNetwork.Icon;
              return (
                <li className={styles.linkItem} key={index}>
                  <a className={styles.link} href={socialNetwork.url} target="_blank" rel="noopener noreferrer">
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
