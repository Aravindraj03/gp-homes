import React, { Fragment, useRef, useState } from "react";
import { useParams,useLocation } from "react-router-dom";
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
  const location = useLocation();
const category = location.pathname.includes("/plots") ? "plots" : "apartments";
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
                <NavDropdown.Item as={Link} to="/testimonials">
                  Testimonials
                </NavDropdown.Item>
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

      {/* === BANNER SECTION === */}
      {/* Desktop Banner - visible for all projects */}
      <div className="d-none d-md-block">
        <ProjectDetailBanner project={project} />
      </div>

      {/* Mobile Banner */}
      <div className="d-block d-md-none">
        {slug === "gp-ponBhoomi" ? (
          <img
            src={mobileBanner} // Replace with your actual path
            alt="PonBhoomi Mobile Banner"
            className="img-fluid w-100"
          />
        ) : (
          <ProjectDetailBanner project={project} />
        )}
      </div>

      {/* === DESKTOP VIEW === */}
      <div className="d-none d-md-block">
        {slug === "gp-ponBhoomi" && (
          <PlotTable onSelectPlot={handleSelectPlot} />
        )}
        <ProjectDetailSection project={project} />
        <div ref={homeReservationRef}>
          <HomeReservation project={project} selectedPlotData={selectedPlot} />
        </div>
      </div>

      {/* === MOBILE VIEW (gp-ponBhoomi) === */}
  {slug === "gp-ponBhoomi" && (
    <div className="d-block d-md-none">
      <ProjectDetailSection project={project} />
      <PlotTable onSelectPlot={handleSelectPlot} />
      <div ref={homeReservationRef}>
        <PonBhoomiReservation selectedPlotData={selectedPlot} />
      </div>

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
    </div>
  )}
  

      {/* === MOBILE VIEW (other projects) === */}
      {slug !== "gp-ponBhoomi" && (
      <div className="d-block d-md-none">
        <ProjectDetailSection project={project} />
        <div ref={homeReservationRef}>
          <HomeReservation project={project} selectedPlotData={selectedPlot} />
        </div>
      </div>
      )}

      <Footer />
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
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "rgb(255 82 0)  ")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "rgb(242 101 34)")
          }
        >
          Enquire Now
        </Link>
      )}
    </Fragment>
  );
}

export default ProjectDetailPage;
