import React from 'react';

import clientimg1 from "../../assets/img/clients/1.png";
import clientimg2 from "../../assets/img/clients/2.png";
import clientimg3 from "../../assets/img/clients/3.png";
import clientimg4 from "../../assets/img/clients/4.png";
import clientimg5 from "../../assets/img/clients/5.png";
import clientimg6 from "../../assets/img/clients/6.png";

const HomeClients = () => {
  return (
    <section className="clients">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            {/* <OwlCarousel className="owl-carousel owl-theme"> */}
              {/* Client Logo 1 */}
              <div className="clients-logo">
                <a href="#0">
                  <img src={clientimg1} alt="Client 1" />
                </a>
              </div>

              {/* Client Logo 2 */}
              <div className="clients-logo">
                <a href="#0">
                  <img src={clientimg2} alt="Client 2" />
                </a>
              </div>

              {/* Client Logo 3 */}
              <div className="clients-logo">
                <a href="#0">
                  <img src={clientimg3} alt="Client 3" />
                </a>
              </div>

              {/* Client Logo 4 */}
              <div className="clients-logo">
                <a href="#0">
                  <img src={clientimg4} alt="Client 4" />
                </a>
              </div>

              {/* Client Logo 5 */}
              <div className="clients-logo">
                <a href="#0">
                  <img src={clientimg5} alt="Client 5" />
                </a>
              </div>

              {/* Client Logo 6 */}
              <div className="clients-logo">
                <a href="#0">
                  <img src={clientimg6} alt="Client 6" />
                </a>
              </div>
            {/* </OwlCarousel> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeClients;
