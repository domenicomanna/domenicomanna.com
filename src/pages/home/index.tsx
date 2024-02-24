import Summary from './summary/summary';
import SEO from '../../components/seo';
import projects from '../../constants/projects';
import ProjectList from './projectList/projectList';

const Home = () => (
  <>
    <SEO title="Home" />
    <Summary />
    <ProjectList projects={projects} />
  </>
);

export default Home;
