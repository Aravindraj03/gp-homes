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
        Real Estate Tools & Resources – GP Homes Chennai
        </title>
        <meta
          name="description"
          content="Access helpful tools and resources for homebuyers and investors. GP Homes provides expert insights, property guides, and real estate calculators."
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
