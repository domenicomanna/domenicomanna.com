import React from "react"
import * as styles from "./projectList.module.css"
import Project from "../project/project"

const ProjectList = ({ projects }) => {
  return (
    <section id="projects">
      <ul className={styles.projects}>{transformProjects(projects)}</ul>
    </section>
  )
}

export default ProjectList

const transformProjects = projects => {
  return projects.map((project, index) => (
    <Project
      key={index}
      imageFileName={project.imageFileName}
      title={project.title}
      description={project.description}
      technologiesUsed={project.technologiesUsed}
      websiteLink={project.websiteLink}
      repositoryLink={project.repositoryLink}
    />
  ))
}
