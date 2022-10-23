import { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Container from '../../ui/container/container';
import Backdrop from '../../ui/backdrop/backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import * as styles from './header.module.css';
import { routes } from '../../../constants/routes';

type Props = {
  hamburgerLinksShouldShow: boolean;
  toggleHamburgerLinks: () => void;
};

const Header: FunctionComponent<Props> = ({ hamburgerLinksShouldShow, toggleHamburgerLinks }) => {
  const classesForListOfLinks = [styles.listOfLinks];
  if (hamburgerLinksShouldShow) classesForListOfLinks.push(styles.hamburgerLinks);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <nav className={styles.nav}>
            <Link className={`${styles.link} ${styles.nameLink}`} to={routes.home}>
              <h2 className={styles.name}>Domenico Manna</h2>
            </Link>
            <ul className={classesForListOfLinks.join(' ')}>
              <Link className={styles.link} activeClassName={styles.active} to={routes.home}>
                Home
              </Link>
              <Link className={styles.link} activeClassName={styles.active} to={routes.blog}>
                Blog
              </Link>
              <Link className={styles.link} activeClassName={styles.active} to={routes.contact}>
                Contact
              </Link>
            </ul>
            <FontAwesomeIcon className={styles.hamburger} icon={faBars} onClick={toggleHamburgerLinks} />
          </nav>
        </Container>
      </header>
      <Backdrop backdropShouldShow={hamburgerLinksShouldShow} toggleBackdrop={toggleHamburgerLinks} />
    </>
  );
};

export default Header;
