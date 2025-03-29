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
                  
                </div>
              </Col>
              <Col md={3} className="offset-md-1">
                <div className="footer-column footer-explore clearfix">
                  <h3 className="footer-title">Explore</h3>
                  <div className="d-flex  gap-5">
                    <ul className="footer-explore-list list-unstyled mb-1 p-0">
                      <li>
                        <Link to="/home">Home</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link as={Link} to="/apartments-chennai">
                          Apartments
                        </Link>
                      </li>
                      <li>
                        <Link as={Link} to="/plots-chennai">
                          Plots
                        </Link>
                      </li>
                      <li>
                        <Link to="/joint-ventures">Joint Ventures</Link>
                      </li>

                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                    </ul>
                    <ul className="footer-explore-list list-unstyled">
                      
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
                </div>
              </Col>
              <Col md={4}>
                <div className="footer-column footer-contact">
                  <h3 className="footer-title">Contact</h3>
                  <p className="footer-contact-text">
                    W-820, 9th St, Syndicate Colony,
                    <br />
                    D-Sector, Anna Nagar West Extension,
                    <br />
                    Chennai, Tamil Nadu 600101
                  </p>
                  <div className="footer-contact-info">
                    <p className="footer-contact-phone">
                      <span className="flaticon-call"></span> 934 448 1444
                    </p>
                    <p className="footer-contact-phone">
                    <span className="flaticon-call"></span> 638 400 
                    3003</p>
                    {/* <p className="footer-contact-mail">info@luxuryhotel.com</p> */}
                  </div>
                  <div className="footer-about-social-list">
                    <a href="https://www.instagram.com/gphomes_?igsh=andzdTc2dGVibml6">
                      <i className="ti-instagram fs-4"></i>
                    </a>
                    <a href="https://youtube.com/@gphomes3239?si=AYLrq-oybgtyyovL">
                      <i className="ti-youtube fs-4"></i>
                    </a>
                    <a href="https://www.facebook.com/share/1DMpX1Dzj8/">
                      <i className="ti-facebook fs-4"></i>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

  <div className="footer-projects-container">
  <Container>
    <Row>
      <Col md={12}>
        <h4 className="footer-projects-title text-center mb-3">Completed Projects</h4>
        <Row>
          <Col md={4} sm={6} xs={12}>
            <ul className="footer-projects-list">
              <li><Link to="/gp-crown-imperial">GP CROWN IMPERIAL</Link></li>
              <li><Link to="/gp-fern-breeze">GP FERN BREEZE</Link></li>
              <li><Link to="/gp-flora-diamond">GP FLORA DIAMOND</Link></li>
              <li><Link to="/gp-fedora-oaks">GP FEDORA OAKS</Link></li>
              <li><Link to="/gp-imperial">GP IMPERIAL</Link></li>
            </ul>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <ul className="footer-projects-list">
              <li><Link to="/gp-ellora-castle">GP ELLORA CASTLE</Link></li>
              <li><Link to="/gp-peach-blossom">GP PEACH BLOSSOM</Link></li>
              <li><Link to="/gp-pearl-iris">GP PEARL IRIS</Link></li>
              <li><Link to="/gp-magnolia">GP MAGNOLIA</Link></li>
              <li><Link to="/gp-freesia">GP FREESIA</Link></li>
            </ul>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <ul className="footer-projects-list">
              <li><Link to="/gp-blue-bell-phase-ii">GP BLUE BELL PHASE II</Link></li>
              <li><Link to="/gp-blue-bell">GP BLUE BELL</Link></li>
              <li><Link to="/gp-cherry-blossom-ii-saffron">GP CHERRY BLOSSOM II SAFFRON</Link></li>
              <li><Link to="/gp-cherry-blossom-ii-lavender">GP CHERRY BLOSSOM II LAVENDER</Link></li>
              <li><Link to="/gp-east-wind">GP EAST WIND</Link></li>
            </ul>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <ul className="footer-projects-list">
              <li><Link to="/gp-peace-rhythm">GP PEACE RHYTHM</Link></li>
              <li><Link to="/gp-aishwarya-garden">GP AISHWARYA GARDEN</Link></li>
              <li><Link to="/gp-fern-breeze-diamond">GP FERN BREEZE DIAMOND</Link></li>
              <li><Link to="/gp-valencia-diamond">GP VALENCIA DIAMOND</Link></li>
              <li><Link to="/gp-elegant-castle">GP ELEGANT CASTLE</Link></li>
            </ul>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <ul className="footer-projects-list">
              <li><Link to="/gp-cherry-blossom-i">GP CHERRY BLOSSOM I</Link></li>
              <li><Link to="/gp-orange-blossom">GP ORANGE BLOSSOM</Link></li>
              <li><Link to="/gp-caspia">GP CASPIA</Link></li>
              <li><Link to="/gp-lake-spirea">GP LAKE SPIREA</Link></li>
              <li><Link to="/gp-erica">GP ERICA</Link></li>
            </ul>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <ul className="footer-projects-list">
              <li><Link to="/gp-new-springs">GP NEW SPRINGS</Link></li>
              <li><Link to="/gp-egp-enclave">GP EGP ENCLAVE</Link></li>
              <li><Link to="/gp-blossom">GP BLOSSOM</Link></li>
              <li><Link to="/gp-yellow-orchid">GP YELLOW ORCHID</Link></li>
              <li><Link to="/gp-cherry-blossom-villa">GP CHERRY BLOSSOM VILLA</Link></li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
</div>
      </footer>
    </Fragment>
  );
}

export default Footer;
