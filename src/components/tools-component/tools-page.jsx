import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import ToolsBanner from "./tools-banner";
import Tools from "./tools";
import HomeReservation from "../home-component/home-reservation";
import { Helmet } from "react-helmet-async";
function ToolsPage() {
  return (
    <Fragment>
      <Helmet>
        <title>
        Tools - GP Homes
        </title>
        <meta
          name="description"
          content="Explore essential real estate tools at GP Homes to simplify your home-buying journey. Get insights on property trends, pricing, and more for smart investments in Chennai."
        />
      </Helmet>
      <Header />
      <ToolsBanner />
      <Tools />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default ToolsPage;
