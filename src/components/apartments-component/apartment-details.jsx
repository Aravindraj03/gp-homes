import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import room1 from "../../assets/img/rooms/blazingstar.jpg";
import room2 from "../../assets/img/rooms/breezeway.jpg";
import room3 from "../../assets/img/rooms/elenza.jpg";
import room4 from "../../assets/img/rooms/valencia-emarald.jpg";
import room5 from "../../assets/img/rooms/valencia-ruby.jpg";

import room7 from "../../assets/img/rooms/gp-garden-bay2.jpg";
import room8 from "../../assets/img/rooms/ethulia.jpg";
import room9 from "../../assets/img/rooms/nammannai.jpg";
import room11 from "../../assets/img/rooms/lakebreeze.jpg";
import apartCompleted1 from "../../assets/img/apartments/blossom-icf.jpg";
import apartCompleted2 from "../../assets/img/apartments/Blue-Bell.jpg";
import apartCompleted3 from "../../assets/img/apartments/Blue-Bell-Phase-2.jpg";
import apartCompleted4 from "../../assets/img/apartments/Caspia.jpg";
import apartCompleted5 from "../../assets/img/apartments/Cherry-Blossom-1.jpg";
import apartCompleted6 from "../../assets/img/apartments/Cherry-Blossom-2.jpg";

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



const ApartmentDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedFilter, setSelectedFilter] = useState("On-going"); // Default focus
  // const [visibleRooms, setVisibleRooms] = useState(roomsData.slice(0, 12));
  const [visibleRooms, setVisibleRooms] = useState([]);
  const [dataDetails, setDataDetails] = useState([]);

  const handleFilter = (category) => {
    setSelectedFilter(category);
    const filteredRooms = dataDetails.filter(
      (room) => room.status === category
    );
    setVisibleRooms(filteredRooms);
  };

  const service = new ServiceWrapper();
  useEffect(() => {
    service
      .callGet("list-of-apartments",)
      .then((response) => {
        const data = response.data.Results;
        setDataDetails(data);
  
        // Initially filter "On-going"
        const initialFiltered = data.filter(room => room.status === "On-going");
        setVisibleRooms(initialFiltered);
      })
      .catch((error) => {
        console.error("Banner fetch error", error);
      });
  }, []);
  console.log(dataDetails, "dataDetails-------------------");
  return (
    <section
      className="rooms1 section-padding bg-cream apartments-page"
      data-scroll-index="1"
      id="apartments"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <div className="section-title">Our Projects</div> */}
            <h1 className="section-title m-0 p-0 mb-2">
              Apartments For Sale in Chennai
            </h1>
            <h2 className="mb-3">Flat For Sale in Chennai</h2>
            {/* <p>GP Homes, 1BHK, 2BHK, 3BHK, Apartment for Sale, Best Builders in Chennai</p> */}
            <p>
              GP Homes, 1BHK, 2BHK, 3BHK, Apartment for Sale, Best Builders in
              Chennai
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
            onClick={() => handleFilter("On-going")}
            className={`btn-form1-submit mb-30 fs-5 ${
              selectedFilter === "On-going" ? "btn-form1-submit-active" : ""
            }`}
          >
              Ongoing
            </button>
          </div>

          <div className="col-md-4">
          <button
            onClick={() => handleFilter("Up-coming")}
            className={`btn-form1-submit mb-30 fs-5 ${
              selectedFilter === "Up-coming" ? "btn-form1-submit-active" : ""
            }`}
          >
              UP Coming
            </button>
          </div>

          <div className="col-md-4">
          <button
            onClick={() => handleFilter("Completed")}
            className={`btn-form1-submit mb-30 fs-5 ${
              selectedFilter === "Completed" ? "btn-form1-submit-active" : ""
            }`}
          >
              Completed
            </button>
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
                      <Link
                        className="btn-form1-submit text-center"
                        to={`/apartments-chennai/${room.slug}`}
                      >
                        Details
                      </Link>
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

export default ApartmentDetails;
