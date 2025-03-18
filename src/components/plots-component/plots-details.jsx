import React, { useState } from "react";
import { Link } from "react-router-dom";

import room1 from "../../assets/img/rooms/blazingstar.jpg";
import room2 from "../../assets/img/rooms/breezeway.jpg";
import room3 from "../../assets/img/rooms/elenza.jpg";
import room4 from "../../assets/img/rooms/valencia-emarald.jpg";
import room5 from "../../assets/img/rooms/valencia-ruby.jpg";

import room7 from "../../assets/img/rooms/Garden-Bay-01.jpg";
import room8 from "../../assets/img/rooms/Ethuliya.jpg";
import room9 from "../../assets/img/rooms/Namanai.jpg";
import room10 from "../../assets/img/rooms/Pon-bhoomi.jpg";

const featureIcons = {
  Well: "bi bi-signpost-split",
  Black: "bi bi-signpost-split",
  "24/7": "bi bi-shield-shaded",
  Ready: "bi bi-building-fill-check",
  EB: "bi bi-lamp-fill",
  CCTV: "bi bi-camera-video-fill",
  Fenced: "bi bi-bricks",
  Potable: "bi bi-droplet-half",
  Fully: "bi bi-bricks",
  Branded: "bi bi-sun-fill",
  Grand: "bi bi-rainbow"
};

const getFeatureWithIcons = (feature) => {
  return feature
    .split(",") // Split features into an array
    .map((item) => {
      const trimmedItem = item.trim();
      const matchedKey = Object.keys(featureIcons).find((key) =>
        trimmedItem.includes(key)
      );

      return {
        text: trimmedItem,
        iconClass: matchedKey ? featureIcons[matchedKey] : "bi bi-check-circle",
      };
    });
};

const roomsData = [
  {
    id: 1,
    category: "Apartments-Ongoing",
    location: "Porur",
    title: "GP Blazing Star",
    image: room1,
    description:
      "Welcome to Blazing Star by GP Homes – a residential project located near Porur, one of the rapidly developing suburbs in Chennai. The project offers 2 & 3 BHK flats for sale with a stilt + 5 floors structure, providing a perfect blend of contemporary design and functionality.",
    project_status: "Ongoing Project",
    features: ["Units 25, BHK 2 & 3, Sq. ft. 845 – 1405, Floors Stilt + 5"],
    slug: "gp-blazing-star",
  },
  {
    id: 2,
    category: "Apartments-Ongoing",
    location: "Menambedu",
    title: "GP Breeze Way",
    image: room2,
    description:
      "Welcome to Breeze Way by GP Homes, a residential project located at Menambedu, one of the rapidly growing neighborhoods in Chennai. The project offers 2 & 3 BHK flats for sale with a stilt + 5 floors structure, providing a perfect blend of modern design and functionality.",
    project_status: "Ongoing Project",
    features: ["Units 29, BHK2 & 3, Sq. ft.817 – 1240, Floors Stilt + 5"],
    slug: "gp-breeze-way",
  },
  {
    id: 3,
    category: "Apartments-Ongoing",
    location: "Madhanadhapuram",
    title: "GP Homes Elanza",
    image: room3,
    description:
      "GP homes is proud to announce yet another project, GP Elanza, which has a range of beautifully designed apartments in Madhanadhapuram.",
    project_status: "Ongoing Project",
    features: ["Units 35, BHK 2 & 3, Sq. ft. 835 – 1326, Blocks 1"],
    slug: "gp-homes-elanza",
  },
  {
    id: 4,
    category: "Apartments-Ongoing",
    location: "Ayanambakkam",
    title: "GP Valencia Emarald",
    image: room4,
    description:
      "Welcome to GP Valencia Emerald, a new project that takes things a notch higher. And is a milestone in the journey of GP Homes",
    project_status: "Ongoing Project",
    features: ["Units 29, BHK 2 & 3, Sq. ft. 857 to 1305, Blocks Stilt + 4"],
    slug: "gp-valencia-emarald",
  },
  {
    id: 5,
    category: "Apartments-Ongoing",
    location: "Ayanambakkam",
    title: "GP Valencia Ruby",
    image: room5,
    description:
      "GP homes is proud to announce yet another project, GP Valencia Ruby, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 35, BHK 2 & 3, Sq. ft. 912 – 1580, Floors Stilt + 5"],
    slug: "gp-valencia-ruby",
  },

  {
    id: 11,
    category: "Plots-Ongoing",
    location: "Thiruvallur",
    title: "GP Pon Bhoomi",
    image: room10,
    description:
      "PonBhoomi symbolizes growth and prosperity. Investing in land is wiser than gold, as property values appreciate over time. Now is the ideal time to build your dream home in this serene paradise.",
    project_status: "Ongoing Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-ponBhoomi",
  },

  {
    id: 6,
    category: "Plots-Ongoing",
    location: "Athipet",
    title: "GP Midway Avenue",
    image: room5,
    description:
      "Midway Avenue in Athipet 2.0 offers modern living amidst nature's tranquility, with lush green landscapes at your doorstep.",
    project_status: "Ongoing Project",
    features: [
      "Well laid Tar Roads, 24/7 Security, Ready To Construct, EB Provided",
    ],
    slug: "gp-midway-avenue",
  },
  {
    id: 7,
    category: "Plots-Ongoing",
    location: "Kolathur",
    title: "GP Garden Bay",
    image: room7,
    description:
      "Garden Bay offers serene living near Anna Nagar, Chennai, with residential plots ideal for your dream home.",
    project_status: "Ongoing Project",
    features: [
      "Ready for Construction, Potable Water, Well laid Tar Roads, Fully Compound",
    ],
    slug: "gp-garden-bay",
  },

  {
    id: 8,
    category: "Plots-Ongoing",
    location: "Mogappair",
    title: "GP Ethulia",
    image: room8,
    description:
      "Ethulia by GP Homes in Mogappair offers 55 ready-to-build villa plots across 2.46 acres, ensuring prime location and value appreciation.",
    project_status: "Ongoing Project",
    features: [
      "Branded Solar Street Lights, Well Laid Blacktop Roads, Grand Entrance Arch, EB Provided",
    ],
    slug: "gp-ethulia",
  },
  {
    id: 9,
    category: "Plots-Ongoing",
    location: "Redhills",
    title: "GP Nanmanai",
    image: room9,
    description:
      "Nanmanai by GP Homes offers premium villa plots in a 1.5-acre sanctuary at Redhills, providing a peaceful retreat amidst lush greenery.",
    project_status: "Ongoing Project",
    features: [
      "Well laid Tar Roads, 24/7 Security, Ready To Construct, EB Provided",
    ],
    slug: "gp-nanmanai",
  },
  {
    id: 10,
    category: "Plots-Ongoing",
    location: "Thiruvallur",
    title: "GP Vijayalakshmi",
    image: room9,
    description:
      "GP Homes presents VL Nagar in Thiruvallur near Ikkadu, offering prime residential plots ideal for building your dream home.",
    project_status: "Ongoing Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-vijayalakshmi",
  },
];

const ApartmentDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("Plots-Ongoing"); // Default focus
  // const [visibleRooms, setVisibleRooms] = useState(roomsData.slice(0, 12));
  const [visibleRooms, setVisibleRooms] = useState(
    roomsData.filter((room) => room.category === "Plots-Ongoing")
  );

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setSelectedFilter(category);
    const filteredRooms =
      category === "All"
        ? roomsData
        : roomsData.filter((room) => room.category === category);
    setVisibleRooms(filteredRooms.slice(0, 12)); // Limit to 9 items
  };

  return (
    <section
      className="rooms1 section-padding bg-cream plots-page"
      data-scroll-index="1"
      id="plots"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <div className="section-title">Our Projects</div> */}
            <h1 className="section-title m-0 p-0 mb-2">
              Plots For Sale in Chennai
            </h1>
            <h2 className="mb-3">Residential Land For Sale in Chennai</h2>
            <p>
              GP Homes offers CMDA-approved residential plots for sale in
              Chennai, providing secure and premium real estate opportunities.
              As leading real estate developers in Chennai, we ensure
              well-planned plots in prime locations, perfect for building your
              dream home. Invest in a trusted name for a brighter future!
            </p>
          </div>
        </div>
      </div>

      <div className="container padding-bottom">
        <div className="row">
          {/* <div className="col-md-4">
            <button
              onClick={() => handleFilter("Villa")}
              className="btn-form1-submit"
            >
              Villa
            </button>
          </div> */}

          <div className="col-md-4">
            <button
              onClick={() => handleFilter("Plots-Ongoing")}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30 fs-5 ${
                selectedFilter === "Plots-Ongoing"
                  ? "btn-form1-submit-active"
                  : ""
              }`}
            >
              Ongoing
            </button>
          </div>

          <div className="col-md-4">
            <button
              onClick={() => handleFilter("Plots-Upcoming")}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30 fs-5 ${
                selectedFilter === "Plots-Upcoming"
                  ? "btn-form1-submit-active"
                  : ""
              }`}
            >
              UP Coming
            </button>
          </div>

          <div className="col-md-4">
            <button
              onClick={() => handleFilter("Plots-Completed")}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30 fs-5 ${
                selectedFilter === "Plots-Completed"
                  ? "btn-form1-submit-active"
                  : ""
              }`}
            >
              Completed
            </button>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-subtitle">GP Homes</div>
            <div className="section-title">Our Projects</div>
          </div>
        </div>
      </div> */}

      <div className="rooms3">
        <div className="container">
          <div className="row">
            {visibleRooms.map((room) => (
              <div className="col-md-4" key={room.id}>
                <div className="square-flip">
                  <div
                    className="square bg-img"
                    style={{ backgroundImage: `url(${room.image})` }}
                  >
                    {/* <span className="category">
                      <Link to="/">Book</Link>
                    </span> */}

                    <div className="square-container d-flex align-items-end justify-content-end">
                      <div
                        className="box-title w-100 p-2"
                        style={{ backgroundColor: "#f26522" }}
                      >
                        <h6>{room.location}</h6>
                        <h4>{room.title}</h4>
                      </div>
                    </div>
                    <div className="flip-overlay"></div>
                  </div>
                  <div className="square2">
                    <div className="square-container2">
                      <h6>{room.location}</h6>
                      <h4>{room.title}</h4>
                      <p>{room.description}</p>

                      {/* <div className="row room-facilities mb-30">
                        <div className="col-md-6">
                          <ul>
                            <li>
                              <i className="flaticon-group"></i> 1-2 Persons
                            </li>
                            <li>
                              <i className="flaticon-wifi"></i> Free Wifi
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li>
                              <i className="flaticon-bed"></i> Twin Bed
                            </li>
                            <li>
                              <i className="flaticon-breakfast"></i> Breakfast
                            </li>
                          </ul>
                        </div>
                      </div> */}

                      {room.features && room.features.length > 0 && (
                        <div className="row room-facilities mb-30">
                          {room.features.map((feature, index) => {
                            const featureItems = getFeatureWithIcons(feature);

                            return featureItems.map((item, subIndex) => (
                              <div
                                className="col-6"
                                key={`${index}-${subIndex}`}
                              >
                                <ul>
                                  <li className="fs-6">
                                    <i className={`${item.iconClass} me-2`}></i>{" "}
                                    {item.text}
                                  </li>
                                </ul>
                              </div>
                            ));
                          })}
                        </div>
                      )}

                      {/* <div className="btn-line">
                        <Link
                          to={
                            room.category === "Plots"
                              ? `/project-details/${room.slug}`
                              : `/project/${room.slug}`
                          }
                        >
                          Details
                        </Link>
                      </div> */}
                      <Link
                        className="btn-form1-submit text-center"
                        to={
                          room.category === "Plots-Ongoing"
                            ? `/plots-chennai/${room.slug}`
                            : `/apartments-chennai/${room.slug}`
                        }
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentDetails;
