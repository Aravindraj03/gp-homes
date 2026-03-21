import React, { useRef, useState,useEffect } from "react";
import slideImg2 from "../../assets/img/projects/blackTexturedBg.jpeg";
import d1 from "../../assets/videos/promovid1.mp4"
import d2 from "../../assets/videos/promovid2.mp4";
import d3 from "../../assets/videos/promovid3.mp4";
import d4 from "../../assets/videos/promovid4.mp4";
import m1 from "../../assets/videos/01.mp4";
import m2 from "../../assets/videos/02.mp4";
import m3 from "../../assets/videos/03.mp4";
import m4 from "../../assets/videos/04.mp4";


// const videos = [video1, video2, video3, video4];

const HomePromoVideo = () => {
  // const [showVideo, setShowVideo] = useState(false);
 const [currentVideo, setCurrentVideo] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const desktopVideos = [d1, d2, d3, d4];
  const mobileVideos = [m1,m2,m3,m4];

  const videos = isMobile ? mobileVideos : desktopVideos;

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setCurrentVideo(0); // reset when switching device
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    // <section
    //   className="video-wrapper video d-flex align-items-center section-padding bg-img bg-fixed"
    //   data-overlay-dark="2"
    //   style={{
    //     backgroundImage: `url(${slideImg2})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     width: "100%",
    //     minHeight: "100vh",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     position: "relative",
    //     padding: "0px",
    //   }}
    // >
    //   <div
    //     className="container text-center d-flex justify-content-center align-items-center"
    //     style={{
    //       width: "100vw",
    //       height: "100vh",
    //       padding: "0px",
    //       margin: "0px",
    //     }}
    //   >
    //     {!showVideo ? (
    //       // Play button overlay
    //       <div className="row">
    //         <div className="text-center col-md-12">
    //           <div className="section-subtitle">
    //             <span>Top Builders in Chennai 
    //             </span>
    //           </div>
    //           <div className="section-title">
    //             <span>GP Homes</span>
    //           </div>
    //           <div
    //             className="vid"
    //             // href="https://www.youtube.com/watch?v=NNA005FLQJ4"
    //             // target="_blank"
    //             // rel="noopener noreferrer"
    //             style={{ cursor: "pointer" }}
    //             onClick={() => setShowVideo(true)}
    //           >
    //             <div className="vid-butn">
    //               <span className="icon">
    //                 <i className="ti-control-play"></i>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ) : (
    //       // Embedded YouTube Video
    //       <div style={{ position: "relative", width: "100%", height: "100%" }}>
    //         <button
    //         className="text-white"
    //           onClick={() => setShowVideo(false)}
    //           style={{
    //             position: "absolute",
    //             top: "-10px",
    //             right: "-10px",
    //             background: "#ff0000",
    //             color: "white",
    //             border: "none",
    //             fontSize: "18px",
    //             cursor: "pointer",
    //             padding: "5px 10px",
    //             borderRadius: "50%",
    //             zIndex: "10",
    //           }}
    //         >
    //           ✖
    //         </button>
    //         <iframe
    //           width="100%"
    //           height="100%"
    //           src="https://www.youtube.com/embed/NNA005FLQJ4?autoplay=1"
    //           title="YouTube video"
    //           frameBorder="0"
    //           allow="autoplay; encrypted-media"
    //           allowFullScreen
    //           style={{ borderRadius: "10px" }}
    //         ></iframe>
    //       </div>
    //     )}
    //   </div>
    // </section>

    <section
      ref={sectionRef}
      className="video-wrapper video d-flex align-items-center section-padding bg-img bg-fixed"
      style={{
        backgroundImage: `url(${slideImg2})`,
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container d-flex justify-content-center align-items-center">

        <div
  style={{
    width: isMobile ? "100%" : "100%",
    maxWidth: isMobile ? "900px" : "100%",
    position: "relative",
  }}
>

          {/* VIDEO */}
          <video
  ref={videoRef}
  key={currentVideo}
  src={videos[currentVideo]}
  controls
  playsInline
  autoPlay
  onEnded={nextVideo}
  style={{
    width: "100%",
    height: isMobile ? "auto" : "90vh",
    objectFit: isMobile ? "contain" : "contain",
    borderRadius: isMobile ? "10px" : "0px",
  }}
/>

          {/* PREV */}
<button
  onClick={prevVideo}
  style={{
    position: "absolute",
    top: "50%",
    left: isMobile ? "10px" : "30px",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    border: "none",
    width: isMobile ? "40px" : "70px",
    height: isMobile ? "40px" : "70px",
    borderRadius: "50%",
    fontSize: isMobile ? "18px" : "28px",
    cursor: "pointer",
    backdropFilter: "blur(5px)",
  }}
>
  ❮
</button>

{/* NEXT */}
<button
  onClick={nextVideo}
  style={{
    position: "absolute",
    top: "50%",
    right: isMobile ? "10px" : "30px",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    border: "none",
    width: isMobile ? "40px" : "70px",
    height: isMobile ? "40px" : "70px",
    borderRadius: "50%",
    fontSize: isMobile ? "18px" : "28px",
    cursor: "pointer",
    backdropFilter: "blur(5px)",
  }}
>
  ❯
</button>

        </div>
      </div>
    </section>
    
  );
};

export default HomePromoVideo;
