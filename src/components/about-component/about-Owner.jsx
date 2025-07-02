import React from 'react';
import owner1 from '../../assets/img/pricing/owner1.jpg';
import owner2 from '../../assets/img/pricing/owner2.jpg';
import owner3 from '../../assets/img/pricing/owner3.jpg';
import pricingImage3 from '../../assets/img/pricing/3.jpg';
import pricingImage4 from '../../assets/img/pricing/4.jpg';

const AboutPricing = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold mb-5">Explore Our Features</h2>

      {/* Block 1: Image Left, Text Right */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            src={owner2}
            alt="Feature 1"
            className="img-fluid rounded w-75"
          />
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold">Mr. Elumalai- Chariman& Managing Director</h4>
          <p>
            Mr. Elumalai is the Chairman and Managing Director of M/s. GP Homes
            Private Limited, a leading real estate company. He embarked on his
            entrepreneurial journey as a humble businessman with EGP Foundation,
            a proprietary business established in 2010. Through sheer hard work
            and astute industry insight, he propelled the business forward,
            earning a stellar reputation in the real estate market. Starting
            with just 5 team members, Mr. Elumalai strategically expanded his
            workforce to encompass over 40 skilled professionals, including a
            team of 10+ engineers. His vision and leadership have not only
            established the company but also cultivated a loyal clientele base.
            In 2013, he founded GP Homes Private Limited, marking a significant
            milestone in his career. With a discerning eye for lucrative
            projects and a steadfast commitment to timely execution, Mr.
            Elumalai has been the driving force behind the company's success
            story. His strategic acumen and proactive approach have enabled GP
            Homes to achieve remarkable growth and consistently surpass industry
            benchmarks. A visionary leader, Mr. Elumalai continuously sets
            ambitious goals for the company, motivating his team to strive for
            excellence. Despite his seasoned experience, he remains agile and
            innovative, embodying the spirit of a youthful entrepreneur. Through
            his relentless dedication and unwavering determination, Mr. Elumalai
            continues to steer GP Homes towards greater heights of success,
            ensuring its position as a frontrunner in the real estate sector.
          </p>
        </div>
      </div>

      {/* Block 2: Image Right, Text Left */}
      <div className="row align-items-center flex-md-row-reverse mb-5">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            src={owner3}
            alt="Feature 2"
            className="img-fluid rounded w-75 align-self-end"
          />
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold">
            Mr. Gunabalachandar- Director (Head of Project, Operations)
          </h4>
          <p>
            Mr. Gunabalachandar, a graduate in Civil Engineering from
            VelammalEngineering College in 2013, has been an integral part of
            the company since 2014, serving as a full-time director. With a
            focused responsibility over Projects and Operations Department, he
            plays a pivotal role as a deal maker within the organization. Guided
            by the wisdom and support of the company's promoter, Mr.
            Gunabalachandar exhibits a remarkable ability to make timely and
            informed decisions, ensuring swift execution of all projects. As a
            second-generation entrepreneur, he possesses a keen understanding of
            the company's needs, steering it towards a path of success through
            strategic planning and effective team management. Mr.
            Gunabalachandar's visionary approach and profound knowledge of the
            construction industry enable him to actively engage with leading
            real estate associations such as CREDAI. Through his active
            participation, he fosters the exchange of beneficial ideas among
            industry peers, contributing to the collective advancement of the
            sector. His expertise and relentless dedication serve as the
            cornerstone of the company's success, exemplifying his commitment to
            driving growth and innovation within the organization.
          </p>
        </div>
      </div>

      {/* Block 3: Image Left, Text Right */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            src={owner1}
            alt="Feature 3"
            className="img-fluid rounded w-75"
          />
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold">
            Dr. E.Prathapraj - Director (Heading Administration & HR)
          </h4>
          <p>
            This is a paragraph describing the third feature. Final entry in the
            alternating layout.Dr. E. Prathapraj, Director (Heading
            Administration & HR), brings a unique blend of medical expertise and
            administrative acumen to the company. A graduate of MBBS from SRM
            Medical College Hospital And Research Centre in 2022, Dr.Prathapraj
            transitioned into a full-time director role in 2023, where he has
            since played a pivotal role in shaping the company's administrative
            and human resources functions. With a natural ability to connect
            with people, Dr.Prathapraj spearheads the administration and HR
            team, ensuring seamless coordination and optimal utilization of
            resources. His strategic oversight ensures that the right talent is
            allocated to the appropriate tasks, fostering efficiency and
            cost-effectiveness from a management standpoint. Drawing upon his
            medical background, Dr.Prathapraj brings a unique perspective to the
            administrative landscape, leveraging his understanding of human
            behavior and organizational dynamics to drive productivity and
            employee satisfaction. Through his leadership, the company continues
            to thrive, guided by principles of effective resource management and
            strategic human capital development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPricing;