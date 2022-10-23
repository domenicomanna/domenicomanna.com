import { FunctionComponent } from 'react';
import * as styles from './projectList.module.css';
import ProjectListItem from '../projectListItem/projectListItem';
import { Project } from '../../constants/projects';

type Props = {
  projects: Project[];
};

const ProjectList: FunctionComponent<Props> = ({ projects }) => {
  return (
    <section id="projects">
      <ul className={styles.projects}>{transformProjects(projects)}</ul>
    </section>
  );
};

export default ProjectList;

const transformProjects = (projects: Project[]) => {
  return projects.map((project, index) => <ProjectListItem key={index} project={project} />);
};
