import type { FC, ReactNode } from 'react';
import styles from './container.module.css';

type Props = {
  children: ReactNode;
  maxWidth?: string;
};

const Container: FC<Props> = ({ children, maxWidth }) => {
  return (
    <div
      className={styles.container}
      style={{
        maxWidth,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
