import React from 'react';
import styles from './projectList.module.css';
import Project from '../project/project';

const ProjectList = ({projects}) => {
  console.log(projects);
  return (  
    <ul className = {styles.projects}>
      {transformProjects(projects)}
    </ul>
  );
}

export default ProjectList

const transformProjects = (projects) => {
  return projects.map((project, index) => (
    <Project key = {index} 
    imageFileName = {project.imageFileName}
    title = {project.title}
    description = {project.description}
    technologiesUsed = {project.technologiesUsed}
    websiteLink = {project.websiteLink}
    repositoryLink = {project.repositoryLink}/>
  ));
}