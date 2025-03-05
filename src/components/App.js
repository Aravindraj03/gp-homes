import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import LoadScripts from "./LoadScripts";

// Import styles
import "../styles/plugins.css";
import "../styles/style.css";

// Import NPM styles
import "bootstrap-4-react";
import "react-bootstrap";
import "react-icons/fa";

// Import AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

// Page Components
import HomePage from "./home-component/home-page";
import ProjectInnerPage from "./projects-inner-component/project-inner-page";
import ProjectDetailPage from "./project-details-component/project-detail-page";
import AboutPage from "./about-component/about-page";
import ContactPage from "./contact-component/contact-page";
import FAQPage from "./faq-component/faq-page";
import GalleryPage from "./gallery-component/gallery-page";
import CareersPage from "./careers-component/careers-page";
import PrivacyPage from "./privacy-component/privacy-page";
import ToolsPage from "./tools-component/tools-page";
import JointVentures from "./joint-ventures-component/joint-ventures-page";
import TestimonialsPage from "./testimonials-component/testimonials-page";
import BlogsPage from "./blogs-component/blogs-page";
import PostPage from "./blogs-inner-component/post-page";
import ApartmentPage from "./apartments-component/apartments-page";
import PlotsPage from "./plots-component/plots-page";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NotFound from "./not-found";
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter basename={"/"}>
        <LoadScripts />
        <ScrollToTop />
        <Fragment>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/apartments-chennai/:slug"
              element={<ProjectInnerPage />}
            />
            <Route
              path="/plots-chennai/:slug"
              element={<ProjectDetailPage />}
            />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/apartments-chennai" element={<ApartmentPage />} />
            <Route path="/plots-chennai" element={<PlotsPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/joint-ventures" element={<JointVentures />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/post/:slug" element={<PostPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
