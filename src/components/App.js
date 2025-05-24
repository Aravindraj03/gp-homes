import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import LoadScripts from "./LoadScripts";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AOS from "aos";

import "../styles/plugins.css";
import "../styles/style.css";
import "bootstrap-4-react";
import "react-bootstrap";
import "react-icons/fa";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";

// Page Components
import HomePage from "./home-component/home-page";
import ProjectInnerPage from "./projects-inner-component/project-inner-page";
import ProjectDetailPage from "./project-details-component/project-detail-page";
import AboutPage from "./about-component/about-page";
import ContactPage from "./contact-component/contact-page";
import FAQPage from "./faq-component/faq-page";
import GalleryPage from "./gallery-component/gallery-page";
import PrivacyPage from "./privacy-component/privacy-page";
import JointVentures from "./joint-ventures-component/joint-ventures-page";
import TestimonialsPage from "./testimonials-component/testimonials-page";
import BlogsPage from "./blogs-component/blogs-page";
import PostPage from "./blogs-inner-component/post-page";
import ApartmentPage from "./apartments-component/apartments-page";
import PlotsPage from "./plots-component/plots-page";
import NotFound from "./not-found";
import ImagePopup from "./common/imagePopup";
import EnquiryForm from "./common/EnquiryForm";
import ThankYouPage from "./common/ThankYouPage";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter basename={"/"}>
        <SEOHandler />
        <LoadScripts />
        <ScrollToTop />
        <AppWrapper />
      </BrowserRouter>
    </HelmetProvider>
  );
}

// Wrapper to conditionally render <ImagePopup />
const AppWrapper = () => {
  const location = useLocation();

  const hideImagePopup =
    location.pathname.startsWith("/plots/enquiry-form") ||
    location.pathname.startsWith("/apartments/enquiry-form") ||
    location.pathname === "/thank-you";

  return (
    <Fragment>
      {!hideImagePopup && <ImagePopup />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments-chennai/:slug" element={<ProjectInnerPage />} />
        <Route path="/apartments-chennai/:slug/:slug" element={<ProjectDetailPage />} />
        <Route path="/plots-chennai/:slug" element={<ProjectDetailPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/apartments-chennai" element={<ApartmentPage />} />
        <Route path="/plots-chennai" element={<PlotsPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/joint-ventures" element={<JointVentures />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/post/:slug" element={<PostPage />} />
        <Route path="/:category/enquiry-form" element={<EnquiryForm />} />
        <Route path="/enquiry-form" element={<EnquiryForm />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

const SEOHandler = () => {
  const location = useLocation();
  const seoData = {
    "/": {
      title: "GP Homes: Top Real Estate Developers, Builders in Chennai",
      description:
        "GP Homes – Leading real estate developers & builders in Chennai, delivering premium homes with quality, innovation & trust. Find your dream home today!",
    },
    "/apartments-chennai": {
      title: "Buy 1BHK, 2BHK, 3BHK Apartments, Flats for Sale in Chennai",
      description:
        "GP Homes offers 1BHK, 2BHK, and 3BHK apartments and flats for sale in Chennai. Find your dream home with top amenities in prime locations. Enquire now!",
    },
    // ... other SEO routes ...
    "/contact-us": {
      title: "Contact us - GP Homes",
      description:
        "Get in touch with GP Homes for inquiries about our projects, bookings, and more. Contact us today for expert assistance in finding your dream home in Chennai.",
    },
    "/privacy-policy": {
      title: "Privacy Policy - GP Homes",
      description:
        "Read GP Homes' Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy and security are our top priorities.",
    },
  };

  const { title, description } = seoData[location.pathname] || seoData["/"];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="canonical"
        href={`https://www.gphomes.in${location.pathname}`}
      />
    </Helmet>
  );
};

export default App;
