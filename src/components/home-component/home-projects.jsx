import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import room1 from "../../assets/img/rooms/blazingstar.jpg";
import room2 from "../../assets/img/rooms/breezeway.jpg";
import room3 from "../../assets/img/rooms/elenza.jpg";
import room4 from "../../assets/img/rooms/valencia-emarald.jpg";
import room5 from "../../assets/img/rooms/Mid-way.jpg";

import room7 from "../../assets/img/rooms/Garden-Bay-01.jpg";
import room8 from "../../assets/img/rooms/Ethuliya.jpg";
import room9 from "../../assets/img/rooms/Namanai.jpg";
import room10 from "../../assets/img/rooms/Pon-bhoomi.jpg";
import room11 from "../../assets/img/rooms/lakebreeze.jpg";
import room12 from "../../assets/img/rooms/VijayaLakshmi-Nagar.jpg";
import room13 from "../../assets/img/rooms/valencia-ruby.jpg";

import bhkIcon from "../../assets/img/icons/BHK.png";
import aptIcon from "../../assets/img/icons/Apartment.png";
import aptIconWhite from "../../assets/img/icons/Apartments_White.png";
import plotIcon from "../../assets/img/icons/Plot-White.png";
import sqft from "../../assets/img/icons/Sq.Fi.png";
import stiltFloor from "../../assets/img/icons/Stilt+Floor.png";
import roadIcon from "../../assets/img/icons/Road.png";
import cctvIcon from "../../assets/img/icons/CCTV.png";
import ebIcon from "../../assets/img/icons/EB-Connection.png";
import wallIcon from "../../assets/img/icons/compund-wall.png";
import readyToConstruct from "../../assets/img/icons/Ready-to-cinstruct.png";
import security from "../../assets/img/icons/24-7-securiry.png";
import groundwater from "../../assets/img/icons/Ground-water.png";
import roadICon from "../../assets/img/icons/Road.png";
import compoundWall from "../../assets/img/icons/compund-wall.png";
import solarLight from "../../assets/img/icons/Solar-lights.png";
import archIcon from "../../assets/img/icons/Arch.png";
import { ServiceWrapper } from "../../service/ApiService";

const featureIcons = {
  Units: aptIcon,
  BHK: bhkIcon,
  "Sq. ft.": sqft,
  Floors: stiltFloor,
  Blocks: stiltFloor,
  Black: roadIcon,
  CCTV: cctvIcon,
  EB: ebIcon,
  Fenced: wallIcon,
  Ready: readyToConstruct,
  "24/7": security,
  Potable: groundwater,
  Well: roadICon,
  Fully: compoundWall,
  Solar: solarLight,
  Grand: archIcon,
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
    title: "GP Valencia Emerald",
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
    image: room13,
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
      "PonBhoomi promises growth and prosperity, making land a better investment than gold due to its appreciating value. Now is the ideal time to build your dream home in this serene paradise.",
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
      "Midway Avenue in Athipet 2.0 offers a perfect blend of modern living and natural tranquility, with lush green landscapes enhancing everyday life.",
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
      "Garden Bay offers serene living in Chennai near Anna Nagar, providing ideal residential plots for your dream home.",
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
      "Ethulia by GP Homes in Mogappair offers 55 ready-to-build villa plots across 2.46 acres, ensuring a prime location with great value appreciation.",
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
      "Nanmanai by GP Homes offers a 1.5-acre sanctuary in Redhills with premium villa plots (535 to 3130 sq. ft.), providing a peaceful retreat for happy and healthy family living.",
    project_status: "Ongoing Project",
    features: ["Black-Top Roads, 24/7 Security, Fully Fenced, EB Provided"],
    slug: "gp-nanmanai",
  },
  {
    id: 10,
    category: "Plots",
    location: "Thiruvallur",
    title: "GP Vijayalakshmi",
    image: room12,
    description:
      "Nanmanai by GP Homes offers happy and healthy family living, all together in a beautifully planned 1.5 - acre sanctuary. Located in the green lush surroundings of Redhills, our premium villa plots, range from 535 to 3130 sq. Ft., offers a peaceful retreat from the bustle of city life.",
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
  const [selectedFilter, setSelectedFilter] = useState("1"); // Default to Apartments
  const [dataDetails, setDataDetails] = useState([]);
  const [visibleRooms, setVisibleRooms] = useState([]);

  const handleFilter = (category) => {
    debugger;
    setSelectedCategory(category);
    setSelectedFilter(category);
    
    if (dataDetails.length > 0) {
      const filteredRooms = dataDetails.filter(
        (room) => room.status === "On-going" && room.project_type === category
      );
      setVisibleRooms(filteredRooms);
    }
  };

  const service = new ServiceWrapper();
  
  useEffect(() => {
    service
      .callGet("list-of-apartments")
      .then((response) => {
        const data = response.data.Results;
        setDataDetails(data);
        
        // Initially filter "On-going" and Apartments (project_type "1")
        const initialFiltered = data.filter(
          (room) => room.status === "On-going" && room.project_type === "1"
        );
        setVisibleRooms(initialFiltered);
      })
      .catch((error) => {
        console.error("Banner fetch error", error);
      });
  }, []);

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
  const navigate = useNavigate();
  // const handleDetailsClick = async (slugLink) => {
  //   try {
  //     const response = await fetch(
  //       "https://cms.gphomes.in/api/apartment-details",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "gp-web-token": "sdswkhsADWRjfh9Thwn8rn6Mybd",
  //         },
  //         body: JSON.stringify({ slug: slugLink }),
  //       }
  //     );

  //     const data = await response.json();
  //     console.log("Response:", data);

  //     navigate(`/apartments-chennai/${slugLink}`);
  //   } catch (error) {
  //     console.error("API call failed", error);
  //   }
  // };

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
              onClick={() => handleFilter("1")}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30  ${
                selectedFilter === "1" ? "btn-form1-submit-active" : ""
              }`}
            >
              <img
                src={aptIconWhite}
                alt="Apartment"
                style={{ width: "40px", marginRight: "1rem" }}
              />
              Apartments
            </button>
          </div>
          <div className="col-md-6">
            <button
              onClick={() => handleFilter("3")}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30 ${
                selectedFilter === "3" ? "btn-form1-submit-active" : ""
              }`}
            >
              <img
                src={plotIcon}
                alt="Apartment"
                style={{ width: "40px", marginRight: "1rem" }}
              />
              Plots
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-subtitle">GP Homes</div>
            <div className="section-title">
              Real Estate Developers in Chennai
            </div>
          </div>
        </div>
      </div>

      <div className="rooms3">
        <div className="container">
          <div className="row">
            {visibleRooms
              .filter((room) => room.project_type === selectedFilter)
              .map((room) => (
                <div className="col-md-4" key={room.id}>
                  <div className="square-flip">
                    <div
                      className="square bg-img"
                      style={{
                        backgroundImage: `url(https://cms.gphomes.in//storage/${room.banner_image})`,
                      }}
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
                          <h4>{room.name}</h4>
                        </div>
                      </div>
                      <div className="flip-overlay"></div>
                    </div>
                    <div className="square2">
                      <div className="square-container2">
                        <h6>{room.location}</h6>
                        <h4>{room.name}</h4>
                        <p>{room.description}</p>
                        <div className="row room-facilities">
                          <ul className="row">
                            <li className="fs-6 col-6">
                              <img
                                src={aptIcon}
                                alt="icons"
                                style={{
                                  width: "25px",
                                  marginRight: "8px",
                                }}
                              ></img>
                              Units {room.total_units}
                            </li>
                            <li className="fs-6 col-6">
                              <img
                                src={bhkIcon}
                                alt="icons"
                                style={{
                                  width: "25px",
                                  marginRight: "8px",
                                }}
                              ></img>
                              BHK {room.bhk}
                            </li>
                            <li className="fs-6 col-6">
                              <img
                                src={sqft}
                                alt="icons"
                                style={{
                                  width: "25px",
                                  marginRight: "8px",
                                }}
                              ></img>
                              Sq. ft.{room.sq_ft}
                            </li>
                            <li className="fs-6 col-6">
                              <img
                                src={stiltFloor}
                                alt="icons"
                                style={{
                                  width: "25px",
                                  marginRight: "8px",
                                }}
                              ></img>
                              Floors Stilt +{room.no_of_blocks_or_floors}
                            </li>
                          </ul>
                        </div>

                        {/* {room.status === "On-going" && (
                          <button
                            className="btn-form1-submit text-center"
                            onClick={() => handleDetailsClick(room.slug)}
                          >
                            Details
                          </button>
                        )} */}

                        {/* {room.features && room.features.length > 0 && (
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
                                    <img
                                      src={item.iconClass}
                                      alt="icons"
                                      style={{
                                        width: "25px",
                                        marginRight: "8px",
                                      }}
                                    ></img>
                                    {item.text}
                                  </li>
                                </ul>
                              </div>
                            ));
                          })}
                        </div>
                      )} */}
                        {room.status === "On-going" && (<Link
                        className="btn-form1-submit text-center"
                        to={`/apartments-chennai/${room.slug}`}
                      >
                        Details
                      </Link>)}

                        {/* {room.id != "6" ? (
                        <Link
                          className="btn-form1-submit text-center"
                          to={
                            room.category === "Plots-chennai"
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
                      )} */}
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
