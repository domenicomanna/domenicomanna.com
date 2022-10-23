import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import PageTitle from '../../components/ui/pageTitle/pageTitle';
import Image from '../../components/ui/image';
import * as styles from './about.module.css';

const About = () => {
  return (
    <Layout>
      <section className={styles.aboutContent}>
        <SEO title="About" />
        <PageTitle>About</PageTitle>
        <p>
          Hi, my name is Domenico Manna. I work as a software developer at Foyer Inc, and studied computer science at
          the University of Bridgeport.
        </p>
        <p>
          I created this website because I want to share my experiences and discuss solutions to technical problems that
          I&apos;ve faced. In doing so, I hope to reinforce concepts for myself and help other developers.
        </p>
        <div className={styles.imageWrapper}>
          <Image fileName="me.jpg" />
        </div>
      </section>
    </Layout>
  );
};

export default About;
