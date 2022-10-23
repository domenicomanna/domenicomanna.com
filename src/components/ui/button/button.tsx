import { FunctionComponent, ReactNode } from 'react';
import * as styles from './button.module.css';

const buttonTypes = {
  primary: styles.primary,
};

type Props = {
  type: string;
  children: ReactNode;
};

const Button: FunctionComponent<Props> = ({ children, type }) => {
  return <button className={`${styles.button} ${type}`}>{children}</button>;
};

export { Button, buttonTypes };
