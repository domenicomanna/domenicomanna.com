import React from 'react';
import Image from '../image/image';
import TagList from '../tagList/tagList';
import styles from './project.module.css';
import Button from '../button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Project = ({ imageFileName, title, description, technologiesUsed, websiteLink, repositoryLink }) => {
  console.log(websiteLink, repositoryLink);

  return (
    <li className={styles.project}>
      <div className={styles.imageWrapper}>
        <Image fileName={imageFileName} />
      </div>
      <div className={styles.projectContent}>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>
        <TagList tags={technologiesUsed} />
        <div className={styles.buttonGroup}>
          <Button>
            <a className={styles.link} target="_blank" href={websiteLink} >
              View Site
              <FontAwesomeIcon icon={faAngleDoubleRight} className={styles.icon} />
            </a>
          </Button>
          <Button>
            <a className={styles.link} target="_blanks" href={repositoryLink}>
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