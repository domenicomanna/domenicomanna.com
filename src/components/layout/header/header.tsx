import React, { FunctionComponent } from "react"
import { Link } from "gatsby"
import Wrapper from "../../wrapper/wrapper"
import Backdrop from "../../backdrop/backdrop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faBars } from "@fortawesome/free-solid-svg-icons"
import * as styles from "./header.module.css"

const pageLinks = [
  { to: "/", text: "Home" },
  { to: "/blog/", text: "Blog" },
  // { to: "/about/", text: "About" },
  { to: "/contact/", text: "Contact" },
]

type Props = {
  hamburgerLinksShouldShow: boolean
  toggleHamburgerLinks: () => void
}

const Header: FunctionComponent<Props> = ({
  hamburgerLinksShouldShow,
  toggleHamburgerLinks,
}) => {
  let classesForListOfLinks = [styles.listOfLinks]
  if (hamburgerLinksShouldShow)
    classesForListOfLinks.push(styles.hamburgerLinks)

  return (
    <>
      <header className={styles.header}>
        <Wrapper>
          <nav className={styles.nav}>
            <Link className={`${styles.link} ${styles.nameLink}`} to="/">
              <h2 className={styles.name}>Domenico Manna</h2>
            </Link>
            <ul className={classesForListOfLinks.join(" ")}>
              {transformPageLinks()}
            </ul>
            <FontAwesomeIcon
              className={styles.hamburger}
              icon={faBars}
              onClick={toggleHamburgerLinks}
            />
          </nav>
        </Wrapper>
      </header>
      <Backdrop
        backdropShouldShow={hamburgerLinksShouldShow}
        toggleBackdrop={toggleHamburgerLinks}
      />
    </>
  )
}

export default Header

const transformPageLinks = () => {
  return pageLinks.map((pageLink, index) => (
    <li key={index}>
      <Link
        className={styles.link}
        activeClassName={styles.active}
        to={pageLink.to}
      >
        {pageLink.text}
      </Link>
    </li>
  ))
}
