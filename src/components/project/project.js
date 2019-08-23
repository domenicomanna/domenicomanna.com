import React from 'react';
import Image from '../image/image';
import TagList from '../tagList/tagList';
import styles from './project.module.css';
import { Button, buttonTypes } from '../button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Project = ({ imageFileName, title, description, technologiesUsed, websiteLink, repositoryLink }) => {
  return (
    <li className={styles.project}>
      <div className={styles.imageWrapper}>
        <Image fileName={imageFileName} />
      </div>
      <div className={styles.projectContent}>
        <h2 className={styles.title}>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <TagList tags={technologiesUsed} />
        <div className={styles.buttonGroup}>
          <Button type = {buttonTypes.viewProject}>
            <a className={styles.link} target="_blank" href={websiteLink} rel="noopener noreferrer">
              View Site
              <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.icon} />
            </a>
          </Button>
          <Button type = {buttonTypes.viewProject}>
            <a className={styles.link} target="_blanks" href={repositoryLink} rel="noopener noreferrer">
              View Source
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default Project
  ;