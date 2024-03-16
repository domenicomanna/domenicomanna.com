import type { FC, ReactNode } from 'react';
import styles from './buttonLink.module.css';

type Props = {
  href: string;
  children: ReactNode;
};

const ButtonLink: FC<Props> = ({ href, children }) => {
  return (
    <a target="_blank" href={href} rel="noopener noreferrer" className={styles.viewProjectLink}>
      {children}
    </a>
  );
};

export default ButtonLink;
