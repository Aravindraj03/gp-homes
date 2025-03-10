import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import CareersBanner from "./careers-banner";
import CareersJobs from "./careers-jobs";

import HomeReservation from "../home-component/home-reservation";

function CareersPage() {
  return (
    <Fragment>
      <Header />
      <CareersBanner />
      <CareersJobs />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default CareersPage;
