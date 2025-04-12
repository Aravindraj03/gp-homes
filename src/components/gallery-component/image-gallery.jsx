import React from "react";

import galleryimg1 from "../../assets/img/gallery/gallery-Ethulyia.jpg";
import galleryimg2 from "../../assets/img/gallery/gallery-Nanmani.jpg";
import galleryimg3 from "../../assets/img/gallery/gallery-Ponbhoomi 1.jpg";
import galleryimg4 from "../../assets/img/gallery/gallery-Ponbhoomi.jpg";
import galleryimg5 from "../../assets/img/gallery/gallery-gardenbay.jpg";
import galleryimg6 from "../../assets/img/gallery/gallery-blazingstar.jpg";
import galleryimg7 from "../../assets/img/gallery/gallery-Elanza.jpg";
import galleryimg8 from "../../assets/img/gallery/gallery-Ruby.jpg";

const ImageGallery = () => {
  const images = [
    { src: galleryimg1, alt: "work-img" },
    { src: galleryimg2, alt: "work-img" },
    { src: galleryimg3, alt: "work-img" },
    { src: galleryimg4, alt: "work-img" },
    { src: galleryimg5, alt: "work-img" },
    { src: galleryimg6, alt: "work-img" },
    { src: galleryimg7, alt: "work-img" },
    { src: galleryimg8, alt: "work-img" },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-subtitle">Images</div>
            <div className="section-title">Image Gallery</div>
          </div>

          {/* 3 Columns */}
          {images.slice(0, 3).map((image, index) => (
            <div key={index} className="col-md-4 gallery-item">
              <a href={image.src} title="" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src={image.src}
                      className="img-fluid mx-auto d-block"
                      alt={image.alt}
                    />
                  </div>
                </div>
              </a>
            </div>
          ))}

          {/* 2 Columns */}
          {images.slice(3, 5).map((image, index) => (
            <div key={index} className="col-md-6 gallery-item">
              <a href={image.src} title="" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src={image.src}
                      className="img-fluid mx-auto d-block"
                      alt={image.alt}
                    />
                  </div>
                </div>
              </a>
            </div>
          ))}

          {/* 3 Columns */}
          {images.slice(5).map((image, index) => (
            <div key={index} className="col-md-4 gallery-item">
              <a href={image.src} title="" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src={image.src}
                      className="img-fluid mx-auto d-block"
                      alt={image.alt}
                    />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
