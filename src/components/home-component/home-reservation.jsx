import React, { useEffect, useState } from "react";
import slideImg2 from "../../assets/img/projects/BG-1.jpg";
import projectsData from "../project-details-component/projectsData";
import { useParams } from "react-router-dom";

const HomeReservation = ({ project, selectedPlotData }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const [selectedApartment, setSelectedApartment] = useState("");
  const [selectedPlot, setSelectedPlot] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      checkIn,
      checkOut,
      adults,
      children,
    });
  };

  const { slug } = useParams(); // Get slug from URL
  const project1 = projectsData.find((p) => p.slug === slug); // Find project by slug

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    plotNo: "",
    areaSqFt: "",
    totalCost: "",
    facing: "",
  });

  // Update formData when selectedPlotData changes
  useEffect(() => {
    if (selectedPlotData) {
      setFormData({
        name: "",
        phoneNumber: "",
        plotNo: `Plot No : ${selectedPlotData.plotNo || ""}`,
        areaSqFt: `AreaSqFt : ${selectedPlotData.areaSqFt || ""}`,
        totalCost: `Total Cost : ${selectedPlotData.totalCost || ""}`,
        facing: `Facing : ${selectedPlotData.facing || ""}`,
      });
    }
  }, [selectedPlotData]); // Runs when selectedPlotData changes

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmitPlotsForm = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
      name: "",
      phoneNumber: "",
      plotNo: "",
      areaSqFt: "",
      totalCost: "",
      facing: "",
    });
    alert("Booking Form Submitted Successfully!!")
  };

  return (
    <section className="testimonials" id="reservation-sec">
      <div
        className="background bg-img bg-fixed section-padding pb-0"
        style={{ backgroundImage: `url(${slideImg2})` }}
        data-overlay-dark="3"
      >
        {/* <div>
      <h2>Home Reservation</h2>
      {selectedPlot ? (
        <p>Selected Plot: {selectedPlot.totalCost}</p>
      ) : (
        <p>No plot selected</p>
      )}
    </div> */}
        <div className="container">
          <div className="row">
            {/* Reservation */}
            <div className="col-md-5 mb-30 mt-30">
              {/* <p>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
              </p> */}
              <h3>ENQUIRE NOW</h3>
              <br></br>
              <h6>
                Interested in learning more? Our property experts are here to
                help! Reach out to us, and we’ll get back to you with all the
                details soon.
              </h6>
              <div className="reservations mb-30">
                <div className="icon color-1">
                  <span className="flaticon-call"></span>
                </div>
                <div className="text">
                  <p className="color-1">Contact Us</p>
                  <a className="color-1" href="tel:855-100-4444">
                    9344481444
                  </a>
                </div>
              </div>
              {/* <p>
                  <i className="ti-check"></i>
                  <small>Call us, it's toll-free.</small>
                </p> */}
            </div>

            {/* Booking Form */}
            {slug === "gp-ponBhoomi" ? (
              <div className="col-md-5 offset-md-2">
                <div className="booking-box">
                  <div className="head-box">
                    <h6>Enquire Now</h6>
                    <h4>Drop in a line with your details.</h4>
                  </div>
                  <div className="booking-inner clearfix">
                    <form onSubmit={handleSubmitPlotsForm} className="form1 clearfix">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="input1_wrapper">
                            <label>Name</label>
                            <div className="input1_inner">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Name *"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input1_wrapper">
                            <label>Phone Number</label>
                            <div className="input1_inner">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number *"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input1_wrapper">
                            <label>Plot No</label>
                            <div className="input1_inner">
                              <input
                                type="text"
                                className="form-control"
                                name="plotNo"
                                value={formData.plotNo}
                                onChange={handleChange}
                                placeholder="Enter Plot No"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input1_wrapper">
                            <label>Area SqFt</label>
                            <div className="input1_inner">
                              <input
                                type="text"
                                className="form-control"
                                name="areaSqFt"
                                value={formData.areaSqFt}
                                onChange={handleChange}
                                placeholder="Enter Area SqFt"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input1_wrapper">
                            <label>Total Cost</label>
                            <div className="input1_inner">
                              <input
                                type="text"
                                className="form-control"
                                name="totalCost"
                                value={formData.totalCost}
                                onChange={handleChange}
                                placeholder="Enter Total Cost"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input1_wrapper">
                            <label>Facing</label>
                            <div className="input1_inner">
                              <input
                                type="text"
                                className="form-control"
                                name="facing"
                                value={formData.facing}
                                onChange={handleChange}
                                placeholder="Enter Facing"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn-form1-submit mt-15"
                          >
                            SUBMIT
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-md-5 offset-md-2">
                <div className="booking-box">
                  <div className="head-box">
                    <h6>Enquire Now</h6>
                    <h4>Drop in a line with your details.</h4>
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
                                required
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
                                required
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
                        {project?.name ? (
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
                                  <option value={project.name}>
                                    {project.name}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            {/* <div className="col-md-12">
                                      <div className="select1_wrapper">
                                        <label>Category</label>
                                        <div className="select1_inner">
                                          <select
                                            className="select2 select"
                                            style={{ width: "100%" }}
                                            value={selectedApartment}
                                            onChange={(e) =>
                                              setSelectedApartment(e.target.value)
                                            }
                                          >
                                            <option value="" disabled>
                                              Select Property Type
                                            </option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Plot">Plot</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div> */}

                            <div className="col-md-12">
                              {/* Apartments Dropdown */}
                              <div className="select1_wrapper">
                                <label>Apartments</label>
                                <div className="select1_inner">
                                  <select
                                    className="select2 select text-dark"
                                    style={{ width: "100%" }}
                                    value={selectedApartment}
                                    onChange={(e) =>
                                      setSelectedApartment(e.target.value)
                                    }
                                  >
                                    <option value="" disabled>
                                      Select an Apartment
                                    </option>
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
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-12">
                              {/* Plots Dropdown */}
                              <div
                                className="select1_wrapper"
                                style={{ marginTop: "15px" }}
                              >
                                <label>Plots</label>
                                <div className="select1_inner">
                                  <select
                                    className="select2 select text-dark"
                                    style={{ width: "100%" }}
                                    value={selectedPlot}
                                    onChange={(e) =>
                                      setSelectedPlot(e.target.value)
                                    }
                                  >
                                    <option value="" disabled>
                                      Select a Plot
                                    </option>
                                    <option value="GP Pon Bhoomi">
                                      GP Pon Bhoomi
                                    </option>
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
                                  </select>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        <div className="col-md-12">
                          <div className="select1_wrapper">
                            <label>Variations</label>
                            <div className="select1_inner">
                              <select
                                className="select2 select text-dark"
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeReservation;
