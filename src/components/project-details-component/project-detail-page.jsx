import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Header from "../common/header";
import Footer from "../common/footer";
import ProjectDetailBanner from "./project-detail-banner";
import ProjectDetailSection from "./project-details-section";

import HomeReservation from "../home-component/home-reservation";

import projectsData from "./projectsData";

function ProjectDetailPage() {
  
  const { slug } = useParams(); // Get slug from URL
  const project = projectsData.find((p) => p.slug === slug); // Find project by slug

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <Fragment>
      <Header />
      <ProjectDetailBanner project={project} /> 
      <ProjectDetailSection  project={project}/>
      <HomeReservation  project={project} />
      <Footer />
    </Fragment>
  );
}

export default ProjectDetailPage;
