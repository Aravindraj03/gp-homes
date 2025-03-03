import React, { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import BlogsBanner from "./blogs-banner";
import BlogSection from "./blogs-section";

import HomeReservation from "../home-component/home-reservation";
import { Helmet } from "react-helmet-async";
function BlogsPage() {
  return (
    <Fragment>
      <Helmet>
        <title>
        Real Estate Blog – Property Insights & Home Buying Tips by GP Homes
        </title>
        <meta
          name="description"
          content="Stay updated with the latest real estate trends, investment tips, and home-buying guides. Read expert blogs by GP Homes, Chennai’s top real estate developer."
        />
      </Helmet>
      <Header />
      <BlogsBanner />
      <BlogSection />
      <HomeReservation />
      <Footer />
    </Fragment>
  );
}

export default BlogsPage;
