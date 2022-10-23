import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Hero from '../components/hero/hero';
import ProjectList from '../components/projectList/projectList';
import projects from '../constants/projects';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ProjectList projects={projects} />
  </Layout>
);

export default IndexPage;
