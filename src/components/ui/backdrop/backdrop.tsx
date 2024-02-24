import { FC } from 'react';
import * as styles from './backdrop.module.css';

type Props = {
  backdropShouldShow: boolean;
  toggleBackdrop: () => void;
};

const Backdrop: FC<Props> = ({ backdropShouldShow, toggleBackdrop }) => {
  const backdropClass = backdropShouldShow ? styles.backdrop : undefined;

  return <div onClick={toggleBackdrop} className={backdropClass}></div>;
};

export default Backdrop;
