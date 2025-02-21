import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LoadScripts = () => {
  const location = useLocation();

  useEffect(() => {
    const scripts = [
      "./js/jquery-3.6.3.min.js",
      "./js/jquery-migrate-3.0.0.min.js",
      "./js/scrollIt.min.js",
      "./js/owl.carousel.min.js",
      "./js/modernizr-2.6.2.min.js",
      "./js/imagesloaded.pkgd.min.js",
      "./js/jquery.isotope.v3.0.2.js",
      "./js/pace.js",
      "./js/popper.min.js",
      "./js/bootstrap.min.js",
      "./js/jquery.waypoints.min.js",
      "./js/jquery.stellar.min.js",
      "./js/jquery.magnific-popup.js",
      "./js/YouTubePopUp.js",
      "./js/select2.js",
      "./js/datepicker.js",
      "./js/smooth-scroll.min.js",
      "./js/custom.js",
    ];

    const loadScripts = () => {
      scripts.forEach((src) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (!existingScript) {
          const script = document.createElement("script");
          script.src = src;
          script.async = true;
          document.body.appendChild(script);
        }
      });
    };

    // Call the script loader whenever the route changes
    loadScripts();

    // Cleanup to avoid duplication
    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          script.remove();
        }
      });
    };
  }, [location]);

  return null;
};

export default LoadScripts;
