/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {Component} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from './header/header';
import Wrapper from '../wrapper/wrapper'
import "./global.css"

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
      <>
        <Header toggleHamburgerLinks = {this.toggleHamburgerLinks} 
        hamburgerLinksShouldShow = {this.state.hamburgerLinksShouldShow}/>
        <main>
          <Wrapper> {this.props.children} </Wrapper>
        </main>
        {/* <Footer /> */}
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
