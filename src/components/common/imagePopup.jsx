import React, { useEffect, useState, useRef } from "react";
import DesktopPopup from "../../assets/img/popup/popupImg.jpeg";
import MobilePopup from "../../assets/img/popup/popupImgMobile.jpeg";
import { useLocation, useNavigate } from "react-router-dom";


const ImagePopup = ({ pageType = "home" }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const intervalRef = useRef(null);
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
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

  const handleClose = () => {
    setShowPopup(false);
    setPopupTimer(120000); // 2 minutes
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const shouldShowPopup = () => {
    const lastSubmitted = localStorage.getItem("popupSubmittedAt");
    if (!lastSubmitted) return true;
    const twelveHours = 12 * 60 * 60 * 1000;
    return Date.now() - parseInt(lastSubmitted, 10) > twelveHours;
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
      setLoading(true);

    try {
      await fetch("https://cms.gphomes.in/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "gp-web-token": "sdswkhsADWRjfh9Thwn8rn6Mybd",
        },
        body: JSON.stringify({
          name: formData.name,
          email: "Mail",
          mobile: formData.mobile,
          location: "Popup Enquiry",
          message: "Popup Enquiry",
        }),
      });

      setFormData({ name: "", mobile: "" });
      localStorage.setItem("popupSubmittedAt", Date.now().toString());
      setShowConfirmation(true);

      setTimeout(() => {
        setShowPopup(false);
        navigate("/popup-thank-you");
      }, 1500);
    } catch (error) {
      console.error("Form submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!shouldShowPopup()) return;

    let initialDelay =
      location.pathname === "/" || location.pathname === "/home"
        ? 15000
        : 20000;
    setPopupTimer(initialDelay);
    return () => clearPopupTimers();
  }, [location.pathname]);

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
                style={{ maxWidth: "700px", margin: "0 auto" }}
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
                  <PopupForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    loading={loading}
                    showConfirmation={showConfirmation}
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
                  <PopupForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isMobile
                    loading={loading}
                    showConfirmation={showConfirmation}
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
  loading,
  showConfirmation,
}) => (
  <form
    onSubmit={handleSubmit}
    className="position-absolute bottom-0 start-50 translate-middle-x p-2 p-md-3 text-center"
    style={{ width: isMobile ? "80%" : "70%" }}
  >
    {/* Name Input */}
    <div className="mb-2">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        pattern="[A-Za-z ]{2,}"
        autoComplete="name"
        className="form-control p-2 py-md-2 px-3 m-0"
        style={{
          backgroundColor: "white",
          border: "0px",
          outline: "none",
          boxShadow: "none",
          fontWeight: "700",
          color: "grey",
          borderRadius: "10px",
        }}
      />
    </div>

    {/* Mobile Number Input */}
    <div className="mb-2">
      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
        required
        pattern="[0-9]{10}"
        maxLength="10"
        autoComplete="tel"
        className="form-control p-2 py-md-2 px-3 m-0"
        style={{
          backgroundColor: "white",
          border: "0px",
          outline: "none",
          boxShadow: "none",
          fontWeight: "700",
          color: "grey",
          borderRadius: "10px",
        }}
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="p-2 w-50 text-white fs-5"
      style={{
        backgroundColor: "#ff671f",
        borderRadius: "10px",
        fontWeight: isMobile ? "500" : "700",
        opacity: loading ? 0.6 : 1,
        pointerEvents: loading ? "none" : "auto",
      }}
      disabled={loading}
    >
      {loading ? "Submitting..." : "SUBMIT"}
    </button>

    {/* Confirmation Message */}
    {showConfirmation && (
      <div className="mt-2 text-success fw-bold">
        ✅ Form submitted successfully!
      </div>
    )}
  </form>
);

export default ImagePopup;
