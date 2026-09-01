import React, { Fragment, useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo2 from "../../assets/img/gp-logo-2.png";

function Header() {
  const location = useLocation();

  console.log(location.pathname, "locationPathname");

  const [navScroll, setNavScroll] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (
        scrollTop > 100 ||
        location.pathname.startsWith("/apartments-chennai/") ||
        location.pathname.startsWith("/plots-chennai/")
      ) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);


  // Property data
  const propertyMenus = {
    ongoing: {
      title: "ONGOING",

      left: [
        {
          name: "GP Pon Bhoomi",
          location: "Pattabiram",
        },
        {
          name: "GP Cressida Park",
          location: "Pattabiram-ORR",
        },
      ],

      right: [
        {
          name: "AISHWARYA GARDEN ll",
          location: "Tiruninravur-Pakkam",
        },
        {
          name: "Ponbhoomi",
          location: "Pattabiram",
        },
      ],
    },


    upcoming: {
      title: "UPCOMING",

      left: [
        {
          name: "Siruvapuri",
          location: "Near Amman temple",
        },
        {
          name: "New Project",
          location: "Thirumudivakkam",
        },
        {
          name: "New Project 2",
          location: "Mambakkam",
        },
        {
          name: "Keelameni",
          location: "ON GNT Road",
        },
      ],

      right: [
        {
          name: "Thalakancheri",
          location: "Thiruvallur",
        },
        {
          name: "SEYYON GRAND CITY",
          location: "Nr.Siruvapuri",
        },
        {
          name: "PETAL WING MEADOWS",
          location: "OMR-Siruthavur",
        },
        {
          name: "New Launch",
          location: "Athipet",
        },
      ],
    },


    completed: {
      title: "COMPLETED",

      left: [
        {
          name: "GP Midway Avenue",
          location: "Athipet",
        },
        {
          name: "GP Garden Bay",
          location: "Kolathur",
        },
        {
          name: "GP Ethulia",
          location: "Mogappair",
        },
        {
          name: "GP Nanmanai",
          location: "Redhills",
        },
        {
          name: "GP Vijayalakshmi",
          location: "Thiruvallur",
        },
        {
          name: "GP Serene Vista",
          location: "Ambattur",
        },
        {
          name: "GP Fairmont",
          location: "Parivakkam",
        },
        {
          name: "Cherry Blossom I",
          location: "AYANAMBAKKAM",
        },
        {
          name: "Cherry Blossom II",
          location: "AYANAMBAKKAM",
        },
        {
          name: "Cherry Blossom II",
          location: "AYANAMBAKKAM",
        },
      ],

      right: [
        {
          name: "GP Blazing Star",
          location: "Porur",
        },
        {
          name: "GP Breeze Way",
          location: "Menambedu",
        },
        {
          name: "GP Homes Elanza",
          location: "Madhanadhapuram",
        },
        {
          name: "GP Valencia Emerald",
          location: "Ayanambakkam",
        },
        {
          name: "GP Valencia Ruby",
          location: "Ayanambakkam",
        },
        {
          name: "Blossom icf colony",
          location: "CHENNAI",
        },
        {
          name: "Blue Bell",
          location: "AYANAMBAKKAM",
        },
        {
          name: "Blue Bell Phase II",
          location: "AYANAMBAKKAM",
        },
        {
          name: "Caspia (Mohan Gardens)",
          location: "KORATTUR",
        },
      ],
    },
  };


  // Existing property URL function
  const getPropertyUrl = (propertyName) => {
    return `/projects/${propertyName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")}`;
  };


  const handleMenuClick = (menu) => {
    if (window.innerWidth <= 991) {
      setActiveMenu(
        activeMenu === menu ? null : menu
      );
    }
  };


  const closeMobileMenu = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  };


  return (
    <Fragment>

      <Navbar
        expand="lg"
        className={`gp-navbar ${
          navScroll ? "nav-scroll" : ""
        }`}
      >

        <Container>

          {/* LOGO */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="gp-logo"
          >
            <img
              src={logo2}
              alt="GP Homes"
              className="logo-img"
            />
          </Navbar.Brand>


          {/* MOBILE TOGGLE */}
          <Navbar.Toggle
            aria-controls="navbar"
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
          />


          {/* MENU */}
          <Navbar.Collapse
            id="navbar"
            className={`custom-collapse ${
              mobileMenuOpen
                ? "mobile-open"
                : ""
            }`}
          >

            <Nav className="gp-main-nav">

              {/* ABOUT US */}
              <Nav.Link
                as={Link}
                to="/about-us"
                onClick={closeMobileMenu}
              >
                About Us
              </Nav.Link>


              {/* =================================
                  MOBILE ONLY - APARTMENTS
              ================================= */}
              <Nav.Link
                as={Link}
                to="/apartments-chennai"
                className="mobile-property-link"
                onClick={closeMobileMenu}
              >
                Apartments
              </Nav.Link>


              {/* =================================
                  MOBILE ONLY - PLOTS
              ================================= */}
              <Nav.Link
                as={Link}
                to="/plots-chennai"
                className="mobile-property-link"
                onClick={closeMobileMenu}
              >
                Plots
              </Nav.Link>


              {/* =================================
                  DESKTOP - ONGOING
              ================================= */}
              <div
                className="property-menu-wrapper desktop-property-menu"
                onMouseEnter={() => {
                  if (window.innerWidth > 991) {
                    setActiveMenu("ongoing");
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 991) {
                    setActiveMenu(null);
                  }
                }}
              >

                <button
                  type="button"
                  className="property-menu-title"
                  onClick={() =>
                    handleMenuClick("ongoing")
                  }
                >
                  ONGOING

                  <span className="menu-icon">
                    ☰
                  </span>
                </button>

              </div>


              {/* =================================
                  DESKTOP - UPCOMING
              ================================= */}
              <div
                className="property-menu-wrapper desktop-property-menu"
                onMouseEnter={() => {
                  if (window.innerWidth > 991) {
                    setActiveMenu("upcoming");
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 991) {
                    setActiveMenu(null);
                  }
                }}
              >

                <button
                  type="button"
                  className="property-menu-title"
                  onClick={() =>
                    handleMenuClick("upcoming")
                  }
                >
                  UPCOMING

                  <span className="menu-icon">
                    ☰
                  </span>
                </button>

              </div>


              {/* =================================
                  DESKTOP - COMPLETED
              ================================= */}
              <div
                className="property-menu-wrapper desktop-property-menu"
                onMouseEnter={() => {
                  if (window.innerWidth > 991) {
                    setActiveMenu("completed");
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 991) {
                    setActiveMenu(null);
                  }
                }}
              >

                <button
                  type="button"
                  className="property-menu-title"
                  onClick={() =>
                    handleMenuClick("completed")
                  }
                >
                  COMPLETED

                  <span className="menu-icon">
                    ☰
                  </span>
                </button>

              </div>


              {/* CONTACT */}
              <Nav.Link
                as={Link}
                to="/contact-us"
                onClick={closeMobileMenu}
              >
                Contact
              </Nav.Link>


              {/* CHANNEL PARTNER */}
              <Nav.Link
                as={Link}
                to="/channelPartner"
                onClick={closeMobileMenu}
              >
                Channel Partner
              </Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Container>


        {/* =========================================
            DESKTOP MEGA MENU
        ========================================= */}

        {activeMenu && (
          <div
            className="property-mega-menu"
            onMouseEnter={() => {
              if (window.innerWidth > 991) {
                setActiveMenu(activeMenu);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 991) {
                setActiveMenu(null);
              }
            }}
          >

            <div className="mega-menu-inner">

              {/* PROPERTY LIST */}
              <div className="property-list">

                {/* LEFT */}
                <div className="property-column">

                  {propertyMenus[activeMenu].left.map(
                    (property, index) => (

                      <p
                        key={index}
                        className="property-item"
                        onClick={() => {
                          setActiveMenu(null);
                          setMobileMenuOpen(false);
                        }}
                      >

                        <strong>
                          {property.name}
                        </strong>

                        <span>
                          {" - "}
                          {property.location}
                        </span>

                      </p>

                    )
                  )}

                </div>


                {/* RIGHT */}
                <div className="property-column">

                  {propertyMenus[activeMenu].right.map(
                    (property, index) => (

                      <p
                        key={index}
                        className="property-item"
                        onClick={() => {
                          setActiveMenu(null);
                          setMobileMenuOpen(false);
                        }}
                      >

                        <strong>
                          {property.name}
                        </strong>

                        <span>
                          {" - "}
                          {property.location}
                        </span>

                      </p>

                    )
                  )}

                </div>

              </div>


              {/* CATEGORY BUTTONS */}
              <div className="property-category-buttons">

                {/* PLOTS */}
                <Link
                  to={`/plots-${activeMenu}`}
                  className="category-button"
                  onClick={() => {
                    setActiveMenu(null);
                    setMobileMenuOpen(false);
                  }}
                >
                  Plots
                </Link>
                
                {/* APARTMENTS */}
                <Link
                  to={`/apartments-${activeMenu}`}
                  className="category-button"
                  onClick={() => {
                    setActiveMenu(null);
                    setMobileMenuOpen(false);
                  }}
                >
                  Apartments
                </Link>


                {/* VILLAS */}
                <Link
                  to={`/villas-${activeMenu}`}
                  className="category-button"
                  onClick={() => {
                    setActiveMenu(null);
                    setMobileMenuOpen(false);
                  }}
                >
                  Villas
                </Link>

              </div>

            </div>

          </div>
        )}

      </Navbar>

    </Fragment>
  );
}

export default Header;