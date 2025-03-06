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
    icon: "bi bi-headset",
    title: "Customer Service",
    description:
      "We are dedicated to providing exceptional customer service to every customer, no matter the circumstance.",
  },

  {
    icon: "bi bi-gift",
    title: "On-time Delivery",
    description:
      "We are industry pioneers known for our timely possession and on-time handovers. When it comes to precise project delivery, it has to be a GP Homes project.",
  },

  {
    icon: "bi bi-universal-access-circle",
    title: "Accessibility",
    description:
      "Our projects are strategically located to keep you close to commercial hubs, educational institutions, and healthcare facilities, ensuring seamless accessibility to everything you need.",
  },

  {
    icon: "bi bi-tags",
    title: "Affordable Price",
    description:
      "Real estate is one of life’s most valuable investments, and we make it our priority to offer you the safest, most affordable investment of a lifetime.",
  },


];

const HomeFacilities = () => {
  return (
    <section className="facilties section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="section-title text-uppercase facilities-title">
              25 Years Of experience{""}
            </h1>
            <h2 className="section-subtitle mb-30 text-uppercase">
              We continue our legacy of success, shaping the future and
              redefining Chennai’s skyline.
            </h2>
          </div>
        </div>
        <Marquee speed={50} gradient={false}>
          <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
            <div style={{ width: "15px" }} />
            {FacilitiesDetails.map((data, index) => (
              <div className="card py-1 px-4" key={index} style={{ width: "250px",height:"300px", border:"1px solid grey" }}>
                <div className="text-center">
                  <i className={`${data.icon} facilities-icon`}></i>
                </div>
                <h5 className="text-center" >{data.title}</h5>
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
