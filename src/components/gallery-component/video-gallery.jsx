import React from "react";

import thumbnail1 from "../../assets/img/slider/2.jpg";
import thumbnail2 from "../../assets/img/slider/3.jpg";
import thumbnail3 from "../../assets/img/slider/4.jpg";
import thumbnail4 from "../../assets/img/slider/7.jpg";
import thumbnail5 from "../../assets/img/slider/1.jpg";

const VideoGallery = () => {
  const videos = [
    { thumbnail: thumbnail1, link: "https://youtu.be/xh4GnTKFQso", alt: "YouTube" },
    { thumbnail: thumbnail2, link: "https://youtu.be/xh4GnTKFQso", alt: "Vimeo" },
    { thumbnail: thumbnail3, link: "https://youtu.be/xh4GnTKFQso", alt: "YouTube" },
    { thumbnail: thumbnail4, link: "https://youtu.be/xh4GnTKFQso", alt: "YouTube" },
    { thumbnail: thumbnail5, link: "https://youtu.be/xh4GnTKFQso", alt: "YouTube" },
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-subtitle">Videos</div>
            <div className="section-title">Video Gallery</div>
          </div>

          {/* 2 Columns */}
          {videos.slice(0, 2).map((video, index) => (
            <div key={index} className="col-md-6">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  <img src={video.thumbnail} alt={video.alt} />
                  <a className="video-gallery-button vid" href={video.link}>
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* 3 Columns */}
          {videos.slice(2).map((video, index) => (
            <div key={index} className="col-md-4">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  <img src={video.thumbnail} alt={video.alt} />
                  <a className="video-gallery-button vid" href={video.link}>
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
