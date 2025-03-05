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
        <title>Blogs - GP Homes Latest News & Updates</title>
        <meta
          name="description"
          content="Stay updated with the latest news, trends, and insights on real estate. Read GP Homes' blogs for expert advice, market updates, and home-buying tips."
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
