import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import BlogsBanner from "./blogs-banner";
import BlogSection from "./blogs-section";

import HomeReservation from "../home-component/home-reservation";

function BlogsPage() {
  return (
    <Fragment>
      <Header />
      <BlogsBanner />
      <BlogSection />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default BlogsPage;
