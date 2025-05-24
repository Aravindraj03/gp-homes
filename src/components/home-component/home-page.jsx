import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import BannerSlider from "./home-banner";
import BookingSearch from "./booking-search";
import HomeAbout from "./home-about";
import HomeProjects from "./home-projects";
import HomePricing from "./home-pricing";
import HomePromoVideo from "./home-promo-video";
import HomeFacilities from "./home-facilities";
import HomeTestimonials from "./home-testimonials";
import HomeServices from "./home-services";
// import NewsSection from "./home-news";
import HomeReservation from "./home-reservation";
import HomeClients from "./home-clients";
import HomeLogoMarquee from "./time-ticker";
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <Fragment>

      <Header />
      <BannerSlider />
      <HomeLogoMarquee />
      {/* <BookingSearch /> */}
      {/* <HomeAbout /> */}
      <HomeProjects />
      {/* <HomePricing /> */}
      <HomePromoVideo />
      <HomeFacilities />
      <HomeTestimonials />
      {/* <HomeServices /> */}
      {/* <NewsSection /> */}
      <HomeReservation />
      {/* <HomeClients /> */}
      <Footer />


      <div
              className="position-fixed bottom-0 start-0 w-100 d-flex justify-content-around bg-white py-2 border-top d-block d-md-none"
              style={{ zIndex: 1050 }}
            >
              <Link
                to={`/apartments/enquiry-form`}
                className="btn w-50 me-1 text-white"
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

      <Link
        to={`/apartments/enquiry-form`}
        className="side-enquiry-button"
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
    </Fragment>
  );
}

export default HomePage;
