import React, { FunctionComponent, ReactNode } from "react"
import * as styles from "./wrapper.module.css"

type Props = {
  children: ReactNode
}

const Wrapper: FunctionComponent<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper
