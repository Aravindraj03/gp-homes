import React, { Fragment } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/gp-logo.png";
function Header() {
  return (
    <Fragment>
      {/* Preloader */}
      {/* <div className="preloader-bg"></div>
      <div id="preloader">
        <div id="preloader-status">
          <div className="preloader-position loader">
            <span></span>
          </div>
        </div>
      </div> */}

      {/* Progress scroll to top */}
      {/* <div className="progress-wrap cursor-pointer">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div> */}

      {/* Navbar */}
      <Navbar expand="lg">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Navbar.Brand>

          {/* Toggler */}
          <Navbar.Toggle aria-controls="navbar" />

          {/* Menu */}
          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/home#apartments">
                Apartments
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                Villas
              </Nav.Link>
              <Nav.Link as={Link} to="/home#apartments">
                Plots
              </Nav.Link> */}

              <Nav.Link as={Link} to="/apartments">
                Apartments
              </Nav.Link>
              <Nav.Link as={Link} to="/plots">
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
                <NavDropdown.Item as={Link} to="/tools">
                  Tools
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/testimonials">
                  Testimonials
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/careers">
                  Careers
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
    </Fragment>
  );
}

export default Header;
