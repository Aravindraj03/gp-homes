import React, { Fragment, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../common/header";
import Footer from "../common/footer";
import PlotsVideo from "./plots-video";
import ProjectDetailBanner from "./project-detail-banner";
import ProjectDetailSection from "./project-details-section";
import mobileBanner from "../../assets/img/projects/ponbhoomi-mobile-banner.jpg";

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
      {/* Navbar */}
      <Navbar expand="lg" className="nav-scroll-1">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/apartments-chennai">Apartments</Nav.Link>
              <Nav.Link as={Link} to="/plots-chennai">Plots</Nav.Link>
              <NavDropdown title={<>Pages <i className="ti-angle-down"></i></>} id="pages-dropdown">
                <NavDropdown.Item as={Link} to="/about-us">About Us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/joint-ventures">Joint Ventures</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/gallery">Gallery</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blogs">Blogs</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/testimonials">Testimonials</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/faq">F.A.Qs</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact-us">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Banner */}
      {/* Desktop Banner - shown on md and above */}
<div className="d-none d-md-block">
  <ProjectDetailBanner project={project} />
</div>

{/* Mobile Banner - only for PonBhoomi */}
{slug === "gp-ponBhoomi" && (
  <div className="d-block d-md-none">
    {/* Replace below with your actual mobile banner component or JSX */}
    <img
      src={mobileBanner} // Adjust path as needed
      alt="PonBhoomi Mobile Banner"
      className="img-fluid w-100"
    />
  </div>
)}

      {/* === DESKTOP VIEW === */}
      <div className="d-none d-md-block">
        {slug === "gp-ponBhoomi" && (
          <PlotTable onSelectPlot={handleSelectPlot} />
        )}

        <ProjectDetailSection project={project} />

        <div ref={homeReservationRef}>
          {slug === "gp-ponBhoomi" ? (
            <PonBhoomiReservation selectedPlotData={selectedPlot} />
          ) : (
            <HomeReservation project={project} selectedPlotData={selectedPlot} />
          )}
        </div>
      </div>

      {/* === MOBILE VIEW (gp-ponBhoomi only) === */}
      {slug === "gp-ponBhoomi" && (
        <div className="d-block d-md-none">
          <ProjectDetailSection project={project} />
          <PlotTable onSelectPlot={handleSelectPlot} />
          <div ref={homeReservationRef}>
            <PonBhoomiReservation selectedPlotData={selectedPlot} />
          </div>

          {/* Bottom Buttons */}
          <div
            className="position-fixed bottom-0 start-0 w-100 d-flex justify-content-around bg-white py-2 border-top"
            style={{ zIndex: 1050 }}
          >
            <button
              className="btn btn-primary w-50 me-1"
              onClick={() =>
                homeReservationRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Enquiry
            </button>
            <a
              href="tel:+918098725026"
              className="btn btn-success w-50 ms-1 text-white"
            >
              Call
            </a>
          </div>
        </div>
      )}

      <Footer />
    </Fragment>
  );
}

export default ProjectDetailPage;
