import { Component, ReactNode } from 'react';
// ensures that the icon CSS is loaded immediately before attempting to render icons.
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from './header/header';
import Footer from './footer/footer';
import Wrapper from '../ui/wrapper/wrapper';
import './global.css';
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
    this.setState(prevState => ({
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
          <Wrapper> {this.props.children} </Wrapper>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
