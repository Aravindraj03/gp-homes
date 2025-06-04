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
  // console.log("Current Route:", location.pathname);
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
    "/apartments-chennai/gp-blazing-star": {
      title: "GP Blazing Star- Buy Apartments, Flats in Porur",
      description:
        "GP Blazing Star offers premium apartments in Porur. Find your dream home with modern amenities in a prime location. Explore now!",
    },
    "/apartments-chennai/gp-breeze-way": {
      title: "GP Breeze Way- Buy Apartments, Flats in Menambedu",
      description:
        "GP Breeze Way offers premium apartments in Menambedu. Find your dream home with top amenities in a prime location. Explore now!",
    },
    "/apartments-chennai/gp-homes-elanza": {
      title: " GP Elanza- Buy Apartments, Flats in Madhanadhapuram",
      description:
        "GP Elanza offers premium apartments in Madhanadhapuram. Experience luxury living with top amenities in a prime location. Explore now!",
    },
    "/apartments-chennai/gp-valencia-emarald": {
      title:
        "GP Valencia Emarald- Buy Apartments, Flats in Ayanambakkam",
      description:
        "GP Valencia Emerald offers premium apartments in Ayanambakkam. Experience luxury living with modern amenities in a prime location. Explore now!",
    },
    "/apartments-chennai/gp-valencia-ruby": {
      title:
        "GP Homes Valencia Ruby- Buy Apartments, Flats in Ayanambakkam",
      description:
        "GP Homes Valencia Ruby offers luxurious apartments in Ayanambakkam. Find your dream home with modern amenities in a prime location. Enquire now!",
    },
    "/apartments-chennai/gp-blazing-star/gp-blazing-star-2bhk": {
      title: "GP Blazing Star- Buy 2BHK Apartments, Flats in Porur",
      description:
        "GP Blazing Star offers premium 2BHK apartments in Porur. Find your dream home with modern amenities in a prime location. Explore now!"
    },

    "/apartments-chennai/gp-blazing-star/gp-blazing-star-3bhk":{
      title: " GP Blazing Star- Buy 3BHK Apartments, Flats in Porur",
      description:"GP Blazing Star offers premium 3BHK apartments in Porur. Find your dream home with modern amenities in a prime location. Explore now!"
    },

    "/apartments-chennai/gp-breeze-way/gp-breeze-way-2bhk": {
      title: "GP Breeze Way- Buy 2BHK Apartments, Flats in Menambedu",
      description:"GP Breeze Way offers premium 2BHK apartments in Menambedu. Find your dream home with top amenities in a prime location. Explore now!"
    },

    "/apartments-chennai/gp-breeze-way/gp-breeze-way-3bhk": {
      title: "GP Breeze Way- Buy 3BHK Apartments, Flats in Menambedu",
      description:"GP Breeze Way offers premium 3BHK apartments in Menambedu. Find your dream home with top amenities in a prime location. Explore now!"
    },

    "/apartments-chennai/gp-homes-elanza/gp-homes-elanza-2bhk": {
      title: "GP Elanza- Buy 2BHK Apartments, Flats in Madhanadhapuram",
      description:
        "GP Elanza offers premium 2BHK apartments in Madhanadhapuram. Experience luxury living with top amenities in a prime location. Explore now!"
    },

    "/apartments-chennai/gp-homes-elanza/gp-homes-elanza-3bhk": {
      title: "GP Elanza- Buy 3BHK Apartments, Flats in Madhanadhapuram",
      description: "GP Elanza offers premium 3BHK apartments in Madhanadhapuram. Experience luxury living with top amenities in a prime location. Explore now!"
    },

    "/apartments-chennai/gp-valencia-emarald/gp-valencia-emarald-2bhk": {
      title : " GP Valencia Emarald- Buy 2BHK Apartments, Flats in Ayanambakkam",
      description : "GP Valencia Emerald offers premium 2BHK apartments in Ayanambakkam. Experience luxury living with modern amenities in a prime location. Explore now!"
    },

    "/apartments-chennai/gp-valencia-emarald/gp-valencia-emarald-3bhk": {
      title : "GP Valencia Emarald- Buy 3BHK Apartments, Flats in Ayanambakkam",
      description : "GP Valencia Emerald offers premium 3BHK apartments in Ayanambakkam. Experience luxury living with modern amenities in a prime location. Explore now!"
    },

    "/apartments-chennai/gp-valencia-ruby/gp-valencia-ruby-2bhk": {
      title : "GP Homes Valencia Ruby- Buy 2BHK Apartments, Flats in Ayanambakkam",
      description : "GP Homes Valencia Ruby offers luxurious 2BHK apartments in Ayanambakkam. Find your dream home with modern amenities in a prime location. Enquire now!"
    },

    "/apartments-chennai/gp-valencia-ruby/gp-valencia-ruby-3bhk": {
      title : "GP Homes Valencia Ruby- Buy 3BHK Apartments, Flats in Ayanambakkam",
      description : "GP Homes Valencia Ruby offers luxurious 3BHK apartments in Ayanambakkam. Find your dream home with modern amenities in a prime location. Enquire now!"
    },

    "/plots-chennai": {
      title: "Buy Residential Plots, CMDA Approved Land for Sale in Chennai",
      description:
        "GP Homes offers CMDA-approved residential plots and land for sale in Chennai. Invest in prime locations with top amenities. Secure your dream property today!",
    },
    "/plots-chennai/gp-ponBhoomi": {
      title:
        " PonBhoomi- Buy Residential Plots, Land for Sale in Thiruvallur",
      description:
        "GP Homes PonBhoomi offers premium residential plots and CMDA-approved land for sale in Thiruvallur. Invest in your dream property with GP Homes today!",
    },
    "/plots-chennai/gp-midway-avenue": {
      title:
        "GP Midway Avenue- Buy Residential Plots, Land for Sale in Athipet",
      description:
        "GP Midway Avenue offers premium residential plots and CMDA-approved land for sale in Athipet. Secure your dream property in a prime location. Enquire now!",
    },
    "/plots-chennai/gp-garden-bay": {
      title: "GP Garden Bay- Buy Residential Plots, Land for Sale in Kolathur",
      description:
        "GP Garden Bay offers premium residential plots and CMDA-approved land for sale in Kolathur. Build your dream home in a prime location. Enquire now!",
    },
    "/plots-chennai/gp-ethulia": {
      title: "GP Ethulia- Buy Residential Plots, Land for Sale in Mogappair",
      description:
        "GP Ethulia offers premium residential plots and CMDA-approved land for sale in Mogappair. Secure your ideal plot in a prime location. Enquire now!",
    },
    "/plots-chennai/gp-nanmanai": {
      title: "GP Nanmanai- Buy Residential Plots, Land for Sale in Redhills",
      description:
        "GP Nanmanai offers premium residential plots and CMDA-approved land for sale in Redhills. Invest in a prime location for your dream home. Enquire now!",
    },
    "/plots-chennai/gp-vijayalakshmi": {
      title:
        "GP Vijayalakshmi- Buy Residential Plots, Land for Sale in Thiruvallur",
      description:
        "GP Vijayalakshmi offers premium residential plots and CMDA-approved land for sale in Thiruvallur. Secure your dream home location today. Enquire now!",
    },
    "/about-us": {
      title: "About us - GP Homes",
      description:
        "Learn about GP Homes, leading real estate developers and builders in Chennai. We offer quality apartments, flats, and residential projects designed for modern living.",
    },
    "/joint-ventures": {
      title: "Join Ventures - GP Homes",
      description:
        "Partner with GP Homes through exciting joint ventures. Collaborate with leading real estate developers in Chennai for innovative and successful projects.",
    },
    "/gallery": {
      title: "Gallery -  GP Homes",
      description:
        "Explore the GP Homes gallery showcasing our beautifully designed apartments, flats, and residential projects in Chennai. Discover your dream home with us today!",
    },
    "/tools": {
      title: "Tools - GP Homes",
      description:
        "Explore essential real estate tools at GP Homes to simplify your home-buying journey. Get insights on property trends, pricing, and more for smart investments in Chennai.",
    },
    "/testimonials": {
      title: "Testimonials - GP Homes",
      description:
        "Read what our happy homeowners say about GP Homes. Discover real experiences and testimonials from satisfied customers who found their dream homes with us.",
    },
    "/Careers": {
      title: "Careers - GP Homes",
      description:
        "Explore exciting career opportunities at GP Homes. Join our team of professionals and build a successful future in the real estate industry. Apply now!",
    },
    "/faq": {
      title: "FAQ’s - GP Homes",
      description:
        "Find answers to common questions about GP Homes, our projects, buying process, and more. Explore our FAQs for detailed information and expert guidance.",
    },
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
    "/blogs": {
      title: "Blogs - GP Homes Latest News & Updates",
      description:
        "Stay updated with the latest news, trends, and insights on real estate. Read GP Homes' blogs for expert advice, market updates, and home-buying tips.",
    },
  };

  const { title, description } = seoData[location.pathname] || seoData["/"];
  // console.log(seoData["/about-us"],"about data")
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://www.gphomes.in/${location.pathname}`} />
    </Helmet>
  );
};

export default App;
