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
        Careers - GP Homes
        </title>
        <meta
          name="description"
          content="Explore exciting career opportunities at GP Homes. Join our team of professionals and build a successful future in the real estate industry. Apply now!"
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
