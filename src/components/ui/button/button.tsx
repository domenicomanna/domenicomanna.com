import { type FC, type ReactNode } from 'react';
import styles from './button.module.css';

const buttonTypes: { [key: string]: string } = {
  primary: styles.primary ?? '',
};

type Props = {
  type: 'primary';
  children: ReactNode;
  id?: string;
  onClick?: () => void;
};

const Button: FC<Props> = ({ children, type, onClick, id }) => {
  return (
    <button id={id} className={`${styles.button} ${buttonTypes[type]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
