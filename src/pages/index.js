import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ProjectList from '../components/projectList/projectList';
import projects from '../constants/projects';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I am Domenico.</h1>
    <h1>PROJECTS</h1>
    <ProjectList projects = {projects}/>
  </Layout>
)

export default IndexPage
