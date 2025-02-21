import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Header from "../common/header";
import Footer from "../common/footer";
import ProjectInnerPageBanner from "./project-inner-banner";
import ProjectsList from "./project-list";

import HomeReservation from "../home-component/home-reservation";

import projectsData from "./projectsData";

function ProjectInnerPage() {
  const { slug } = useParams(); // Get slug from URL
  const project = projectsData.find((p) => p.slug === slug); 

  // console.log(project);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <Fragment>
      <Header />
      <ProjectInnerPageBanner project={project}/> 
      <ProjectsList project={project}/>
      <HomeReservation project={project}/>
      <Footer />
    </Fragment>
  );
}

export default ProjectInnerPage;
