import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate
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
        {/* 🔹 Redirect old blog URLs to home */}
  <Route
    path="/what-are-the-benefits-of-buying-a-flat-in-padur"
    element={<Navigate to="/" replace />}
  />
  <Route
    path="/find-the-perfect-plot-of-land-for-your-business-in-thirunindravur"
    element={<Navigate to="/" replace />}
  />

  {/* 🔹 Redirect specific plots to apartments page */}
  <Route
    path="/plots-chennai/gp-valencia-emarald-2bhk"
    element={<Navigate to="/apartments-chennai" replace />}
  />
  <Route
    path="/plots-chennai/gp-blazing-star-2bhk"
    element={<Navigate to="/apartments-chennai" replace />}
  />
  <Route
    path="/plots-chennai/gp-valencia-emarald-3bhk"
    element={<Navigate to="/apartments-chennai" replace />}
  />
  <Route
    path="/plots-chennai/gp-valencia-ruby-2bhk"
    element={<Navigate to="/apartments-chennai" replace />}
  />
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
    "/plots-chennai/gp-blazing-star": {
      title: "GP Blazing Star- Buy Apartments, Flats in Porur",
      description:
        "GP Blazing Star offers premium apartments in Porur. Find your dream home with modern amenities in a prime location. Explore now!",
    },
    "/apartments-chennai/gp-breeze-way": {
      title: "GP Breeze Way- Buy Apartments, Flats in Menambedu",
      description:
        "GP Breeze Way offers premium apartments in Menambedu. Find your dream home with top amenities in a prime location. Explore now!",
    },
    "/plots-chennai/gp-breeze-way": {
      title: "GP Breeze Way- Buy Apartments, Flats in Menambedu",
      description:
        "GP Breeze Way offers premium apartments in Menambedu. Find your dream home with top amenities in a prime location. Explore now!",
    },
    "/apartments-chennai/gp-homes-elanza": {
      title: " GP Elanza- Buy Apartments, Flats in Madhanadhapuram",
      description:
        "GP Elanza offers premium apartments in Madhanadhapuram. Experience luxury living with top amenities in a prime location. Explore now!",
    },
    "/plots-chennai/gp-homes-elanza": {
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
    "/plots-chennai/gp-valencia-emarald": {
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
    "/plots-chennai/gp-valencia-ruby": {
      title:
        "GP Homes Valencia Ruby- Buy Apartments, Flats in Ayanambakkam",
      description:
        "GP Homes Valencia Ruby offers luxurious apartments in Ayanambakkam. Find your dream home with modern amenities in a prime location. Enquire now!",
    },
    "/apartments-chennai/gp-blazing-star/gp-blazing-star-2bhk": {
      title: "GP Blazing Star: 2BHK Flats for Sale in PORUR",
      description:
        "GP Blazing Star by GP Homes offers premium 2BHK flats for sale in Porur. Modern amenities, prime location, and quality living await you. Book your site visit today!"
    },
    "/plots-chennai/gp-blazing-star/gp-blazing-star-2bhk": {
      title: "GP Blazing Star: 2BHK Flats for Sale in PORUR",
      description:
        "GP Blazing Star by GP Homes offers premium 2BHK flats for sale in Porur. Modern amenities, prime location, and quality living await you. Book your site visit today!"
    },

    "/apartments-chennai/gp-blazing-star/gp-blazing-star-3bhk":{
      title: " GP Blazing Star: 3BHK Flats for Sale in PORUR",
      description:"GP Blazing Star by GP Homes offers spacious 3BHK flats for sale in Porur. Enjoy modern living, premium amenities, and excellent connectivity. Book your visit today!"
    },
    "/plots-chennai/gp-blazing-star/gp-blazing-star-3bhk":{
      title: " GP Blazing Star: 3BHK Flats for Sale in PORUR",
      description:"GP Blazing Star by GP Homes offers spacious 3BHK flats for sale in Porur. Enjoy modern living, premium amenities, and excellent connectivity. Book your visit today!"
    },

    "/apartments-chennai/gp-breeze-way/gp-breeze-way-2bhk": {
      title: "GP Breeze Way: 2BHK Flats for Sale in Menambedu",
      description:"GP Breeze Way by GP Homes offers spacious 2BHK flats for sale in Menambedu. Enjoy modern design, prime location, and top amenities. Schedule your visit today!"
    },
    "/plots-chennai/gp-breeze-way/gp-breeze-way-2bhk": {
      title: "GP Breeze Way: 2BHK Flats for Sale in Menambedu",
      description:"GP Breeze Way by GP Homes offers spacious 2BHK flats for sale in Menambedu. Enjoy modern design, prime location, and top amenities. Schedule your visit today!"
    },

    "/apartments-chennai/gp-breeze-way/gp-breeze-way-3bhk": {
      title: "GP Breeze Way: 3BHK Flats for Sale in Menambedu",
      description:"GP Breeze Way offers premium 3BHK flats for sale in Menambedu. Enjoy modern living, top amenities, and great connectivity with GP Homes. Book your site visit today!"
    },
    "/plots-chennai/gp-breeze-way/gp-breeze-way-3bhk": {
      title: "GP Breeze Way: 3BHK Flats for Sale in Menambedu",
      description:"GP Breeze Way offers premium 3BHK flats for sale in Menambedu. Enjoy modern living, top amenities, and great connectivity with GP Homes. Book your site visit today!"
    },

    "/apartments-chennai/gp-homes-elanza/gp-homes-elanza-2bhk": {
      title: " 2BHK Flats for Sale in Madhanadhapuram",
      description:
        "GP Homes offers well-designed 2BHK flats for sale in Madhanandhapuram. Enjoy comfort, connectivity, and quality living in a prime location. Book your site visit now!"
    },

    "/plots-chennai/gp-homes-elanza/gp-homes-elanza-2bhk": {
      title: " 2BHK Flats for Sale in Madhanadhapuram",
      description:
        "GP Homes offers well-designed 2BHK flats for sale in Madhanandhapuram. Enjoy comfort, connectivity, and quality living in a prime location. Book your site visit now!"
    },

    "/apartments-chennai/gp-homes-elanza/gp-homes-elanza-3bhk": {
      title: "3BHK Flats for Sale in Madhanadhapuram",
      description: "GP Homes offers spacious 3BHK flats for sale in Madhanadhapuram. Experience modern living, prime location, and superior construction. Book your site visit today!"
    },

    "/plots-chennai/gp-homes-elanza/gp-homes-elanza-3bhk": {
      title: "3BHK Flats for Sale in Madhanadhapuram",
      description: "GP Homes offers spacious 3BHK flats for sale in Madhanadhapuram. Experience modern living, prime location, and superior construction. Book your site visit today!"
    },

    "/apartments-chennai/gp-valencia-emarald/gp-valencia-emarald-2bhk": {
      title : " GP Valencia Emerald: 2BHK Flats for Sale in Ayanambakkam",
      description : " GP Valencia Emerald by GP Homes offers elegant 2BHK flats for sale in Ayanambakkam. Modern design, prime location, and premium amenities await. Book your visit now!"
    },
    "/plots-chennai/gp-valencia-emarald/gp-valencia-emarald-2bhk": {
      title : " GP Valencia Emerald: 2BHK Flats for Sale in Ayanambakkam",
      description : " GP Valencia Emerald by GP Homes offers elegant 2BHK flats for sale in Ayanambakkam. Modern design, prime location, and premium amenities await. Book your visit now!"
    },

    "/apartments-chennai/gp-valencia-emarald/gp-valencia-emarald-3bhk": {
      title : "GP Valencia Emerald: 3BHK Flats for Sale in Ayanambakkam",
      description : "GP Valencia Emerald by GP Homes offers premium 3BHK flats for sale in Ayanambakkam. Enjoy modern living, prime location, and top-class amenities. Book your visit today!"
    },
    "/plots-chennai/gp-valencia-emarald/gp-valencia-emarald-3bhk": {
      title : "GP Valencia Emerald: 3BHK Flats for Sale in Ayanambakkam",
      description : "GP Valencia Emerald by GP Homes offers premium 3BHK flats for sale in Ayanambakkam. Enjoy modern living, prime location, and top-class amenities. Book your visit today!"
    },

    "/apartments-chennai/gp-valencia-ruby/gp-valencia-ruby-2bhk": {
      title : "GP Homes Valencia Ruby- Buy 2BHK Apartments, Flats in Ayanambakkam",
      description : "GP Homes Valencia Ruby offers luxurious 2BHK apartments in Ayanambakkam. Find your dream home with modern amenities in a prime location. Enquire now!"
    },
    "/plots-chennai/gp-valencia-ruby/gp-valencia-ruby-2bhk": {
      title : "GP Homes Valencia Ruby- Buy 2BHK Apartments, Flats in Ayanambakkam",
      description : "GP Homes Valencia Ruby offers luxurious 2BHK apartments in Ayanambakkam. Find your dream home with modern amenities in a prime location. Enquire now!"
    },

    "/apartments-chennai/gp-valencia-ruby/gp-valencia-ruby-3bhk": {
      title : "GP Homes Valencia Ruby: 3BHK Flats for Sale in Ayanambakkam",
      description : "GP Homes Valencia Ruby offers premium 3BHK flats for sale in Ayanambakkam. Enjoy modern design, top amenities, and a prime location. Book your site visit today!"
    },

    "/plots-chennai/gp-valencia-ruby/gp-valencia-ruby-3bhk": {
      title : "GP Homes Valencia Ruby: 3BHK Flats for Sale in Ayanambakkam",
      description : "GP Homes Valencia Ruby offers premium 3BHK flats for sale in Ayanambakkam. Enjoy modern design, top amenities, and a prime location. Book your site visit today!"
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
      "/plots-chennai/gp-fairmont": {
      title: "GP Fairmont: Plots in Parivakkam Chennai",
      description: "GP Fairmont by GP Homes offers premium plots for sale in Parivakkam, Chennai. Build your dream home in a prime location with great connectivity. Book your site visit today!"
    },

    "/plots-chennai/gp-serenevista": {
      title: "GP Serene Vista: Plots in Ambattur, Residential Land For Sale ",
      description:
        " GP Homes presents GP Serene Vista – Premium residential plots for sale in Ambattur. Secure approved land with excellent connectivity for your dream home."
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
      title: "GP Homes - Testimonials",
      description:
        "Read what our happy homeowners say about GP Homes! Discover genuine testimonials and experiences from satisfied customers who chose quality living with us.",
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
    "/enquiry-form": {
      title:" GP Homes - Enquiry Form",
      description:
        "Fill out the GP Homes Enquiry Form to get details on flats and plots, pricing, and site visits. Our team will contact you shortly to assist with your dream home."
    },
    "/thank-you": {
      title: "GP Homes - Thank You",
      description:
        "Thank you for connecting with GP Homes! Our team will get in touch with you shortly to assist with your dream home. We appreciate your interest!",
  },
  "/plots/enquiry-form": {
    title: "GP Homes - Plots Enquiry Form",
    description:
      "Enquire now with GP Homes for premium residential plots in prime Chennai locations. Fill out the form to get site details, pricing, and booking assistance today!",
  }
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
