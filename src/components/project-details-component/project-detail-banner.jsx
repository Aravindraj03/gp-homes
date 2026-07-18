
// import React, { useRef } from "react";
// import { Link } from "react-router-dom";

// import slide1 from "../../assets/img/slider/3.jpg";
// import slide2 from "../../assets/img/slider/2.jpg";
// import slide3 from "../../assets/img/slider/5.jpg";

// const ProjectDetailBanner = ({ project }) => {
//   const nextSectionRef = useRef(null);

//   const handleScroll = () => {
//     if (nextSectionRef.current) {
//       nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };
 
//   const slides =
//     project?.banner_images && Array.isArray(project.banner_images) && project.banner_images.length > 0
//       ? project.banner_images.map((image, index) => ({ id: index + 1, image, overlay: 3 }))
//       : [
//           { id: 1, image: slide1, overlay: 3 },
//           { id: 2, image: slide2, overlay: 3 },
//           { id: 3, image: slide3, overlay: 3 },
//         ];

//   return (
//     <header className="header slider">
//       <div className="owl-carousel owl-theme">
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className="text-center item bg-img"
//             data-overlay-dark={slide.overlay}
//             style={{ backgroundImage: `url(${slide.image})` }}
//           ></div>
//         ))}
//       </div>
//       {/* Arrow Down */}
//       <div className="arrow bounce text-center">
//         <Link to="#projectDetailsSection" onClick={handleScroll} className="">
//           <i className="ti-arrow-down"></i>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default ProjectDetailBanner;

// slider for project details page start

// import React, { useRef } from "react";
// import { Link } from "react-router-dom";

// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// import slide1 from "../../assets/img/slider/3.jpg";
// import slide2 from "../../assets/img/slider/2.jpg";
// import slide3 from "../../assets/img/slider/5.jpg";

// const ProjectDetailBanner = ({ project }) => {
//   const nextSectionRef = useRef(null);

//   const handleScroll = () => {
//     if (nextSectionRef.current) {
//       nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   console.log("Project:", project);
//   console.log("Banner Images:", project?.banner_images);
  
//   const defaultSlides = [
//     { id: 1, image: slide1, overlay: 3 },
//     { id: 2, image: slide2, overlay: 3 },
//     { id: 3, image: slide3, overlay: 3 },
//   ];

  
//     const slides =
//     project?.banner_images?.length > 0
//       ? project.banner_images.map((image, index) => ({
//           id: index + 1,
//           image: image || slide1,
//         }))
//       : defaultSlides;

  

//   return (
//     <header className="header slider">
      
//         <OwlCarousel
//         className="owl-carousel owl-theme owl-projectDetail"
//         items={1}
//         loop
//         autoplay
//         dots
//         nav
//       >
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className="text-center item bg-img"
     
//             style={{ backgroundImage: `url(${slide.image})` }}
//           ></div>
//         ))}
//       </OwlCarousel>
//     </header>
//   );
// };

// export default ProjectDetailBanner;

// slider for project details page end

import { useRef } from "react";
import { Link } from "react-router-dom";
import slide1 from "../../assets/img/slider/3.jpg";
import slide2 from "../../assets/img/slider/2.jpg";
import slide3 from "../../assets/img/slider/5.jpg";

const ProjectDetailBanner = ({ project }) => {
  const nextSectionRef = useRef(null);

  const handleScroll = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log("Project:", project);
  console.log("Banner Images:", project?.banner_images);

  // Fallback images
  const defaultSlides = [
    { id: 1, image: slide1, overlay: 3 },
    { id: 2, image: slide2, overlay: 3 },
    { id: 3, image: slide3, overlay: 3 },
  ];

  // Use project images if valid, else default
  const slides =
    project?.banner_images &&
    Array.isArray(project.banner_images) &&
    project.banner_images.some((img) => img)
      ? project.banner_images.map((image, index) => ({
          id: index + 1,
          image: image || slide1, // Ensure no empty image values
          overlay: 3,
        }))
      : defaultSlides;

  return (
    <header className="header slider">
      <div className="owl-carousel owl-theme owl-projectDetail" >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="text-center item bg-img"
            // data-overlay-dark={slide.overlay}
            style={{ backgroundImage: `url(${slide.image})` }} // ✅ fixed syntax
          ></div>
        ))}
      </div>

      {/* Arrow Down */}
      {/* 
      <div className="arrow bounce text-center">
        <Link
          to="#projectDetailsSection"
          onClick={handleScroll}
          className="text-white"
        >
          <i className="ti-arrow-down"></i>
        </Link>
      </div>
      */}
    </header>
  );
};

export default ProjectDetailBanner;





