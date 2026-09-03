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

  /* =========================================
     PROPERTY DATA
  ========================================= */

  const propertyMenus = {
    ongoing: {
      title: "ONGOING",

      left: [
        {
          name: "GP Pon Bhoomi",
          location: "Sevappet",
          type: "Plots",
          link: "/plots-chennai/gp-ponBhoomi",
        },
        {
          name: "GP Cressida Park",
          location: "Pattabiram-ORR",
          type: "Plots",
          link: "/plots-chennai/gp-cressida-park",
        },
      ],

      right: [
        {
          name: "AISHWARYA GARDEN II",
          location: "Tiruninravur-Pakkam",
          type: "Plots",
          link: "/plots-chennai/aishwarya-garden-ll",
        },
        {
          name: "GP ELARIS GRAND",
          location: "Athipet",
          type: "Apartments",
          link: "/apartments-chennai/gp-elaris-grand",
        },
      ],
    },

    upcoming: {
      title: "UPCOMING",

      left: [
        {
          name: "Siruvapuri",
          location: "Near Amman Temple",
          type: "Plots",
          link: null,
        },
        {
          name: "New Project",
          location: "Thirumudivakkam",
          type: "Plots",
          link: null,
        },
        {
          name: "New Project 2",
          location: "Mambakkam",
          type: "Plots",
          link: null,
        },
        {
          name: "Keelameni",
          location: "ON GNT Road",
          type: "Plots",
          link: null,
        },
      ],

      right: [
        {
          name: "Thalakancheri",
          location: "Thiruvallur",
          type: "Plots",
          link: null,
        },
        {
          name: "SEYYON GRAND CITY",
          location: "Nr.Siruvapuri",
          type: "Plots",
          link: null,
        },
        {
          name: "PETAL WING MEADOWS",
          location: "OMR-Siruthavur",
          type: "Plots",
          link: null,
        },
        {
          name: "New Launch",
          location: "Athipet",
          type: "Apartments",
          link: null,
        },
      ],
    },

    completed: {
      title: "COMPLETED",

      left: [
        {
          name: "GP Midway Avenue",
          location: "Athipet",
          type: "Plots",
          link: "/plots-chennai/gp-midway-avenue",
        },
        {
          name: "GP Garden Bay",
          location: "Kolathur",
          type: "Plots",
          link: "/plots-chennai/gp-garden-bay",
        },
        {
          name: "GP Ethulia",
          location: "Mogappair",
          type: "Plots",
          link: "/plots-chennai/gp-ethulia",
        },
        {
          name: "GP Nanmanai",
          location: "Redhills",
          type: "Plots",
          link: "/plots-chennai/gp-nanmanai",
        },
        {
          name: "GP Vijayalakshmi",
          location: "Thiruvallur",
          type: "Plots",
          link: "/plots-chennai/gp-vijayalakshmi",
        },
        {
          name: "GP Serene Vista",
          location: "Ambattur",
          type: "Plots",
          link: "/plots-chennai/gp-serenevista",
        },
        {
          name: "GP Fairmont",
          location: "Parivakkam",
          type: "Plots",
          link: "/plots-chennai/gp-fairmont",
        },
        {
          name: "Cherry Blossom I",
          location: "AYANAMBAKKAM",
          type: "Apartments",
          link: null,
        },
        {
          name: "Cherry Blossom II",
          location: "AYANAMBAKKAM",
          type: "Apartments",
          link: null,
        },
        {
          name: "Cherry Blossom II",
          location: "AYANAMBAKKAM",
          type: "Apartments",
          link: null,
        },
      ],

      right: [
        {
          name: "GP Blazing Star",
          location: "Porur",
          type: "Apartments",
          link: "/apartments-chennai/gp-blazing-star",
        },
        {
          name: "GP Breeze Way",
          location: "Menambedu",
          type: "Apartments",
          link: "/apartments-chennai/gp-breeze-way",
        },
        {
          name: "GP Homes Elanza",
          location: "Madhanadhapuram",
          type: "Apartments",
          link: "/apartments-chennai/gp-homes-elanza",
        },
        {
          name: "GP Valencia Emerald",
          location: "Ayanambakkam",
          type: "Apartments",
          link: "/apartments-chennai/gp-valencia-emerald",
        },
        {
          name: "GP Valencia Ruby",
          location: "Ayanambakkam",
          type: "Apartments",
          link: "/apartments-chennai/gp-valencia-ruby",
        },
        {
          name: "Blossom ICF Colony",
          location: "CHENNAI",
          type: "Apartments",
          link: null,
        },
        {
          name: "Blue Bell",
          location: "AYANAMBAKKAM",
          type: "Apartments",
          link: null,
        },
        {
          name: "Blue Bell Phase II",
          location: "AYANAMBAKKAM",
          type: "Apartments",
          link: null,
        },
        {
          name: "Caspia (Mohan Gardens)",
          location: "KORATTUR",
          type: "Apartments",
          link: null,
        },
      ],
    },
  };

  /* =========================================
     MENU FUNCTIONS
  ========================================= */

  const handleMenuClick = (menu) => {
    if (window.innerWidth <= 991) {
      setActiveMenu(activeMenu === menu ? null : menu);
    }
  };

  const closeMobileMenu = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  };

  /* =========================================
     PROPERTY ITEM
  ========================================= */

  const renderPropertyItem = (property, index) => {
    const propertyContent = (
      <div className="property-item-content">
        <div className="property-name-location">
          <strong>{property.name}</strong>

          <span>
            {" - "}
            {property.location}
          </span>
        </div>

        {/* PROPERTY TYPE TAG */}

        <span className="property-type-tag">{property.type}</span>
      </div>
    );

    /* =========================================
       IF LINK EXISTS
       MAKE PROJECT CLICKABLE
    ========================================= */

    if (property.link) {
      return (
        // <Link
        //   key={index}
        //   to={property.link}
        //   className="property-item property-item-link"
        //   onClick={() => {
        //     setActiveMenu(null);
        //     setMobileMenuOpen(false);
        //   }}
        // >
        //   {propertyContent}
        // </Link>
        <div
          key={index}
          className="property-item property-item-link"
          onClick={() => {
            if (property.link) {
              window.location.href = property.link;
            }

            setActiveMenu(null);
            setMobileMenuOpen(false);
          }}
          style={{ cursor: property.link ? "pointer" : "default" }}
        >
          {propertyContent}
        </div>
      );
    }

    /* =========================================
       IF NO LINK
       DO NOT REDIRECT
    ========================================= */

    return (
      <div key={index} className="property-item property-item-no-link">
        {propertyContent}
      </div>
    );
  };

  return (
    <Fragment>
      {/* =========================================
          NAVBAR
      ========================================= */}

      <Navbar
        expand="lg"
        className={`gp-navbar ${navScroll ? "nav-scroll" : ""}`}
      >
        <Container>
          {/* =====================================
              LOGO
          ===================================== */}

          <Navbar.Brand as={Link} to="/" className="gp-logo">
            <img src={logo2} alt="GP Homes" className="logo-img" />
          </Navbar.Brand>

          {/* =====================================
              MOBILE TOGGLE
          ===================================== */}

          <Navbar.Toggle
            aria-controls="navbar"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />

          {/* =====================================
              NAVIGATION
          ===================================== */}

          <Navbar.Collapse
            id="navbar"
            className={`custom-collapse ${mobileMenuOpen ? "mobile-open" : ""}`}
          >
            <Nav className="gp-main-nav">
              {/* =================================
                  ABOUT US
              ================================= */}

              <Nav.Link as={Link} to="/about-us" onClick={closeMobileMenu}>
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
                  ONGOING
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
                  onClick={() => handleMenuClick("ongoing")}
                >
                  ONGOING
                  <span className="menu-icon">☰</span>
                </button>
              </div>

              {/* =================================
                  UPCOMING
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
                  onClick={() => handleMenuClick("upcoming")}
                >
                  UPCOMING
                  <span className="menu-icon">☰</span>
                </button>
              </div>

              {/* =================================
                  COMPLETED
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
                  onClick={() => handleMenuClick("completed")}
                >
                  COMPLETED
                  <span className="menu-icon">☰</span>
                </button>
              </div>

              {/* =================================
                  CONTACT
              ================================= */}

              <Nav.Link as={Link} to="/contact-us" onClick={closeMobileMenu}>
                Contact
              </Nav.Link>

              {/* =================================
                  CHANNEL PARTNER
              ================================= */}

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
              {/* =====================================
                  PROPERTY LIST
              ===================================== */}

              <div className="property-list">
                {/* =================================
                    LEFT COLUMN
                ================================= */}

                <div className="property-column">
                  {propertyMenus[activeMenu].left.map(renderPropertyItem)}
                </div>

                {/* =================================
                    RIGHT COLUMN
                ================================= */}

                <div className="property-column">
                  {propertyMenus[activeMenu].right.map(renderPropertyItem)}
                </div>
              </div>

              {/* =====================================
                  CATEGORY BUTTONS
              ===================================== */}

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
                  to={
                    activeMenu === "ongoing"
                      ? "/villas-ongoing"
                      : `/villas-${activeMenu}`
                  }
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
