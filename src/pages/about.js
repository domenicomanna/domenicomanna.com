import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import PageTitle from '../components/pageTitle/pageTitle';
import Image from '../components/image/image';
import styles from './pageStyles/about.module.css';

const About = () => {
  return (
    <Layout>
      <section>
        <SEO title="About" />
        <PageTitle>About</PageTitle>
        <p>
          My name is Domenico Manna, and I study computer science at the University of Bridgeport. In addition to attending school full time, I work part time as a c# developer, where I write applications to automate repetitive tasks. When I'm not studying for school or working, I spend my time making projects and learning about web development.
        </p>
        <p>
          I created this website because I want to share my experiences and discuss solutions to technical problems that I've faced. In doing so, I hope to help other developers.
        </p>
        <div className={styles.imageWrapper}>
          <Image fileName="me_good.jpg" />
        </div>
      </section>
    </Layout>
  );
}

export default About;