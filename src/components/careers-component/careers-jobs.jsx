import React from "react";

const CareersJobs = () => {
  const positions = [
    {
      title: "Pre-Sales (Female Telecallers)",
      type: "Employee",
      experience: "Freshers - 3 Years of experience",
      employmentType: "Full-time",
      // link: "contact",
    },
    {
      title: "Sales Executive",
      type: "Employee",
      experience: "Freshers - 2 Years of experience",
      employmentType: "Full-time",
      twoWheeler: true,
      // link: "contact",
    },
    {
      title: "Senior sales Executive",
      type: "Employee",
      experience: "3 - 5 Years of experience",
      employmentType: "Full-time",
      twoWheeler: true,
      // link: "contact",
    },
  ];

  return (
    <section className="positions section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-40 text-center">
            <p className="positions-intro">
              At <b>GP Homes</b>, our team drives our success. We’re looking for
              passionate and motivated individuals who are eager to grow in the
              real estate industry. If you have strong communication skills, a
              customer-focused approach, and a drive to achieve, we welcome you
              to be part of our journey and build your career with us.
            </p>
          </div>
          <div className="col-md-12 mb-60">
            {positions.map((position, index) => (
              <div key={index} className="position">
                <div className="position-link" href={position.link}></div>
                <div className="position-title">
                  {position.title} <span>{position.type}</span>
                </div>
                <div className="position-location">
                  <span>Experience</span> {position.experience}
                  {position.twoWheeler && (
                    <div className="position-vehicle">Two wheeler Must</div>
                  )}
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
              Please submit your resume and cover letter to <b>hr@gphomes.in</b>{" "}
              & <b>+91 80560 90880</b>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersJobs;
