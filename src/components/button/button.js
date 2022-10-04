import React from "react"
import * as styles from "./button.module.css"

const buttonTypes = {
  primary: styles.primary,
}

const Button = ({ children, type }) => {
  return <button className={`${styles.button} ${type}`}>{children}</button>
}

export { Button, buttonTypes }
