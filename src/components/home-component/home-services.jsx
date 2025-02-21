import React from 'react';
import image1 from '../../assets/img/restaurant/1.jpg';
import image2 from '../../assets/img/spa/3.jpg';
import image3 from '../../assets/img/spa/2.jpg';
import image4 from '../../assets/img/spa/1.jpg';

const HomeServices = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        {/* First Row */}
        <div className="row">
          {/* Restaurant */}
          <div className="col-md-6 p-0 animate-box" data-animate-effect="fadeInLeft">
            <div className="img left">
              <a href="restaurant.html">
                <img src={image1} alt="Restaurant" />
              </a>
            </div>
          </div>
          <div className="col-md-6 p-0 bg-cream valign animate-box" data-animate-effect="fadeInRight">
            <div className="content">
              <div className="cont text-left">
                <div className="info">
                  <h6>Discover</h6>
                </div>
                <h4>The Restaurant</h4>
                <p>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                <div className="butn-dark">
                  <a href="restaurant.html">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row">
          {/* Spa Center */}
          <div className="col-md-6 bg-cream p-0 order2 valign animate-box" data-animate-effect="fadeInLeft">
            <div className="content">
              <div className="cont text-left">
                <div className="info">
                  <h6>Experiences</h6>
                </div>
                <h4>Spa Center</h4>
                <p>Spa center inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                <div className="butn-dark">
                  <a href="spa-wellness.html">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0 order1 animate-box" data-animate-effect="fadeInRight">
            <div className="img">
              <a href="spa-wellness.html">
                <img src={image2} alt="Spa Center" />
              </a>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="row">
          {/* Fitness Center */}
          <div className="col-md-6 p-0 animate-box" data-animate-effect="fadeInLeft">
            <div className="img left">
              <a href="spa-wellness.html">
                <img src={image3} alt="Fitness Center" />
              </a>
            </div>
          </div>
          <div className="col-md-6 p-0 bg-cream valign animate-box" data-animate-effect="fadeInRight">
            <div className="content">
              <div className="cont text-left">
                <div className="info">
                  <h6>Modern</h6>
                </div>
                <h4>Fitness Center</h4>
                <p>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                <div className="butn-dark">
                  <a href="spa-wellness.html">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="row">
          {/* Health Club & Pool */}
          <div className="col-md-6 bg-cream p-0 order2 valign animate-box" data-animate-effect="fadeInLeft">
            <div className="content">
              <div className="cont text-left">
                <div className="info">
                  <h6>Experiences</h6>
                </div>
                <h4>The Health Club & Pool</h4>
                <p>The health club & pool at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                <div className="butn-dark">
                  <a href="spa-wellness.html">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0 order1 animate-box" data-animate-effect="fadeInRight">
            <div className="img">
              <a href="spa-wellness.html">
                <img src={image4} alt="Health Club & Pool" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
