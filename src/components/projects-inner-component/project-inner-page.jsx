import React, { Fragment, useEffect, useState } from "react";
import { useParams,useLocation } from "react-router-dom";
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
  const location = useLocation();
  const category = location.pathname.includes("/plots") ? "plots" : "apartments";
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
      <ProjectInnerPageBanner project={project} />
      <ProjectsList project={project} projectDetails={projectDetails} />
      <HomeReservation project={project} />
      <Footer />

      <div
        className="position-fixed bottom-0 start-0 w-100 d-flex justify-content-around bg-white py-2 border-top d-block d-md-none"
        style={{ zIndex: 1050 }}
      >
        <Link
          to={`/${category}/enquiry-form?type=${
            category === "plots" ? "Plot" : "Apartment"
          }&project=${encodeURIComponent(project.name)}`}
          className="btn btn-primary w-50 me-1 text-white"
          style={{ backgroundColor: "rgb(40 167 69)" }}
        >
          Enquiry
        </Link>
        <a
          href="tel:+918098725026"
          className="btn btn-success w-50 ms-1 text-white"
        >
          Call
        </a>
      </div>

      {project?.name && (
        <Link
          to={`/${category}/enquiry-form?type=${
            category === "plots" ? "Plot" : "Apartment"
          }&project=${encodeURIComponent(project.name)}`}
          className="btn side-enquiry-button"
          style={{
            position: "fixed",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            backgroundColor: "rgb(242 101 34)",
            color: "#fff",
            padding: "12px 8px",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            zIndex: 1000,
            textDecoration: "none",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            fontWeight: "600",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgb(255 82 0)  ")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgb(242 101 34)")}
        >
          Enquire Now
        </Link>
      )}
    </Fragment>
  );
}

export default ProjectInnerPage;
