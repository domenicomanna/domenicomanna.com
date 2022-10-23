import { FunctionComponent, ReactNode } from 'react';
import Image from '../image/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import * as styles from './projectListItem.module.css';
import { Project } from '../../constants/projects';

type Props = {
  project: Project;
};

const ProjectListItem: FunctionComponent<Props> = ({ project }) => {
  const { imageFileName, title, description, technologiesUsed, websiteLink, repositoryLink } = project;

  return (
    <li className={styles.project}>
      <div className={styles.imageWrapper}>
        <Image fileName={imageFileName} />
      </div>
      <div className={styles.projectContent}>
        <h2 className={styles.projectTitle}>{title}</h2>
        <p className={styles.projectDescription} dangerouslySetInnerHTML={{ __html: description }} />
        <ul className={styles.projectTechnologies}>{transformTechnologies(technologiesUsed)}</ul>
        <div className={styles.viewProjectLinkGroup}>
          {createLinkForProject(websiteLink, 'View Site', faExternalLinkAlt)}
          {createLinkForProject(repositoryLink, 'View Source', faGithub)}
        </div>
      </div>
    </li>
  );
};

const transformTechnologies = (technologies: string[]) =>
  technologies.map(technology => (
    <li key={technology} className={styles.projectTechnology}>
      {technology}
    </li>
  ));

const createLinkForProject = (link: string, children: ReactNode, icon: IconDefinition) => (
  <a className={`${styles.link} ${styles.viewProjectLink}`} target="_blank" href={link} rel="noopener noreferrer">
    {children}
    <FontAwesomeIcon icon={icon} className={styles.viewProjectIcon} />
  </a>
);

export default ProjectListItem;
