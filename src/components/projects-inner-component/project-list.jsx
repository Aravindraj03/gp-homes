import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import listimg1 from "../../assets/img/slider/4.jpg";
import listimg2 from "../../assets/img/slider/3.jpg";
import listimg3 from "../../assets/img/slider/3.jpg";
import listimg4 from "../../assets/img/slider/3.jpg";
import listimg5 from "../../assets/img/slider/2.jpg";



const ProjectsList = ({ project, projectDetails }) => {
  const projects = projectDetails?.projects[0].flats || [];
  const projectFacilities = projectDetails?.project_amenity || [];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12
          ">
            {projects.map((flat, index) => (
              <div
                key={flat.id}
                className={`rooms2 mb-90 ${
                  index % 2 !== 0 ? "left" : ""
                } `}
                data-animate-effect="fadeInUp"
              >
                <figure className="col-md-6">
                  <img
                    src={`https://cms.gphomes.in/storage/${flat.flat_image}`}
                    alt={flat.name}
                    className="img-fluid"
                  />
                </figure>

                <div className="caption">
                  <h3>{flat.name}</h3>
                  <p>{flat.short_description}</p>
                  <div className="row room-facilities">
                    {project.facilities.map((facility, facilityIndex) => (
                      <div className="col-md-4" key={facilityIndex}>
                        <ul>
                          <li>
                          <img src={facility[1]} alt={facility[0]} style={{width:"35px", marginRight:"5px"}} /> {facility[0]}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                  <hr className="border-2" />
                  <div className="info-wrapper">
                    <div className="more">
                      <Link
                        to={`/plots-chennai/${flat.id}`}
                        className="link-btn"
                        tabIndex="0"
                        style={{ fontWeight: "800" }}
                      >
                        Details <i className="ti-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="butn-dark">
                      <ScrollLink
                        to="reservation-sec"
                        smooth={true}
                        duration={500}
                        offset={-70}
                      >
                        <span>Book Now</span>
                      </ScrollLink>
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

export default ProjectsList