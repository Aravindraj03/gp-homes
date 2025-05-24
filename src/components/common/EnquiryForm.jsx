import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import bgImage from "../../assets/img/slider/enquiryBg.jpg"; 

const projectOptions = {
  Apartment: [
    "GP Blazing Star",
    "GP Breeze Way",
    "GP Homes Elanza",
    "GP Valencia Emerald",
    "GP Valencia Ruby",
    "GP Lake Breeze",
  ],
  Plot: [
    "GP PonBhoomi",
    "GP Midway Avenue",
    "GP Fairmont",
    "GP Garden Bay",
    "GP Ethulia",
    "Nanmanai",
    "Gp Vijayalakshmi",
  ],
};

function EnquiryForm() {
  const location = useLocation();
  const { category } = useParams(); // 'plots' or 'apartments' from route
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const [formData, setFormData] = useState({
    type: "Apartment",
    project: "",
    bhk: "",
    sqft: "",
    name: "",
    mobile: "",
    email: "",
  });

  useEffect(() => {
  const type = queryParams.get("type") || (category === "plots" ? "Plot" : "Apartment");
  const project = queryParams.get("project") || "";

  setFormData((prev) => ({
    ...prev,
    type,
    project,
  }));

  // ✅ Cleanup on unmount
  return () => {
    setFormData({
      type: "Apartment",
      project: "",
      bhk: "",
      sqft: "",
      name: "",
      mobile: "",
      email: "",
    });
  };
}, [location.search, category]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "type") {
      setFormData({
        ...formData,
        type: value,
        project: "",
        bhk: "",
        sqft: "",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: You can add API integration here
    console.log("Submitted:", formData);

    navigate("/thank-you", { state: { name: formData.name, type: formData.type } });
  };

  const availableProjects = projectOptions[formData.type] || [];

  return (
    <div
  className="enquiry-form-wrapper py-5"
  style={{
    backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        overflowY: "auto",
        // width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
  }}
>
    <div className="container my-5">
      <div className="card shadow-sm mx-auto" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", // Slight transparency
          padding: "2rem",
          borderRadius: "12px",
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)" }}>
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Enquiry Form</h4>
          <form onSubmit={handleSubmit}>
            {/* Type */}
            <div className="mb-3">
              <label className="form-label">Type<span className="text-danger">*</span></label>
              <select
                className="form-select"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="Apartment">Apartment</option>
                <option value="Plot">Plot</option>
              </select>
            </div>

            {/* Project */}
            <div className="mb-3">
              <label className="form-label">Project<span className="text-danger">*</span></label>
              <select
                className="form-select"
                name="project"
                value={formData.project}
                onChange={handleChange}
                required
              >
              <option value="" disabled hidden>
    Select Project
  </option>
                {availableProjects.map((proj, i) => (
                  <option key={i} value={proj}>{proj}</option>
                ))}
              </select>
            </div>

            {/* BHK (Apartments only) */}
            {formData.type === "Apartment" && (
              <div className="mb-3">
                <label className="form-label">BHK<span className="text-danger">*</span></label>
               
                <select
                  className="form-select"
                  name="bhk"
                  value={formData.bhk}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden>
    Select BHK
  </option>
                 
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  
                </select>
              </div>
            )}

            {/* Sqft (Plots only) */}
            {formData.type === "Plot" && (
               <div className="mb-3">
                <label className="form-label">Plot Area (sqft)<span className="text-danger">*</span></label>
                <select
                  className="form-select"
                  name="sqft"
                  value={formData.sqft}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden>
    Select SQFT
  </option>
                  <option value="1 BHK">366 - 798</option>
                  <option value="2 BHK">800 - 999</option>
                  <option value="3 BHK">1000 - 1298</option>
                  <option value="4+ BHK">1303 - 3190</option>
                </select>
              </div>

            )}

            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Name<span className="text-danger">*</span></label>
              <input
              style={{borderRadius: "5px",
                border: "1px solid #ccc",
                padding: "10px 0 8px 13px",
                
              }}
                placeholder="Enter your name"
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mobile */}
            <div className="mb-3">
              <label className="form-label">Mobile Number<span className="text-danger">*</span></label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="form-control"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
             style={{borderRadius: "5px",
                border: "1px solid #ccc",
                padding: "10px 0 8px 13px",
                
              }}
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default EnquiryForm;
