import React, { useEffect, useState, useRef } from "react";
import DesktopPopup from "../../assets/img/popup/web-form.jpg";
import MobilePopup from "../../assets/img/popup/mobile-form.jpg";
import { useLocation, useParams } from "react-router-dom";

const ImagePopup = ({ pageType = "home" }) => {

  const [showPopup, setShowPopup] = useState(false);
  const intervalRef = useRef(null);
  const location = useLocation();

//   console.log(location.pathname,"location------------")
  const [formData, setFormData] = useState({
    firstName: "",
    mobile: "",
    email: "",
  });

  const clearPopupTimers = () => {
    if (intervalRef.current) clearTimeout(intervalRef.current);
  };

  const setPopupTimer = (delay) => {
    clearPopupTimers();
    intervalRef.current = setTimeout(() => {
      setShowPopup(true);
    }, delay);
  };

  useEffect(() => {
    // Set initial popup time
    // const initialDelay = pageType === "home" ? 7000 : 15000;
    let initialDelay = 0;
    if (location.pathname === "/" || location.pathname === "/home") {
      initialDelay = 7000;
    } else {
      initialDelay = 15000;
    }    
    setPopupTimer(initialDelay);
    return () => clearPopupTimers();
    
  }, [location.pathname]);

  const handleClose = () => {
    setShowPopup(false);
    setPopupTimer(120000); // 2 minutes
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowPopup(false);
    setPopupTimer(120000); // 2 minutes
    // Optional: Add API integration here
  };

  return (
    <>
      {showPopup && (
        <>
          {/* Desktop popup */}
          <div
            className="modal fade show d-none d-sm-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div
              className="modal-dialog modal-dialog-centered w-100 m-0"
              style={{ maxWidth: "100%", padding: "1rem" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="modal-content position-relative p-0 border-0 w-100"
                style={{ maxWidth: "640px", margin: "0 auto" }}
              >
                <div className="modal-body p-0 position-relative w-100">
                  <img
                    src={DesktopPopup}
                    alt="Popup"
                    className="img-fluid w-100"
                  />
                  <button
                    className="btn btn-danger position-absolute top-0 end-0 m-2 px-2 py-1"
                    onClick={handleClose}
                  >
                    ✕
                  </button>
                  {/* Form */}
                  <PopupForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile popup */}
          <div
            className="modal fade show d-block d-sm-none"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div
              className="modal-dialog modal-dialog-centered w-100 m-0"
              style={{ maxWidth: "100%", padding: "1rem" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="modal-content position-relative p-0 border-0 w-100"
                style={{ maxWidth: "640px", margin: "0 auto" }}
              >
                <div className="modal-body p-0 position-relative w-100">
                  <img
                    src={MobilePopup}
                    alt="Popup"
                    className="img-fluid w-100"
                  />
                  <button
                    className="btn btn-danger position-absolute top-0 end-0 m-2 px-1 py-0"
                    onClick={handleClose}
                  >
                    ✕
                  </button>
                  {/* Form */}
                  <PopupForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isMobile
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const PopupForm = ({
  formData,
  handleChange,
  handleSubmit,
  isMobile = false,
}) => (
  <form
    onSubmit={handleSubmit}
    className="position-absolute bottom-0 start-50 translate-middle-x p-2 text-center"
    style={{ width: isMobile ? "80%" : "60%" }}
  >
    {["firstName", "mobile", "email"].map((field, index) => (
      <div className="mb-1" key={field}>
        <input
          type={
            field === "email" ? "email" : field === "mobile" ? "tel" : "text"
          }
          className="form-control p-1 px-3 m-0"
          name={field}
          placeholder={
            field === "firstName"
              ? "First Name"
              : field === "mobile"
              ? "Mobile Number"
              : "Email"
          }
          value={formData[field]}
          onChange={handleChange}
          required
          style={{
            backgroundColor: "white",
            border: "0px",
            outline: "none",
            boxShadow: "none",
            fontWeight: "700",
            color: "grey",
            borderRadius: "10px",
            height: field === "email" && isMobile ? "30.5px" : undefined,
          }}
        />
      </div>
    ))}
    <button
      type="submit"
      className={`p-1 w-50 text-white fs-5`}
      style={{
        backgroundColor: "#ff671f",
        borderRadius: "10px",
        fontWeight: isMobile ? "500" : "700",
      }}
    >
      SUBMIT
    </button>
  </form>
);

export default ImagePopup;
