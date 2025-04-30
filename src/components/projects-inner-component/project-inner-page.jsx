import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../common/header";
import Footer from "../common/footer";
import ProjectInnerPageBanner from "./project-inner-banner";
import ProjectsList from "./project-list";

import HomeReservation from "../home-component/home-reservation";

import projectsData from "./projectsData";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/gp-logo.png";
import { ServiceWrapper } from "../../service/ApiService";

function ProjectInnerPage() {
  const { slug } = useParams(); // ✅ correct
  const [projectDetails, setProjectDetails] = useState(null);
  const service = new ServiceWrapper();
  const project = projectsData.find((p) => p.slug === slug); 

  useEffect(() => {
    const fetchApartmentDetails = async () => {
      try {
        if (!slug) return;
  
        const response = await fetch("https://cms.gphomes.in/api/apartment-details", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "gp-web-token": "sdswkhsADWRjfh9Thwn8rn6Mybd",
          },
          body: JSON.stringify({ slug }),
        });
  
        const data = await response.json();
        console.log("API Response apartment-details:", data);
  
        setProjectDetails(data.Results); // Set state if response is successful
      } catch (error) {
        console.error("API call failed", error);
      }
    };
  
    fetchApartmentDetails();
  }, [slug]);
  console.log(projectDetails,"projectDetails apartment-details-----------------------------")
    
  if (!project) {
    return <h2>Project not found</h2>; 
  }

  return (
    <Fragment>
      {/* <Header /> */}
      <Navbar expand="lg" className="nav-scroll-1">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar" />

          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/apartments-chennai">
                Apartments
              </Nav.Link>
              <Nav.Link as={Link} to="/plots-chennai">
                Plots
              </Nav.Link>

              <NavDropdown
                title={
                  <>
                    Pages <i className="ti-angle-down"></i>
                  </>
                }
                id="pages-dropdown"
              >
                <NavDropdown.Item as={Link} to="/about-us">
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/joint-ventures">
                  Joint Ventures
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/gallery">
                  Gallery
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blogs">
                  Blogs
                </NavDropdown.Item>
                {/* <NavDropdown.Item as={Link} to="/tools">
                  Tools
                </NavDropdown.Item> */}
                <NavDropdown.Item as={Link} to="/testimonials">
                  Testimonials
                </NavDropdown.Item>
                {/* <NavDropdown.Item as={Link} to="/careers">
                  Careers
                </NavDropdown.Item> */}
                <NavDropdown.Item as={Link} to="/faq">
                  F.A.Qs
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/contact-us"> 
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ProjectInnerPageBanner project={project} projectDetails={projectDetails}/> 
      <ProjectsList project={project} projectDetails={projectDetails}/>
      <HomeReservation project={project}/>
      <Footer />
    </Fragment>
  );
}

export default ProjectInnerPage;
