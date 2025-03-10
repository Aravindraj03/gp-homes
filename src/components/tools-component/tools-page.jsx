import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import ToolsBanner from "./tools-banner";
import Tools from "./tools";
import HomeReservation from "../home-component/home-reservation";
function ToolsPage() {
  return (
    <Fragment>
      <Header />
      <ToolsBanner />
      <Tools />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default ToolsPage;
