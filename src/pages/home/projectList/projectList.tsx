import { FunctionComponent } from 'react';
import { Project } from '../../../constants/projects';
import * as styles from './projectList.module.css';
import ProjectListItem from './projectListItem/projectListItem';

type Props = {
  projects: Project[];
};

export const projectsSectionId = 'projects';

const ProjectList: FunctionComponent<Props> = ({ projects }) => {
  return (
    <section id={projectsSectionId}>
      <ul className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectListItem key={index} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
