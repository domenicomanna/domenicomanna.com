import React, { Component } from "react"
import PropTypes from "prop-types"
import Header from './header/header';
import Footer from './footer/footer';
import Wrapper from '../wrapper/wrapper'
import "./global.css"
import styles from './layout.module.css';
// ensures that the icon CSS is loaded immediately before attempting to render icons.
import '@fortawesome/fontawesome-svg-core/styles.css';


class Layout extends Component {

  state = {
    hamburgerLinksShouldShow: false
  }

  toggleHamburgerLinks = () => {
    this.setState(prevState => ({
      hamburgerLinksShouldShow: !prevState.hamburgerLinksShouldShow
    }))
  }

  render() {
    return (
      <div className={styles.site}>
        <Header toggleHamburgerLinks={this.toggleHamburgerLinks}
          hamburgerLinksShouldShow={this.state.hamburgerLinksShouldShow} />
        <main className={styles.mainContent}>
          <Wrapper> {this.props.children} </Wrapper>
        </main>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
