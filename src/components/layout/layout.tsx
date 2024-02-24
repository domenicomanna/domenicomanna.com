import { Component, ReactNode } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Container from '../ui/container/container';
import * as styles from './layout.module.css';

type State = {
  hamburgerLinksShouldShow: boolean;
};

type Props = {
  children: ReactNode;
};

class Layout extends Component<Props, State> {
  state: State = {
    hamburgerLinksShouldShow: false,
  };

  toggleHamburgerLinks = () => {
    this.setState((prevState) => ({
      hamburgerLinksShouldShow: !prevState.hamburgerLinksShouldShow,
    }));
  };

  render() {
    return (
      <div className={styles.site}>
        <Header
          toggleHamburgerLinks={this.toggleHamburgerLinks}
          hamburgerLinksShouldShow={this.state.hamburgerLinksShouldShow}
        />
        <main className={styles.mainContent}>
          <Container> {this.props.children} </Container>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
