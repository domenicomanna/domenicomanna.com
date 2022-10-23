import Hero from './hero/hero';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import projects from '../../constants/projects';
import ProjectList from './projectList/projectList';

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ProjectList projects={projects} />
  </Layout>
);

export default Home;
