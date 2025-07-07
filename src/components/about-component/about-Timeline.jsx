import React from 'react'
import { useEffect, useRef } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const AbouTimeline = () => {

    const scrollContainerRef = useRef(null);
  const thumbRef = useRef(null);
    useEffect(() => {
  AOS.init({ duration: 800, once: true });
}, []);

useEffect(() => {
  const scrollContainer = scrollContainerRef.current;
  const thumb = thumbRef.current;
  const scrollbarContainer = thumb.parentElement; // .custom-scrollbar-container

  const handleScroll = () => {
    const scrollRatio =
      scrollContainer.scrollLeft /
      (scrollContainer.scrollWidth - scrollContainer.clientWidth);

    const trackWidth = scrollbarContainer.offsetWidth;
    const thumbWidth = thumb.offsetWidth;
    const maxThumbLeft = trackWidth - thumbWidth;

    const thumbLeft = scrollRatio * maxThumbLeft;
    thumb.style.transform = `translateX(${thumbLeft}px)`;
  };

  const handleWheel = (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    }
  };

  scrollContainer.addEventListener("scroll", handleScroll);
  scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

  // Call initially
  handleScroll();

  window.addEventListener("resize", handleScroll); // handle resize for thumb sync

  return () => {
    scrollContainer.removeEventListener("scroll", handleScroll);
    scrollContainer.removeEventListener("wheel", handleWheel);
    window.removeEventListener("resize", handleScroll);
  };
}, []);
  return (
    <section className="py-5 bg-light">
      <div className="timeline-outer-wrapper">
        <h2 className="text-center fw-bold mb-4">Our Journey</h2>
        <div className="timeline-scroll-container" ref={scrollContainerRef}>
          <div className="timeline-track">
            {[
              { year: "2022", text: "GP Elanza" },
              { year: "2022", text: "GP Valencia Emerald" },
              { year: "2023", text: "GP Fairmont" },
              { year: "2023", text: "GP Blazing Star" },
              { year: "2023", text: "GP Ellora Castle" },
              { year: "2023", text: "GP Breeze Way" },
              { year: "2023", text: "GP valencia Ruby" },
              { year: "2023", text: "GP Nanmanai" },
              { year: "2023", text: "GP VijayaLakshmi Nagar" },
              { year: "2024", text: "GP Ethulia" },
              { year: "2024", text: "GP Garden Bay" },
              { year: "2024", text: "GP Midway Avenue" },
              { year: "2025", text: "GP Ponbhoomi" },
              { year: "2025", text: "GP Serene Vista" },
            ].map((item, index) => {
              const isTop = index % 2 === 0; // Alternate top and bottom
              return (
                <div
                  className={`timeline-event ${isTop ? "top" : "bottom"}`}
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h6 className="fw-bold mb-1">{item.year}</h6>
                    <p className="small text-muted mb-0">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="custom-scrollbar-container">
        <div className="custom-scrollbar-thumb" ref={thumbRef}></div>
      </div>
      </div>
    </section>
  );
}

export default AbouTimeline
