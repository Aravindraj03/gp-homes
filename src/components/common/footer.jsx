import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Fragment>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <Container>
            <Row>
              <Col md={4}>
                <div className="footer-column footer-about">
                  <h3 className="footer-title">About GP Homes</h3>
                  <p className="footer-about-text">
                    At GP Homes, our legacy is built on trust, quality, and
                    timely delivery. With over 2000 happy families residing in
                    200+ thoughtfully crafted homes, we have consistently upheld
                    our promise of on-time handovers, solidifying our reputation
                    as one of Chennai’s leading real estate developers.
                  </p>
                  {/* <div className="footer-language">
                    <i className="lni ti-world"></i>
                    <select
                      onChange={(e) => (window.location.href = e.target.value)}
                    >
                      <option value="">English</option>
                      <option value="">German</option>
                    </select>
                  </div> */}
                </div>
              </Col>
              <Col md={3} className="offset-md-1">
                <div className="footer-column footer-explore clearfix">
                  <h3 className="footer-title">Explore</h3>
                  <ul className="footer-explore-list list-unstyled">
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link as={Link} to="/home#apartments">
                        Apartments
                      </Link>
                    </li>
                    {/* <li><Link to="/">Villas</Link></li> */}
                    <li>
                      <Link as={Link} to="/home#apartments">
                        Plots
                      </Link>
                    </li>
                    <li>
                      <Link to="/joint-ventures">Joint Ventures</Link>
                    </li>

                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/tools">Tools</Link>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                      <Link to="/testimonials">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4}>
                <div className="footer-column footer-contact">
                  <h3 className="footer-title">Contact</h3>
                  <p className="footer-contact-text">
                    1616 Broadway NY, New York 10001
                    <br />
                    United States of America
                  </p>
                  <div className="footer-contact-info">
                    <p className="footer-contact-phone">
                      <span className="flaticon-call"></span> 855 100 4444
                    </p>
                    <p className="footer-contact-mail">info@luxuryhotel.com</p>
                  </div>
                  <div className="footer-about-social-list">
                    <a href="#">
                      <i className="ti-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="ti-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="ti-youtube"></i>
                    </a>
                    <a href="#">
                      <i className="ti-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="ti-pinterest"></i>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom">
          <Container>
            <Row>
              <Col md={12}>
                <div className="footer-bottom-inner">
                  <p className="footer-bottom-copy-right">
                    © Copyright {currentYear} by <a href="#">Atwias</a>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
