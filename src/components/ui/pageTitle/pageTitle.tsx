import { FC, ReactNode } from 'react';
import * as styles from './pageTitle.module.css';

type Props = {
  children: ReactNode;
};

const PageTitle: FC<Props> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default PageTitle;
