import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import slideImg2 from "../../assets/img/slider/2.jpg";

import image1 from "../../assets/img/restaurant/1.jpg";
import image2 from "../../assets/img/spa/3.jpg";
import image3 from "../../assets/img/spa/2.jpg";
import image4 from "../../assets/img/spa/1.jpg";

import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";

const ProjectDetailSection = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section
      className="rooms-page section-padding"
      data-scroll-index="1"
      id="projectDetailsSection"
    >
      <div className="container">
        {/* Project Content */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-subtitle">{project.location}</div>
            <div className="section-title">{project.name}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            {Array.isArray(project.description) ? (
              project.description.map((desc, index) => (
                <p key={index} className="mb-30">
                  {desc}
                </p>
              ))
            ) : (
              <p className="mb-30">{project.description}</p>
            )}
            <div className="row">
              {(project.specifications_title ||
                project.specifications_desc ||
                project.facilities?.length > 0) && (
                <div className="col-md-12">
                  {project.specifications_title && (
                    <h6>{project.specifications_title}</h6>
                  )}
                  {project.specifications_desc && (
                    <p>{project.specifications_desc}</p>
                  )}
                  {project.facilities?.length > 0 && (
                    <div className="row room-facilities">
                      {project.facilities.map((facility, facilityIndex) => (
                        <div className="col-md-4" key={facilityIndex}>
                          <ul>
                            <li>
                              <i className={facility[1]}></i> {facility[0]}
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3 offset-md-1">
            <h6>{project.amenities_title}</h6>
            <p>{project.amenities_desc}</p>

            <ul className="list-unstyled page-list mb-30">
              {project.amenities.map((amenity, amenityIndex) => (
                <li key={amenityIndex}>
                  <div className="page-list-icon">
                    <span className={amenity[1]}></span>
                  </div>
                  <div className="page-list-text">
                    <p>{amenity[0]}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mt-4">
            <h6>{project.location_map_title}</h6>
            <p>{project.location_map_desc}</p>
          </div>
        </div>

        <section className="services mt-15 mb-30">
          <div className="container">
            {/* First Row */}
            {project.locations?.titles?.[0] &&
              project.locations?.location_highlights?.length > 0 && (
                <div className="row flex-center">
                  <div
                    className="col-md-6 p-0 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="img left">
                      <img src={project.locations.location_highlights_image} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div
                    className="col-md-6 p-0 bg-cream valign animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="content">
                      <div className="cont text-left">
                        <h6>{project.locations.titles[0]}</h6>
                        <ul className="list-unstyled page-list mb-30">
                          {project.locations.location_highlights.map(
                            (item, index) => (
                              <li key={index}>
                                <div className="page-list-icon">
                                  <span className="ti-check"></span>
                                </div>
                                <div className="page-list-text">
                                  <p>{item}</p>
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            {/* Second Row */}
            {project.locations?.titles?.[1] &&
              project.locations?.hospitals?.length > 0 && (
                <div className="row">
                  {/* Spa Center */}
                  <div
                    className="col-md-6 bg-cream p-0 order2 valign animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="content">
                      <div className="cont text-left">
                        <h6>{project.locations.titles[1]}</h6>
                        <ul className="list-unstyled page-list mb-30">
                          {project.locations.hospitals.map((item, index) => (
                            <li key={index}>
                              <div className="page-list-icon">
                                <span className="ti-check"></span>
                              </div>
                              <div className="page-list-text">
                                <p>{item}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 p-0 order1 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="img">
                      <img
                        src={project.locations.hospitals_image}
                        alt="Spa Center"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              )}

            {/* Third Row */}
            {project.locations?.titles?.[2] &&
              project.locations?.educational_institutions?.length > 0 && (
                <div className="row">
                  {/* Fitness Center */}
                  <div
                    className="col-md-6 p-0 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="img left">
                      <img
                        src={project.locations.educational_institutions_image}
                        alt="Fitness Center"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div
                    className="col-md-6 p-0 bg-cream valign animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="content">
                      <div className="cont text-left">
                        <h6>{project.locations.titles[2]}</h6>
                        <ul className="list-unstyled page-list mb-30">
                          {project.locations.educational_institutions.map(
                            (item, index) => (
                              <li key={index}>
                                <div className="page-list-icon">
                                  <span className="ti-check"></span>
                                </div>
                                <div className="page-list-text">
                                  <p>{item}</p>
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            {/* Fourth Row */}
            {project.locations?.titles?.[3] &&
              project.locations?.it_parks?.length > 0 && (
                <div className="row">
                  {/* Health Club & Pool */}
                  <div
                    className="col-md-6 bg-cream p-0 order2 valign animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="content">
                      <div className="cont text-left">
                        <h6>{project.locations.titles[3]}</h6>
                        <ul className="list-unstyled page-list mb-30">
                          {project.locations.it_parks.map((item, index) => (
                            <li key={index}>
                              <div className="page-list-icon">
                                <span className="ti-check"></span>
                              </div>
                              <div className="page-list-text">
                                <p>{item}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 p-0 order1 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="img">                     
                        <img
                          src={project.locations.it_parks_image}
                          alt="Health Club & Pool"
                          className="img-fluid"
                        />                     
                    </div>
                  </div>
                </div>
              )}

            {/* Fivth Row */}
            {project.locations?.titles?.[4] &&
              project.locations?.entertainment_zone?.length > 0 && (
                <div className="row">
                  <div
                    className="col-md-6 p-0 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="img left">
                      <img
                        src={project.locations.entertainment_zone_image}
                        alt="Fitness Center"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div
                    className="col-md-6 p-0 bg-cream valign animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="content">
                      <div className="cont text-left">
                        <h6>{project.locations.titles[4]}</h6>
                        <ul className="list-unstyled page-list mb-30">
                          {project.locations.entertainment_zone.map(
                            (item, index) => (
                              <li key={index}>
                                <div className="page-list-icon">
                                  <span className="ti-check"></span>
                                </div>
                                <div className="page-list-text">
                                  <p>{item}</p>
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </section>

        {/* <div className="row"> */}
        {/* Location Highlights */}
        {/* {project.locations?.titles?.[0] &&
            project.locations?.location_highlights?.length > 0 && (
              <div className="col-md-6 mt-4">
                <h6>{project.locations.titles[0]}</h6>
                <ul className="list-unstyled page-list mb-30">
                  {project.locations.location_highlights.map((item, index) => (
                    <li key={index}>
                      <div className="page-list-icon">
                        <span className="ti-check"></span>
                      </div>
                      <div className="page-list-text">
                        <p>{item}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}

        {/* Hospitals */}
        {/* {project.locations?.titles?.[1] &&
            project.locations?.hospitals?.length > 0 && (
              <div className="col-md-6 mt-4">
                <h6>{project.locations.titles[1]}</h6>
                <ul className="list-unstyled page-list mb-30">
                  {project.locations.hospitals.map((item, index) => (
                    <li key={index}>
                      <div className="page-list-icon">
                        <span className="ti-check"></span>
                      </div>
                      <div className="page-list-text">
                        <p>{item}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}

        {/* Educational Institutions */}
        {/* {project.locations?.titles?.[2] &&
            project.locations?.educational_institutions?.length > 0 && (
              <div className="col-md-6 mt-4">
                <h6>{project.locations.titles[2]}</h6>
                <ul className="list-unstyled page-list mb-30">
                  {project.locations.educational_institutions.map(
                    (item, index) => (
                      <li key={index}>
                        <div className="page-list-icon">
                          <span className="ti-check"></span>
                        </div>
                        <div className="page-list-text">
                          <p>{item}</p>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )} */}

        {/* IT Parks */}
        {/* {project.locations?.titles?.[3] &&
            project.locations?.it_parks?.length > 0 && (
              <div className="col-md-6 mt-4">
                <h6>{project.locations.titles[3]}</h6>
                <ul className="list-unstyled page-list mb-30">
                  {project.locations.it_parks.map((item, index) => (
                    <li key={index}>
                      <div className="page-list-icon">
                        <span className="ti-check"></span>
                      </div>
                      <div className="page-list-text">
                        <p>{item}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}

        {/* Entertainment Zone */}
        {/* {project.locations?.titles?.[4] &&
            project.locations?.entertainment_zone?.length > 0 && (
              <div className="col-md-6 mt-4">
                <h6>{project.locations.titles[4]}</h6>
                <ul className="list-unstyled page-list mb-30">
                  {project.locations.entertainment_zone.map((item, index) => (
                    <li key={index}>
                      <div className="page-list-icon">
                        <span className="ti-check"></span>
                      </div>
                      <div className="page-list-text">
                        <p>{item}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div> */}

        <>
          {project.images?.length > 0 && (
            <>
              <div className="row">
                <div className="col-md-12">
                  <div className="mt-15 mb-30 text-center">
                    <h6>Gallery</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                {project.images.map((image, index) => (
                  <div className="col-md-4 mt-4" key={index}>
                    <img
                      src={image}
                      className="img-fluid"
                      alt={`Floorplan ${index + 1}`}
                      loading="lazy"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setPhotoIndex(index);
                        setIsOpen(true);
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "path/to/placeholder-image.jpg";
                      }}
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {isOpen && (
            <Lightbox
              mainSrc={project.images[photoIndex]}
              nextSrc={project.images[(photoIndex + 1) % project.images.length]}
              prevSrc={
                project.images[
                  (photoIndex + project.images.length - 1) %
                    project.images.length
                ]
              }
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex(
                  (photoIndex + project.images.length - 1) %
                    project.images.length
                )
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % project.images.length)
              }
            />
          )}
        </>

        <section
          className="video-wrapper video section-padding bg-img bg-fixed mt-30 mb-30"
          data-overlay-dark="3"
          style={{ backgroundImage: `url(${slideImg2})` }}
        >
          <div className="container">
            <div className="row">
              <div className="text-center col-md-12">
                <a
                  className="vid"
                  href="https://youtu.be/7BGNAGahig8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="vid-butn">
                    <span className="icon">
                      <i className="ti-control-play"></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="row">
          <div className="col-md-12">
            <div className="butn-dark mt-15 mb-30 text-center">
              {/* <Link href="/">
                <span>Check Now</span>
              </Link> */}
              <ScrollLink
                to="reservation-sec"
                smooth={true}
                duration={500}
                offset={-70}
              >
                <span>Check Now</span>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailSection;
