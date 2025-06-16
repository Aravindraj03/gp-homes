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
  const { category } = useParams();
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
    const type = queryParams.get("type");
    const project = queryParams.get("project");

    

 let resolvedType = "";

  if (type) {
    resolvedType = type;
  } else if (category === "plots") {
    resolvedType = "Plot";
  } else if (category === "apartments") {
    resolvedType = "Apartment";
  }

  setFormData((prev) => ({
    ...prev,
    type: resolvedType,
    project: project || "",
  }));

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
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    type: formData.type,
    project: formData.project,
    name: formData.name,
    mobile: formData.mobile,
    email: formData.email,
  };

  if (formData.type === "Apartment") {
    payload.bhk = formData.bhk;
  }

  if (formData.type === "Plot") {
    payload.sqft = formData.sqft;
  }

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
      const err = await response.json().catch(() => ({}));
      console.error("Server error response:", err);
      alert("Server error: " + (err.message || "Something went wrong."));
      return;
    }

    const data = await response.json();
    console.log("Success:", data);
    alert("Form submitted successfully!");

    setFormData({
      type: "Apartment",
      project: "",
      bhk: "",
      sqft: "",
      name: "",
      mobile: "",
      email: "",
    });

    navigate("/thank-you");
  } catch (error) {
    console.error("Fetch error:", error);
    alert("Could not submit the form. Check console for details.");
  }
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container my-5">
        <div
          className="card shadow-sm mx-auto"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            padding: "2rem",
            borderRadius: "12px",
            maxWidth: "500px",
            width: "100%",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="card-body">
            <h4 className="card-title text-center mb-4">Enquiry Form</h4>
            <form onSubmit={handleSubmit}>
              {/* Type */}
              <div className="mb-3">
                <label className="form-label">
                  Type <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden>
                      Select Type
                    </option>
                  <option value="Apartment">Apartment</option>
                  <option value="Plot">Plot</option>
                </select>
              </div>

              {/* Project */}
              <div className="mb-3">
                <label className="form-label">
                  Project <span className="text-danger">*</span>
                </label>
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
                    <option key={i} value={proj}>
                      {proj}
                    </option>
                  ))}
                </select>
              </div>

              {/* BHK (Apartment only) */}
              {formData.type === "Apartment" && (
                <div className="mb-3">
                  <label className="form-label">
                    BHK <span className="text-danger">*</span>
                  </label>
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

              {/* Sqft (Plot only) */}
              {formData.type === "Plot" && (
                <div className="mb-3">
                  <label className="form-label">
                    Plot Area (sqft) <span className="text-danger">*</span>
                  </label>
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
                    <option value="366 - 798">366 - 798</option>
                    <option value="800 - 999">800 - 999</option>
                    <option value="1000 - 1298">1000 - 1298</option>
                    <option value="1303 - 3190">1303 - 3190</option>
                  </select>
                </div>
              )}

              {/* Name */}
              <div className="mb-3">
                <label className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Mobile */}
              <div className="mb-3">
                <label className="form-label">
                  Mobile Number <span className="text-danger">*</span>
                </label>
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
                  type="email"
                  placeholder="Enter your email"
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
