import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import CareersBanner from "./careers-banner";
import CareersJobs from "./careers-jobs";
import { Helmet } from "react-helmet-async";

import HomeReservation from "../home-component/home-reservation";

function CareersPage() {
  return (
    <Fragment>
      <Helmet>
        <title>
        Careers at GP Homes – Join Chennai’s Leading Real Estate Developer
        </title>
        <meta
          name="description"
          content="Looking for a career in real estate? GP Homes offers exciting job opportunities in Chennai for professionals passionate about building dream homes."
        />
      </Helmet>
      <Header />
      <CareersBanner />
      <CareersJobs />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default CareersPage;
