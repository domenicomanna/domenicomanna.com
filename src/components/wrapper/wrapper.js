import React from "react"
import * as styles from "./wrapper.module.css"

const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper
