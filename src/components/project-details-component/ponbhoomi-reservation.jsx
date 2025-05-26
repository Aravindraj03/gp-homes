import React, { useState, useEffect } from "react";
import slideImg2 from "../../assets/img/projects/BG-1.jpg";

const PonBhoomiReservation = ({ selectedPlotData }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    plotNo: "",
    areaSqFt: "",
    totalCost: "",
    facing: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlotData) {
      setFormData(prev => ({
        ...prev,
        plotNo: selectedPlotData.plotNo || "",
        areaSqFt: selectedPlotData.areaSqFt || "",
        totalCost: selectedPlotData.totalCost || "",
        facing: selectedPlotData.facing || ""
      }));
    }
  }, [selectedPlotData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const payload = {
      name: formData.name,
      mobile: formData.phoneNumber,
      plot: "Ponbhoomi",
      project_type: "plots",
      facing: formData.facing,
      plot_no: formData.plotNo,
      area_in_sqft: formData.areaSqFt,
      total_cost: formData.totalCost
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

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
      alert("Form submitted successfully!");
      setSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        phoneNumber: "",
        plotNo: "",
        areaSqFt: "",
        totalCost: "",
        facing: ""
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit form. Please try again.");
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
                help! Reach out to us, and we'll get back to you with all the
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

            {/* <div className="col-md-5 offset-md-2">
              <div className="booking-box">
                <div className="head-box">
                  <h6>Booking Form</h6>
                  <h4>Drop in a line with your details.</h4>
                </div>
                <div className="booking-inner clearfix">
                  <form onSubmit={handleSubmit} className="form1 clearfix">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="input1_wrapper">
                          <label>Name *</label>
                          <div className="input1_inner">
                            <input
                              type="text"
                              className={`form-control ${errors.name ? "is-invalid" : ""}`}
                              placeholder="Name *"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input1_wrapper">
                          <label>Phone Number *</label>
                          <div className="input1_inner">
                            <input
                              type="text"
                              className={`form-control ${errors.phoneNumber ? "is-invalid" : ""}`}
                              placeholder="Phone Number *"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleChange}
                            />
                            {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
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
                              placeholder="Plot No"
                              readOnly={!!selectedPlotData}
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
                              placeholder="Area SqFt"
                              readOnly={!!selectedPlotData}
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
                              placeholder="Total Cost"
                              readOnly={!!selectedPlotData}
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
                              placeholder="Facing"
                              readOnly={!!selectedPlotData}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn-form1-submit mt-15"
                          disabled={submitted}
                        >
                          {submitted ? "THANK YOU!" : "SUBMIT"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PonBhoomiReservation;