import React from "react";

import galleryimg1 from "../../assets/img/gallery/gallery-Ethulyia.jpg";
import galleryimg2 from "../../assets/img/gallery/gallery-Nanmani.jpg";
import galleryimg3 from "../../assets/img/gallery/gallery-Ponbhoomi 1.jpg";
import galleryimg4 from "../../assets/img/gallery/gallery-Ponbhoomi.jpg";
import galleryimg5 from "../../assets/img/gallery/gallery-gardenbay.jpg";
import galleryimg6 from "../../assets/img/gallery/gallery-blazingstar.jpg";
import galleryimg7 from "../../assets/img/gallery/gallery-Elanza.jpg";
import galleryimg8 from "../../assets/img/gallery/gallery-Ruby.jpg";
import galleryimg9 from "../../assets/img/gallery/gallery-1.jpeg";
import galleryimg10 from "../../assets/img/gallery/gallery-2.jpeg";
import galleryimg11 from "../../assets/img/gallery/gallery-3.jpeg";
import galleryimg12 from "../../assets/img/gallery/gallery-4.jpeg";
import galleryimg13 from "../../assets/img/gallery/gallery-5.jpeg";
import galleryimg14 from "../../assets/img/gallery/gallery-6.jpeg";
import galleryimg15 from "../../assets/img/gallery/gallery-7.jpeg";
import galleryimg16 from "../../assets/img/gallery/gallery-8.jpeg";
import galleryimg17 from "../../assets/img/gallery/gallery-9.jpeg";

const ImageGallery = () => {
  const images = [
    galleryimg1,
    galleryimg2,
    galleryimg3,
    galleryimg4,
    galleryimg5,
    galleryimg6,
    galleryimg7,
    galleryimg8,
    galleryimg9,
    galleryimg10,
    galleryimg11,
    galleryimg12,
    galleryimg13,
    galleryimg14,
    galleryimg15,
    galleryimg16,
    galleryimg17,
  ];

  // Function to decide column size
  const getColumnClass = (index) => {
    if (index >= 3 && index < 5) return "col-md-6"; // 2 columns section
    return "col-md-4"; // default 3 columns
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          {/* Title */}
          <div className="col-md-12">
            <div className="section-subtitle">Images</div>
            <div className="section-title">Image Gallery</div>
          </div>

          {/* Gallery */}
          {images.map((src, index) => (
            <div
              key={index}
              className={`${getColumnClass(index)} gallery-item`}
            >
              <a href={src} className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src={src}
                      className="img-fluid mx-auto d-block"
                      alt={`gallery-${index + 1}`}
                      loading="lazy"   // ✅ Performance optimization
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
