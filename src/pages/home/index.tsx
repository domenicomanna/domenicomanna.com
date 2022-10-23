import Summary from './summary/summary';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import projects from '../../constants/projects';
import ProjectList from './projectList/projectList';

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <Summary />
    <ProjectList projects={projects} />
  </Layout>
);

export default Home;
