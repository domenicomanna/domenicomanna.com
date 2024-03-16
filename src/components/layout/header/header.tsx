import { useState, type FC } from 'react';
import Container from '../../ui/container/container';
import Backdrop from '../../ui/backdrop/backdrop';
import { FaBars } from 'react-icons/fa';
import styles from './header.module.css';
import { routes } from '../../../constants/routes';

type Props = {
  currentPath: string;
  maxWidth?: string;
};

const Header: FC<Props> = ({ currentPath, maxWidth }) => {
  const [hamburgerLinksShouldShow, setHamburgerLinksShouldShow] = useState(false);

  const toggleHamburgerLinks = () => setHamburgerLinksShouldShow((currentValue) => !currentValue);

  const classesForListOfLinks = [styles.listOfLinks];
  if (hamburgerLinksShouldShow) classesForListOfLinks.push(styles.hamburgerLinks);

  const navLinks = [routes.home, routes.blog, routes.contact];

  return (
    <>
      <header className={styles.header}>
        <Container maxWidth={maxWidth}>
          <nav className={styles.nav}>
            <ul className={classesForListOfLinks.join(' ')}>
              {navLinks.map((link) => {
                const isActive = currentPath === link.to;
                const classNames = [styles.link, ...(isActive ? [styles.active] : [])];
                return (
                  <a key={link.to} className={classNames.join(' ')} href={link.to}>
                    {link.displayName}
                  </a>
                );
              })}
            </ul>
            <FaBars className={styles.hamburger} onClick={toggleHamburgerLinks} />
          </nav>
        </Container>
      </header>
      <Backdrop backdropShouldShow={hamburgerLinksShouldShow} toggleBackdrop={toggleHamburgerLinks} />
    </>
  );
};

export default Header;
