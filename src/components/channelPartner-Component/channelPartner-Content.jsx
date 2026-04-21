import React from "react";

const ChannelPartnerContent = () => {
    const benefits = [
    {
      title: "High-Earning Potential",
      desc: "Enjoy attractive commissions for every successful deal.",
    },
    {
      title: "Marketing Support",
      desc: "Get access to brochures, banners, and digital media to help you promote our projects.",
    },
    {
      title: "Priority Project Information",
      desc: "Be the first to know about new launches, offers, and inventory updates.",
    },
    {
      title: "Prompt Payouts",
      desc: "We value your efforts—timely payments are guaranteed.",
    },
    {
      title: "Dedicated Relationship Manager",
      desc: "Our team is here to support you at every step.",
    },
    {
      title: "Trust & Transparency",
      desc: "Work with a brand known for honesty and integrity.",
    },
  ];
  return (
    <>
    <section className="about section-padding ">
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 mb-30 animate-box"
            data-animate-effect="fadeInUp"
          >
            {/* <span>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
            </span> */}
            {/* <div className="section-subtitle">GP Homes</div> */}
            {/* <div className="section-title">Enjoy a Luxury Experience</div> */}
            <h3 className="section-title">Channel Partner</h3>
            <h2>Partner with Us </h2>

            <p>
              At GP Homes, we believe in growing together. Our Channel Partner
              Program is built on trust, transparency, and mutual success. If
              you're a real estate agent, broker, or property consultant, this
              is your opportunity to work alongside a brand that’s committed to
              quality and credibility. We’re not just looking for partners—we’re
              building long-term relationships.
            </p>
            <h2>About GP Homes</h2>

            <p>
              GP Homes is one of Chennai’s most respected real estate
              developers, known for crafting homes that stand the test of time.
              With a focus on quality construction, timely delivery, and
              customer satisfaction, we’ve earned the trust of hundreds of
              homeowners across the city. Our projects are thoughtfully designed
              and strategically located to offer the best of modern living.
            </p>
            <p>
                We are also a proud member of CREDAI (Confederation of Real Estate Developers' Associations of India), which reflects our adherence to the highest industry standards and ethical practices.
            </p>
          </div>
        </div>
      </div>
      <div
        className=" animate-box pt-4 px-4 d-none d-md-block"
        style={{ backgroundColor: "rgb(177 169 169 / 12%)" }}
      ></div>
    </section>

    <section className="container" data-animate-effect="fadeInDown">
      <div className="row">
        <h2 className="text-center mb-4">Why Partner with GP Homes?</h2>
        {benefits.map((item, index) => (
          <div key={index} className="col-12 col-md-6 mb-4">
            <div className="d-flex benefit-card p-3 h-100">
              
              {/* Bullet Icon */}
              <div className="bullet me-3">✔</div>

              {/* Content */}
              <div>
                <h5 className="mb-1 fw-bold">{item.title}:</h5>
                <p className="mb-0 text-muted">{item.desc}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      {/* <div className="mt-4">
        
        <p className="text-center fw-medium">
          Whether you’re new to the field or an experienced professional,
          you’ll find strong support and exciting opportunities at 
           <span className="fw-bold"> GP Homes.</span>
        </p>
      </div> */}
    </section>
    </>
  );
};

export default ChannelPartnerContent;
