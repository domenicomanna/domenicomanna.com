import { FunctionComponent, ReactNode } from 'react';
import Image from '../../../../components/ui/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import * as styles from './projectListItem.module.css';
import { Project } from '../../../../constants/projects';
import { IconType } from 'react-icons';

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
        <ul className={styles.projectTechnologies}>
          {technologiesUsed.map((technology) => (
            <li key={technology} className={styles.projectTechnology}>
              {technology}
            </li>
          ))}
        </ul>
        <div className={styles.viewProjectLinkGroup}>
          {createLinkForProject(websiteLink, 'View Site', FaExternalLinkAlt)}
          {createLinkForProject(repositoryLink, 'View Source', FaGithub)}
        </div>
      </div>
    </li>
  );
};

const createLinkForProject = (link: string, children: ReactNode, Icon: IconType) => (
  <a className={`${styles.link} ${styles.viewProjectLink}`} target="_blank" href={link} rel="noopener noreferrer">
    {children}
    <Icon className={styles.viewProjectIcon} />
  </a>
);

export default ProjectListItem;
