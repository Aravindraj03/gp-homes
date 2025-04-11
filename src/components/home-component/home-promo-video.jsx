import React, { useState } from "react";
import slideImg2 from "../../assets/img/projects/videobg.jpg";

const HomePromoVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      className="video-wrapper video d-flex align-items-center section-padding bg-img bg-fixed"
      data-overlay-dark="2"
      style={{
        backgroundImage: `url(${slideImg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: "0px",
      }}
    >
      <div
        className="container text-center d-flex justify-content-center align-items-center"
        style={{
          width: "100vw",
          height: "100vh",
          padding: "0px",
          margin: "0px",
        }}
      >
        {!showVideo ? (
          // Play button overlay
          <div className="row">
            <div className="text-center col-md-12">
              <div className="section-subtitle">
                <span>Top Builders in Chennai 
                </span>
              </div>
              <div className="section-title">
                <span>GP Homes</span>
              </div>
              <div
                className="vid"
                // href="https://www.youtube.com/watch?v=NNA005FLQJ4"
                // target="_blank"
                // rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
                onClick={() => setShowVideo(true)}
              >
                <div className="vid-butn">
                  <span className="icon">
                    <i className="ti-control-play"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Embedded YouTube Video
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <button
            className="text-white"
              onClick={() => setShowVideo(false)}
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                background: "#ff0000",
                color: "white",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                padding: "5px 10px",
                borderRadius: "50%",
                zIndex: "10",
              }}
            >
              ✖
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/NNA005FLQJ4?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ borderRadius: "10px" }}
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePromoVideo;
