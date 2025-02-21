import React from 'react';

const AboutFacilities = () => {
  return (
    <section className="facilties section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">20 Years Of experience</div>
            <div className="section-subtitle mb-30">
              We continue our legacy of success, shaping the future and
              redefining Chennai’s skyline.
            </div>
          </div>
        </div>
        <div className="row">
          {/* Facility 1 */}
          <div className="col-md-4">
            <div
              className="single-facility animate-box"
              data-animate-effect="fadeInUp"
            >
              <span className="flaticon-world"></span>
              <h5>Quality</h5>
              <p>
                From day one, we've ensured that only the finest construction
                materials are used to create homes designed to be a lasting
                legacy.
              </p>
              <div className="facility-shape">
                <span className="flaticon-world"></span>
              </div>
            </div>
          </div>
          {/* Facility 2 */}
          <div className="col-md-4">
            <div
              className="single-facility animate-box"
              data-animate-effect="fadeInUp"
            >
              <span className="flaticon-car"></span>
              <h5>Customer Service</h5>
              <p>
                We are dedicated to providing exceptional customer service to
                every customer, no matter the circumstance.
              </p>
              <div className="facility-shape">
                <span className="flaticon-car"></span>
              </div>
            </div>
          </div>
          {/* Facility 3 */}
          <div className="col-md-4">
            <div
              className="single-facility animate-box"
              data-animate-effect="fadeInUp"
            >
              <span className="flaticon-bed"></span>
              <h5>On-time Delivery</h5>
              <p>
                We are industry pioneers known for our timely possession and
                on-time handovers. When it comes to precise project delivery, it
                has to be a GP Homes project.
              </p>
              <div className="facility-shape">
                <span className="flaticon-bed"></span>
              </div>
            </div>
          </div>
          {/* Facility 4 */}
          <div className="col-md-4">
            <div
              className="single-facility animate-box"
              data-animate-effect="fadeInUp"
            >
              <span className="flaticon-swimming"></span>
              <h5>Accessibility</h5>
              <p>
                Our projects are strategically located to keep you close to
                commercial hubs, educational institutions, and healthcare
                facilities, ensuring seamless accessibility to everything you
                need.
              </p>
              <div className="facility-shape">
                <span className="flaticon-swimming"></span>
              </div>
            </div>
          </div>
          {/* Facility 5 */}
          <div className="col-md-4">
            <div
              className="single-facility animate-box"
              data-animate-effect="fadeInUp"
            >
              <span className="flaticon-wifi"></span>
              <h5>Affordable Price</h5>
              <p>
                Real estate is one of life’s most valuable investments, and we
                make it our priority to offer you the safest, most affordable
                investment of a lifetime.
              </p>
              <div className="facility-shape">
                <span className="flaticon-wifi"></span>
              </div>
            </div>
          </div>
          {/* Facility 6 */}
          {/* <div className="col-md-4">
            <div
              className="single-facility animate-box"
              data-animate-effect="fadeInUp"
            >
              <span className="flaticon-breakfast"></span>
              <h5>Breakfast</h5>
              <p>
                Eat tincidunt nisa ace park norttito sit amet space, mus
                nellentesque habitant
              </p>
              <div className="facility-shape">
                <span className="flaticon-breakfast"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutFacilities;
