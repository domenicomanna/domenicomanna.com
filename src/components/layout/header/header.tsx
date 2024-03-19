import { useState, type FC } from 'react';
import Container from '../../ui/container/container';
import Backdrop from '../../ui/backdrop/backdrop';
import { FaBars } from 'react-icons/fa';
import styles from './header.module.css';
import { routes } from '../../../constants/routes';
import ThemeToggle from './themeToggle/themeToggle';

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
          <div className={styles.wrapper}>
            <div className={styles.empty}></div> {/* empty div used to center the nav links when the screen is small */}
            <nav className={styles.nav}>
              <ul className={classesForListOfLinks.join(' ')}>
                {navLinks.map((link) => {
                  const isActive = currentPath === link.to;
                  const classNames = [styles.link, ...(isActive ? [styles.active] : [])];
                  return (
                    <li key={link.to}>
                      <a className={classNames.join(' ')} href={link.to}>
                        {link.displayName}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className={styles.actionButtons}>
              <ThemeToggle />
              <FaBars className={styles.hamburger} onClick={toggleHamburgerLinks} />
            </div>
          </div>
        </Container>
      </header>
      <Backdrop backdropShouldShow={hamburgerLinksShouldShow} toggleBackdrop={toggleHamburgerLinks} />
    </>
  );
};

export default Header;
