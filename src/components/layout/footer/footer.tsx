import type { FC } from 'react';
import { email } from '../../../constants/email';
import { socialNetworks } from '../../../constants/socialNetworks';
import Container from '../../ui/container/container';
import styles from './footer.module.css';

type Props = {
  maxWidth?: string;
};

const Footer: FC<Props> = ({ maxWidth }) => {
  const EmailIcon = email.Icon;
  return (
    <footer>
      <Container maxWidth={maxWidth}>
        <div className={styles.footer}>
          <ul className={styles.footerLinks}>
            {socialNetworks.map((socialNetwork, index) => {
              const Icon = socialNetwork.Icon;
              return (
                <li className={styles.linkItem} key={index}>
                  <a
                    className={styles.link}
                    href={socialNetwork.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Social media profile"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
            <li className={styles.linkItem}>
              <a className={styles.link} href={`mailto: ${email.address}`} aria-label="Email address">
                <EmailIcon />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
