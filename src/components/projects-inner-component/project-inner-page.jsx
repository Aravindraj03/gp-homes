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
  const { slug } = useParams(); // ✅ Get slug from URL
  const [projectDetails, setProjectDetails] = useState(null);
  const service = new ServiceWrapper();
  const project = projectsData.find((p) => p.slug === slug); 

  useEffect(() => {
    service
      .callGet("list-of-apartments")
      .then((response) => {
        const found = response.data.Results.find((p) => p.slug === slug);
        setProjectDetails(found);
      })
      .catch((error) => {
        console.error("Banner fetch error", error);
      });
  }, [slug]); // ✅ Add `slug` to dependency array just in case route changes

  console.log(project, "project123----------------------");
    
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
              <Nav.Link as={Link} to="/home">
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
      <ProjectInnerPageBanner project={project}/> 
      <ProjectsList project={project} projectDetails={projectDetails}/>
      <HomeReservation project={project}/>
      <Footer />
    </Fragment>
  );
}

export default ProjectInnerPage;
