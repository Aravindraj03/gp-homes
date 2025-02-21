import React from "react";

const CareersJobs = () => {
  const positions = [
    {
      title: "Senior Executive Assistant",
      type: "Manager",
      location: "New York, NY",
      employmentType: "Full-time",
      link: "contact",
    },
    {
      title: "Receptionist",
      type: "Employee",
      location: "San Francisco, CA",
      employmentType: "Full-time",
      link: "contact",
    },
    {
      title: "Senior Architecture",
      type: "Employee",
      location: "New York, NY",
      employmentType: "Full-time",
      link: "contact",
    },
    {
      title: "Intern",
      type: "Intern",
      location: "San Francisco, CA",
      employmentType: "Part-time",
      link: "contact",
    },
  ];

  return (
    <section className="positions section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-60">
            {positions.map((position, index) => (
              <div key={index} className="position">
                <a className="position-link" href={position.link}></a>
                <div className="position-title">
                  {position.title} <span>{position.type}</span>
                </div>
                <div className="position-location">
                  <span>Location</span> {position.location}
                </div>
                <div className="position-time">
                  Employment Type <span>{position.employmentType}</span>
                </div>
                <div className="position-icon">
                  <i className="ti-arrow-top-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>
              <small>
                Please submit a resume and cover letter with compensation history to{" "}
                <b>info[at]luxuryhotel.com</b>.
              </small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersJobs;
