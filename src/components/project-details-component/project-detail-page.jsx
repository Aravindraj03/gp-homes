import React, { Fragment, useRef, useState } from "react";
import { useParams,useLocation,Navigate } from "react-router-dom";
import Header from "../common/header";
import Footer from "../common/footer";
import PlotsVideo from "./plots-video";
import ProjectDetailBanner from "./project-detail-banner";
import ProjectDetailSection from "./project-details-section";
import mobileBanner from "../../assets/img/projects/ponbhoomi-mobile-banner2.jpg";
import mobileBanner2 from "../../assets/img/projects/ponbhoomi-mobile-banner3.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomeReservation from "../home-component/home-reservation";

import projectsData from "./projectsData";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/gp-logo.png";
import PlotTable from "./plots-data";
import PonBhoomiReservation from "./ponbhoomi-reservation";
import Slider from "react-slick";

// floorplan for ponbhoomi

import floorPlan1 from "../../assets/img/floorplans/pon floor2 (1).jpeg";
import floorPlan2 from "../../assets/img/floorplans/floorplan2.jpeg";
import floorPlan3 from "../../assets/img/floorplans/pon floor2 (3).jpeg";
import floorPlan4 from "../../assets/img/floorplans/pon floor2 (4).jpeg";
import floorPlan5 from "../../assets/img/floorplans/ponbhoomi floorplan1.jpeg"
import floorPlan6 from "../../assets/img/floorplans/ponbhoomi floorplan2.jpg";
import floorPlan7 from "../../assets/img/floorplans/ponbhhoom floorplan3.jpg";
import floorPlan8 from "../../assets/img/floorplans/ponbhoomi floorplan4.jpg";
function ProjectDetailPage() {

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };
    const apartmentSlugs = [
  "gp-blazing-star-3bhk",
  "gp-blazing-star",
  "gp-blazing-star-2bhk",
  "gp-breeze-way",
  "gp-breeze-way-2bhk",
  "gp-breeze-way-3bhk",
  "gp-homes-elanza",
  "gp-homes-elanza-3bhk",
  "gp-homes-elanza-2bhk",
  "gp-valencia-ruby",
  "gp-valencia-ruby-2bhk",
  "gp-valencia-ruby-3bhk",
  "gp-valencia-emarald",
  "gp-valencia-emarald-3bhk",
  "gp-valencia-emarald-2bhk",
];

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

  const currentPath = location.pathname;
  const Slugs = currentPath.split("/").pop();
if (currentPath.includes("/plots-chennai/") && apartmentSlugs.includes(slug)) {
    return <Navigate to={`/apartments-chennai/gp-homes/${slug}`} replace />;
  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


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
      <div className="d-block d-md-none mt-md-5">
        {slug === "gp-ponBhoomi" ? (
          <Slider {...settings}>
            {/* <div>
            <img
              src={mobileBanner}
              alt="PonBhoomi Mobile Banner 1"
              className="img-fluid w-100"
            />
          </div> */}
            <div>
              <img
                src={mobileBanner2}
                alt="PonBhoomi Mobile Banner 2"
                className="img-fluid w-100"
              />
            </div>
          </Slider>
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
        {slug === "gp-ponBhoomi" && (
          <div className="mt-4 px-5 py-5">
            <h4 className="mb-3 text-center">Villa Construction Progress</h4>

            <div className="row g-2 px-5">
              {[
                floorPlan1,
                floorPlan2,
                floorPlan3,
                floorPlan4,
                floorPlan5,
                floorPlan6,
                floorPlan7,
                floorPlan8,
              ].map((img, index) => (
                <div key={index} className="col-3">
                  <img
                    src={img}
                    alt={`Site ${index + 1}`}
                    className="img-fluid rounded cursor-pointer"
                    onClick={() => openImage(img)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ))}
            </div>
          </div>
          
        )}
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
          {/* Image Section - visible only on screens below md */}
          <div className="d-block d-md-none">
            <div className="mt-4 px-3 py-3">
              <h5 className="mb-3 text-center">Villa Construction Progress</h5>

              <div className="row g-3">
                <div className="col-12">
                  <img
                    src={floorPlan1}
                    alt="Site 1"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-12">
                  <img
                    src={floorPlan2}
                    alt="Site 2"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-12">
                  <img
                    src={floorPlan3}
                    alt="Site 3"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-12">
                  <img
                    src={floorPlan4}
                    alt="Site 4"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-12">
                  <img
                    src={floorPlan5}
                    alt="Site 4"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-12">
                  <img
                    src={floorPlan6}
                    alt="Site 4"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-12">
                  <img
                    src={floorPlan7}
                    alt="Site 4"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-12">
                  <img
                    src={floorPlan8}
                    alt="Site 4"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
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
            <HomeReservation
              project={project}
              selectedPlotData={selectedPlot}
            />
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
      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          className="modal-backdrop"
          onClick={closeImage}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100",
            height: "100%",
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "50%",
              maxHeight: "100%",
            }}
          >
            <img
              src={selectedImage}
              alt="Zoomed"
              className="img-fluid rounded"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                objectFit: "contain",
              }}
            />
            <button
              onClick={closeImage}
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                background: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "35px",
                height: "35px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default ProjectDetailPage;
