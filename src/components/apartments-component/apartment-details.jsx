import React, { useState } from "react";
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
import apartCompleted1 from "../../assets/img/apartments/Blossom-icf-colony.jpg";
import apartCompleted2 from "../../assets/img/apartments/Blue-Bell.jpg";
import apartCompleted3 from "../../assets/img/apartments/Blue-Bell-PhaseII.jpg";
import apartCompleted4 from "../../assets/img/apartments/Caspia.jpg";
import apartCompleted5 from "../../assets/img/apartments/Cherry-Blossom1.jpg";
import apartCompleted6 from "../../assets/img/apartments/Cherry-Blossom2.jpg";

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
    id: 6,
    category: "Apartments-Ongoing",
    location: "Ayanambakkam",
    title: "Lake Breeze",
    image: room11,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
  {
    id: 7,
    category: "Apartments-Completed",
    location: "CHENNAI",
    title: "Blossom icf colony",
    image: apartCompleted1,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
  {
    id: 8,
    category: "Apartments-Completed",
    location: "AYANAMBAKKAM",
    title: "Blue Bell",
    image: apartCompleted2,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
  {
    id: 9,
    category: "Apartments-Completed",
    location: "AYANAMBAKKAM",
    title: "Blue Bell Phase II",
    image: apartCompleted3,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
  {
    id: 10,
    category: "Apartments-Completed",
    location: "KORATTUR",
    title: "Caspia (Mohan Gardens)",
    image: apartCompleted4,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
  {
    id: 11,
    category: "Apartments-Completed",
    location: "AYANAMBAKKAM",
    title: "Cherry Blossom I",
    image: apartCompleted5,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
  {
    id: 12,
    category: "Apartments-Completed",
    location: "Ayanambakkam",
    title: "Cherry Blossom II – Lavender",
    image: apartCompleted6,
    description:
      "GP homes is proud to announce yet another project, Lake Breeze, which has a range of beautifully designed apartments in Ayanambakkam.",
    project_status: "Ongoing Project",
    features: ["Units 14, BHK 2 & 3, Sq. ft. 852 - 1350, Floors Stilt + 3"],
    slug: "gp-valencia-ruby",
  },
];

const ApartmentDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("Apartments-Ongoing"); // Default focus
  // const [visibleRooms, setVisibleRooms] = useState(roomsData.slice(0, 12));
  const [visibleRooms, setVisibleRooms] = useState(
    roomsData.filter((room) => room.category === "Apartments-Ongoing")
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
            <p>GP Homes offers 1BHK, 2BHK, and 3BHK apartments for sale in Chennai, designed for modern living. As one of the best builders in Chennai, we provide high-quality, affordable homes in prime locations. Find your dream home with GP Homes today!</p>
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
              onClick={() => handleFilter("Apartments-Ongoing")}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30 fs-5 ${
                selectedFilter === "Apartments-Ongoing"
                  ? "btn-form1-submit-active"
                  : ""
              }`}
            >
              Ongoing
            </button>
          </div>

          <div className="col-md-4">
            <button
              onClick={() => handleFilter("Apartments-Upcoming")}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30 fs-5 ${
                selectedFilter === "Apartments-Upcoming"
                  ? "btn-form1-submit-active"
                  : ""
              }`}
            >
              UP Coming
            </button>
          </div>

          <div className="col-md-4">
            <button
              onClick={() => handleFilter("Apartments-Completed")}
              // className="btn-form1-submit mb-30"
              className={`btn-form1-submit mb-30 fs-5 ${
                selectedFilter === "Apartments-Completed"
                  ? "btn-form1-submit-active"
                  : ""
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
                    style={{ backgroundImage: `url(${room.image})` }}
                  >
                    {/* <span className="category">
                      <Link to="/">Book</Link>
                    </span> */}

                    <div className="square-container d-flex align-items-end justify-content-end">
                      <div
                        className="box-title w-100 p-2"
                        style={{ backgroundColor: "#222222d6" }}
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

                      {room.features[0] && room.features[0].trim() !== "" && (
                        <div className="row room-facilities mb-30">
                          {room.features[0].split(",").map((feature, index) => (
                            <div className="col-6" key={index}>
                              <ul>
                                <li>{feature.trim()}</li>
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                      {room.id != "6" ? (
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

export default ApartmentDetails;
