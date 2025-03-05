import React from "react";
import Marquee from "react-fast-marquee";

const FacilitiesDetails = [
  {
    icon: "bi bi-patch-check",
    title: "Quality 1",
    description:
      "From day one, we've ensured that only the finest construction materials are used to create homes designed to be a lasting legacy.",
  },

  {
    icon: "bi bi-patch-check",
    title: "Quality",
    description:
      "From day one, we've ensured that only the finest construction materials are used to create homes designed to be a lasting legacy.",
  },

  {
    icon: "bi bi-patch-check",
    title: "Quality",
    description:
      "From day one, we've ensured that only the finest construction materials are used to create homes designed to be a lasting legacy.",
  },

  {
    icon: "bi bi-patch-check",
    title: "Quality",
    description:
      "From day one, we've ensured that only the finest construction materials are used to create homes designed to be a lasting legacy.",
  },

  {
    icon: "bi bi-patch-check",
    title: "Quality",
    description:
      "From day one, we've ensured that only the finest construction materials are used to create homes designed to be a lasting legacy.",
  },

  {
    icon: "bi bi-patch-check",
    title: "Quality 6",
    description:
      "From day one, we've ensured that only the finest construction materials are used to create homes designed to be a lasting legacy.",
  },
];

const HomeFacilities = () => {
  return (
    <section className="facilties section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="section-title text-uppercase">
              25 Years Of experience{""}
            </h1>
            <h2 className="section-subtitle mb-30 text-uppercase">
              We continue our legacy of success, shaping the future and
              redefining Chennai’s skyline.
            </h2>
          </div>
        </div>
        <Marquee speed={50} gradient={false}>
          <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
            <div style={{ width: "15px" }} /> {/* Spacer at Start */}
            {FacilitiesDetails.map((data, index) => (
              <div className="card py-1 px-4" key={index} style={{ width: "250px", border:"1px solid grey" }}>
                <div>
                  <i className={`${data.icon} facilities-icon`}></i>
                </div>
                <h5>{data.title}</h5>
                <p>{data.description}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default HomeFacilities;
