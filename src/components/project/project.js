import React from 'react';
import Image from '../image/image';
import { Button, buttonTypes } from '../button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import styles from './project.module.css';

const Project = ({ imageFileName, title, description, technologiesUsed, websiteLink, repositoryLink }) => {
  return (
    <li className={styles.project}>
      <div className={styles.imageWrapper}>
        <Image fileName={imageFileName} />
      </div>
      <div className={styles.projectContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className = {styles.description} dangerouslySetInnerHTML={{ __html: description }} />
        <ul className={styles.technologies}>
          {transformTechnologies(technologiesUsed)}
        </ul>
        <div className={styles.buttonGroup}>
          {createButton(websiteLink, "View Site", faExternalLinkAlt)}
          {createButton(repositoryLink, "View Source", faGithub)}
        </div>
      </div>
    </li>
  );
}

const createButton = (link, children, icon) => (
  <Button type={buttonTypes.viewProject}>
    <a className={styles.link} target="_blank" href={link} rel="noopener noreferrer">
      {children}
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </a>
  </Button>
)

const transformTechnologies = (technologies) => (
  technologies.map(technology => (
    <li key = {technology} className = {styles.technology}>
      {technology}
    </li>
  ))
)


export default Project;