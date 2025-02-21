import React, { useState } from "react";
import slideImg2 from "../../assets/img/slider/2.jpg";

const HomeReservation = ({ project }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      checkIn,
      checkOut,
      adults,
      children,
    });
  };

  return (
    <section className="testimonials" id="reservation-sec">
      <div
        className="background bg-img bg-fixed section-padding pb-0"
        style={{ backgroundImage: `url(${slideImg2})` }}
        data-overlay-dark="2"
      >
        <div className="container">
          <div className="row">
            {/* Reservation */}
            <div className="col-md-5 mb-30 mt-30">
              <p>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
              </p>
              <h5>
                Each of our guest rooms feature a private bath, wi-fi, cable
                television and include full breakfast.
              </h5>
              <div className="reservations mb-30">
                <div className="icon color-1">
                  <span className="flaticon-call"></span>
                </div>
                <div className="text">
                  <p className="color-1">Reservation</p>
                  <a className="color-1" href="tel:855-100-4444">
                    855 100 4444
                  </a>
                </div>
              </div>
              <p>
                <i className="ti-check"></i>
                <small>Call us, it's toll-free.</small>
              </p>
            </div>

            {/* Booking Form */}
            <div className="col-md-5 offset-md-2">
              <div className="booking-box">
                <div className="head-box">
                  <h6>GP Homes</h6>
                  <h4>Booking Form</h4>
                </div>
                <div className="booking-inner clearfix">
                  <form onSubmit={handleSubmit} className="form1 clearfix">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="input1_wrapper">
                          <label>Name</label>
                          <div className="input1_inner">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              // value={}
                              name="name"
                              id="name"
                              // onChange={(e) => setCheckIn(e.target.value)}
                            />
                          </div>

                          {/* <div className="input1_inner">
                            <input 
                              type="text" 
                              className="form-control input datepicker" 
                              placeholder="Check in" 
                              value={checkIn}
                              onChange={(e) => setCheckIn(e.target.value)}
                            />
                          </div> */}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input1_wrapper">
                          <label>Phone Number</label>
                          <div className="input1_inner">
                            <input
                              type="text"
                              className="form-control input"
                              placeholder="Phone Number"
                              id="phoneNumber"
                              name="phoneNumber"                             
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-md-12">
                        <div className="input1_wrapper">
                          <label>Email</label>
                          <div className="input1_inner">
                            <input
                              type="text"
                              className="form-control input"
                              placeholder="Email"
                              id="email"
                              name="email"                              
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input1_wrapper">
                          <label>Address</label>
                          <div className="input1_inner">
                            <input
                              type="text"
                              className="form-control input"
                              placeholder="Address"
                              id="address"                              
                              name="address"                             
                            />
                          </div>
                        </div>
                      </div> */}
                      <div className="col-md-12">
                        <div className="select1_wrapper">
                          <label>Project</label>
                          <div className="select1_inner">
                            <select
                              className="select2 select"
                              style={{ width: "100%" }}
                              value={adults}
                              onChange={(e) => setAdults(e.target.value)}
                            >
                              {project?.name ? (
                                <option value={project.name}>
                                  {project.name}
                                </option>
                              ) : (
                                <>
                                  <optgroup>
                                    <option disabled><b>Apartments</b></option>
                                    <option value="GP Blazing Star">
                                      GP Blazing Star
                                    </option>
                                    <option value="GP Breeze Way">
                                      GP Breeze Way
                                    </option>
                                    <option value="GP Homes Elanza">
                                      GP Homes Elanza
                                    </option>
                                    <option value="GP Valencia Emarald">
                                      GP Valencia Emarald
                                    </option>
                                    <option value="GP Valencia Ruby">
                                      GP Valencia Ruby
                                    </option>
                                  </optgroup>

                                  <optgroup>
                                    <option disabled><b>Plots</b></option>
                                    <option value="GP Midway Avenue">
                                      GP Midway Avenue
                                    </option>
                                    <option value="GP Garden Bay">
                                      GP Garden Bay
                                    </option>
                                    <option value="GP Ethulia">
                                      GP Ethulia
                                    </option>
                                    <option value="GP Nanmanai">
                                      GP Nanmanai
                                    </option>
                                    <option value="GP Vijayalakshmi">
                                      GP Vijayalakshmi
                                    </option>
                                  </optgroup>
                                </>
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="select1_wrapper">
                          <label>Variations</label>
                          <div className="select1_inner">
                            <select
                              className="select2 select"
                              style={{ width: "100%" }}
                              value={children}
                              onChange={(e) => setChildren(e.target.value)}
                            >
                              {project?.location ? (
                                <option value={project.location}>
                                  {project.location.split(" ")[0]}
                                </option>
                              ) : (
                                <>
                                  <option value="2BHK">2BHK</option>
                                  <option value="3BHK">3BHK</option>
                                </>
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn-form1-submit mt-15"
                        >
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeReservation;
