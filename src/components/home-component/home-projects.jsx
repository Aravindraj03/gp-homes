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
import room11 from "../../assets/img/rooms/lakebreeze.jpg";

const featureIcons = {
  Units: "bi bi-building-add",
  BHK: "bi bi-123",
  "Sq. ft.": "bi bi-rulers",
  Floors: "bi bi-code-square",
};

const roomsData = [
  {
    id: 1,
    category: "Apartments",
    location: "Porur",
    title: "GP Blazing Star",
    image: room1,
    description:
      "Welcome to Blazing Star by GP Homes – a residential project located near Porur, one of the rapidly developing suburbs in Chennai.",
    project_status: "Ongoing Project",
    features: ["Units 25, BHK 2 & 3, Sq. ft. 845 – 1405, Floors Stilt + 5"],
    slug: "gp-blazing-star",
  },
  {
    id: 2,
    category: "Apartments",
    location: "Menambedu",
    title: "GP Breeze Way",
    image: room2,
    description:
      "Welcome to Breeze Way by GP Homes, a residential project located at Menambedu, one of the rapidly growing neighborhoods in Chennai.",
    project_status: "Ongoing Project",
    features: ["Units 29, BHK2 & 3, Sq. ft.817 – 1240, Floors Stilt + 5"],
    slug: "gp-breeze-way",
  },
  {
    id: 3,
    category: "Apartments",
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
    category: "Apartments",
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
    category: "Apartments",
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
    id: 12,
    category: "Plots",
    location: "Thiruvallur",
    title: "GP Pon Bhoomi",
    image: room10,
    description:
      "PonBhoomi isn’t just a name—it’s a promise of growth and prosperity. Investing in land is a better option than gold, as property values continue to appreciate over time. Now is the perfect time to build your dream home and settle in this serene paradise.",
    project_status: "Ongoing Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-ponBhoomi",
  },

  {
    id: 6,
    category: "Plots",
    location: "Athipet",
    title: "GP Midway Avenue",
    image: room5,
    description:
      "Midway Avenue in Athipet 2.0, an oasis where modern living blends seamlessly with the tranquility of nature. Imagine beginning each day with the soothing sight of lush, green landscapes right outside your doorstep.",
    project_status: "Ongoing Project",
    features: [
      "Black-Top Roads, 24/7 Security, Ready To Construct, EB Provided",
    ],
    slug: "gp-midway-avenue",
  },
  {
    id: 7,
    category: "Plots",
    location: "Kolathur",
    title: "GP Garden Bay",
    image: room7,
    description:
      "Garden Bay is the epitome of serene living in the heart of Chennai. Located in the thriving area of near Anna Nagar, these residential plots provide the perfect foundation for your dream home.",
    project_status: "Ongoing Project",
    features: [
      "Ready for Construction, Potable Water, Well laid Tar Roads, Fully Compound",
    ],
    slug: "gp-garden-bay",
  },

  {
    id: 8,
    category: "Plots",
    location: "Mogappair",
    title: "GP Ethulia",
    image: room8,
    description:
      "Ethulia stands as an exemplary plot-based project by GP Homes in the highly sought-after Mogappair area, it presents 55 ready-to-build villa plots spanning 2.46 acres. This premier plotted development promises a prime location for value appreciation.",
    project_status: "Ongoing Project",
    features: [
      "Solar Lights, Black-top Roads, Grand Entrance Arch, EB Provided",
    ],
    slug: "gp-ethulia",
  },
  {
    id: 9,
    category: "Plots",
    location: "Redhills",
    title: "GP Nanmanai",
    image: room9,
    description:
      "Nanmanai by GP Homes offers happy and healthy family living, all together in a beautifully planned 1.5 - acre sanctuary. Located in the green lush surroundings of Redhills, our premium villa plots, range from 535 to 3130 sq. Ft., offers a peaceful retreat from the bustle of city life.",
    project_status: "Ongoing Project",
    features: ["Black-Top Roads, 24/7 Security, Fully Fenced, EB Provided"],
    slug: "gp-nanmanai",
  },
  {
    id: 10,
    category: "Plots",
    location: "Thiruvallur",
    title: "GP Vijayalakshmi",
    image: room9,
    description:
      "GP Homes is proud to introduce VL Nagar (Vijaya Lakshmi Nagar), a prestigious residential project located in Thiruvallur, near Ikkadu. This exceptional development offers a unique opportunity to own a piece of land in a prime location, perfect for building your dream home.",
    project_status: "Ongoing Project",
    features: ["Black-Top Roads, CCTV, EB Provided, Fenced Wall"],
    slug: "gp-vijayalakshmi",
  },
  {
    id: 11,
    category: "Apartments",
    location: "Korattur",
    title: "GP Lake Breeze",
    image: room11,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
];

const HomeProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("Apartments"); // Default focus
  // const [visibleRooms, setVisibleRooms] = useState(roomsData.slice(0, 12));
  const [visibleRooms, setVisibleRooms] = useState(
    roomsData.filter((room) => room.category === "Apartments")
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
          iconClass: matchedKey
            ? featureIcons[matchedKey]
            : "bi bi-check-circle",
        };
      });
  };

  return (
    <section
      className="rooms1 section-padding bg-cream"
      data-scroll-index="1"
      id="apartments"
    >
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

          <div className="col-md-6">
            <button
              onClick={() => handleFilter("Apartments")}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30  ${
                selectedFilter === "Apartments" ? "btn-form1-submit-active" : ""
              }`}
            >
              Apartments
            </button>
          </div>
          <div className="col-md-6">
            <button
              onClick={() => handleFilter("Plots")}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30 ${
                selectedFilter === "Plots" ? "btn-form1-submit-active" : ""
              }`}
            >
              Plots
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-subtitle">GP Homes</div>
            <div className="section-title">Our Projects</div>
          </div>
        </div>
      </div>

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
                      <div className="box-title w-100 p-2" style={{backgroundColor:"#e16e38"}}>
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

                      {room.id != "11" ? (
                        <Link
                          className="btn-form1-submit text-center"
                          to={
                            room.category === "Plots"
                              ? `/plots-chennai/${room.slug}`
                              : `/apartments-chennai/${room.slug}`
                          }
                        >
                          Details
                        </Link>
                      ) : (
                        <div className="btn-form1-submit text-center">
                          Details
                        </div>
                      )}
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

export default HomeProjects;
