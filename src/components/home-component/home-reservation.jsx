import React, { useState } from "react";
import slideImg2 from "../../assets/img/projects/BG-1.jpg";

const HomeReservation = ({ project,selectedPlotData }) => {

  console.log(selectedPlotData,"selectedPlotData------------------")
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    plot: project?.name || "",
    bhk: project?.location?.split(" ")[0] || "",
  });
  

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); 
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    // validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Manual validation
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      let message = "";

      switch (key) {
        case "name":
          if (!value.trim()) message = "Please enter your Name";
          else if (value.trim().length < 2)
            message = "Name must be at least 2 characters.";
          break;

        case "mobile":
          if (!value.trim()) message = "Please enter your Phone Number";
          else if (!/^[0-9]{10}$/.test(value))
            message = "Enter a valid 10-digit Phone number.";
          break;

        case "plot":
          if (!value) message = "Please select a project.";
          break;

        case "bhk":
          if (!value) message = "Please select a BHK variation.";
          break;
      }

      if (message) newErrors[key] = message;
    });

    // If there are validation errors, show them and stop
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }   

    const payload = {
      name: formData.name,
      mobile: formData.mobile,
      plot: formData.plot || project?.name || "N/A",
      bhk: formData.bhk || project?.location?.split(" ")[0] || "N/A",
      apartment: "Ponboomi",
    };

    try {
      const response = await fetch("https://cms.gphomes.in/api/enquiry-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "gp-web-token": "sdswkhsADWRjfh9Thwn8rn6Mybd",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Response:", data);
      alert("Form submitted Successfully:");
      setSubmitted(true);
      setFormData({
        name: "",
        mobile: "",
        plot: "",
        bhk: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="testimonials" id="reservation-sec">
      <div
        className="background bg-img bg-fixed section-padding pb-0"
        style={{ backgroundImage: `url(${slideImg2})` }}
        data-overlay-dark="3"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5 mb-30 mt-30">
              <h3>ENQUIRE NOW</h3>
              <br />
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
            </div>

            <div className="col-md-5 offset-md-2">
              <div className="booking-box">
                <div className="head-box">
                  <h6>Booking Form</h6>
                  <h4>Drop in a line with your details.</h4>
                </div>
                <div className="booking-inner clearfix">
                  <form onSubmit={handleSubmit} className="form1 clearfix">
                    {submitted && (
                      <div
                        className="alert alert-success contact__msg"
                        role="alert"
                      >
                        Your message was sent successfully.
                      </div>
                    )}

                    <div className="row">
                      <div className="col-md-12">
                        <div className="input1_wrapper">
                          <label>Name</label>
                          <div className="input1_inner">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              name="name"
                              id="name"
                              value={formData.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.name && (
                              <small className="text-danger">
                                {errors.name}
                              </small>
                            )}
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
                              placeholder="Phone Number"
                              name="mobile"
                              id="mobile"
                              value={formData.mobile}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.mobile && (
                              <small className="text-danger">
                                {errors.mobile}
                              </small>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="select1_wrapper">
                          <label>Project</label>
                          <div className="select1_inner">
                            <select
                              className="select2 select"
                              name="plot"
                              id="plot"
                              value={formData.plot}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select a Project</option>
                              {project?.name ? (
                                <option value={project.name}>
                                  {project.name}
                                </option>
                              ) : (
                                <>
                                  <optgroup label="Apartments">
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
                                  <optgroup label="Plots">
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
                              name="bhk"
                              id="bhk"
                              value={formData.bhk}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select a BHK </option>
                              {project?.location ? (
                                <option value={project.location.split(" ")[0]}>
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
