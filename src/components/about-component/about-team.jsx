import React from "react";

import teamimg1 from "../../assets/img/team/4.jpg";
import teamimg2 from "../../assets/img/team/1.jpg";
import teamimg3 from "../../assets/img/team/2.jpg";
import teamimg4 from "../../assets/img/team/5.jpg";
import teamimg5 from "../../assets/img/team/3.jpg";
import teamimg6 from "../../assets/img/team/6.jpg";

// Team Component
const AboutTeam = () => {
  const teamMembers = [
    {
      img: teamimg1,
      name: "Valentina Karla",
      role: "General Manager",
      email: "valentina@hotel.com",
      socials: ["instagram", "twitter", "facebook", "pinterest"],
    },
    {
      img: teamimg2,
      name: "Micheal White",
      role: "Guest Service Department",
      email: "micheal@hotel.com",
      socials: ["instagram", "twitter", "facebook", "pinterest"],
    },
    {
      img: teamimg3,
      name: "Olivia Martin",
      role: "Reservations Manager",
      email: "olivia@hotel.com",
      socials: ["instagram", "twitter", "facebook", "pinterest"],
    },
    {
      img: teamimg4,
      name: "Mariana Dana",
      role: "F&B Manager",
      email: "mariana@hotel.com",
      socials: ["instagram", "twitter", "facebook", "pinterest"],
    },
    {
      img: teamimg5,
      name: "Enrico Brown",
      role: "Head Chef",
      email: "enrico@hotel.com",
      socials: ["instagram", "twitter", "facebook", "pinterest"],
    },
    {
      img: teamimg6,
      name: "Victoria Dan",
      role: "Meetings and Events Manager",
      email: "victoria@hotel.com",
      socials: ["instagram", "twitter", "facebook", "pinterest"],
    },
  ];

  return (
    <section className="team section-padding bg-cream">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-subtitle">Professionals</div>
            <div className="section-title">Meet The Team</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 owl-carousel owl-theme">
            {teamMembers.map((member, index) => (
              <div className="item" key={index}>
                <div className="img">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="info">
                  <h6>{member.name}</h6>
                  <p>{member.role}</p>
                  <div className="social valign">
                    <div className="full-width">
                      {member.socials.map((social, idx) => (
                        <a href="#" key={idx}>
                          <i className={`ti-${social}`}></i>
                        </a>
                      ))}
                      <p>{member.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
