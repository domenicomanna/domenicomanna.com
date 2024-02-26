import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa6';
import * as styles from './summary.module.css';
import Button, { buttonTypes } from '../../../components/ui/button/button';
import { projectsSectionId } from '../projectList/projectList';

const Summary = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.name}>Hi, I&apos;m Domenico</h1>
      <p className={styles.description}>
        {"I'm a software developer, and studied computer science at the University of Bridgeport"}
      </p>
      <div className={styles.buttonWrapper}>
        <Link to={projectsSectionId} smooth={true} offset={-115}>
          <Button type={buttonTypes.primary}>
            Checkout my projects
            <FaArrowDown className={styles.icon} size={22} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Summary;
