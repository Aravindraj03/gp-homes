import React, { Fragment } from "react";
import {useLocation } from "react-router-dom";
import Footer from "../common/footer";
import Header from "../common/header";
import AparmentBanner from "./plots-banner";
import ApartmentDetails from "./plots-details";
// import ContactBanner from "./contact-banner";
// import ContactForm from "./contact-form";
import HomeReservation from "../home-component/home-reservation";
import { Link } from "react-router-dom";

function PlotsPage() {
  const location = useLocation();
    const category = location.pathname.includes("/plots") ? "plots" : "apartments";

  return (
    <Fragment>
      <Header />
      <AparmentBanner />
      <ApartmentDetails />
      {/* <ContactBanner />
      <ContactForm /> */}
      <HomeReservation />
      <Footer />

<div
        className="position-fixed bottom-0 start-0 w-100 d-flex justify-content-around bg-white py-2 border-top d-block d-md-none"
        style={{ zIndex: 1050 }}
      >
        <Link
          to={`/plots/enquiry-form?type=Plot`}
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
      

      {/* Fixed "Enquire Now" Button */}
            <Link
            className="side-enquiry-button"
        to={`/plots/enquiry-form?type=Plot`}
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

export default PlotsPage;
