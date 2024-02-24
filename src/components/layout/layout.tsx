import { FunctionComponent, ReactNode, useState } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Container from '../ui/container/container';
import * as styles from './layout.module.css';

type Props = {
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  const [hamburgerLinksShouldShow, setHamburgerLinksShouldShow] = useState(false);

  return (
    <div className={styles.site}>
      <Header
        toggleHamburgerLinks={() => setHamburgerLinksShouldShow((currentValue) => !currentValue)}
        hamburgerLinksShouldShow={hamburgerLinksShouldShow}
      />
      <main className={styles.mainContent}>
        <Container> {children} </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
