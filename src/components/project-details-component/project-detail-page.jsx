import React, { Fragment, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../common/header";
import Footer from "../common/footer";
import PlotsVideo from "./plots-video";
import ProjectDetailBanner from "./project-detail-banner";
import ProjectDetailSection from "./project-details-section";

import HomeReservation from "../home-component/home-reservation";

import projectsData from "./projectsData";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/gp-logo.png";
import PlotTable from "./plots-data";
import PonBhoomiReservation from "./ponbhoomi-reservation";

function ProjectDetailPage() {
  const { slug } = useParams(); // Get slug from URL
  const project = projectsData.find((p) => p.slug === slug); // Find project by slug

  // ✅ Move hooks outside the conditional check
  const [selectedPlot, setSelectedPlot] = useState(null);
  const homeReservationRef = useRef(null);

  const handleSelectPlot = (plot) => {
    setSelectedPlot(plot);
    homeReservationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
      <ProjectDetailBanner project={project} />

      {slug === "gp-ponBhoomi" && (
        <>
          <PlotTable onSelectPlot={handleSelectPlot} />
        </>
      )}

      <ProjectDetailSection project={project} />
      {/* {slug === "gp-ponBhoomi" && (
        <>
          <PlotsVideo />
        </>
      )} */}

      {/* Attach ref to HomeReservation */}
      <div ref={homeReservationRef}>
        {slug === "gp-ponBhoomi" ? (
          <PonBhoomiReservation selectedPlotData={selectedPlot} />
        ) : (
          <HomeReservation project={project} selectedPlotData={selectedPlot} />
        )}
      </div>
      <Footer />
    </Fragment>
  );
}

export default ProjectDetailPage;
