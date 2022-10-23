import { FunctionComponent, ReactNode } from 'react';
import * as styles from './container.module.css';

type Props = {
  children: ReactNode;
};

const Container: FunctionComponent<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
