import React from 'react';
import pricingImage1 from '../../assets/img/pricing/1.jpg';
import pricingImage2 from '../../assets/img/pricing/2.jpg';
import pricingImage3 from '../../assets/img/pricing/3.jpg';
import pricingImage4 from '../../assets/img/pricing/4.jpg';

const AboutPricing = () => {
  return (
    <section className="pricing section-padding bg-blck">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="section-subtitle"><span>Best Prices</span></div>
            <div className="section-title"><span>Extra Services</span></div>
            <p className="color-2">The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.</p>
            <p className="color-2">Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.</p>
            <div className="reservations mb-30">
              <div className="icon"><span className="flaticon-call"></span></div>
              <div className="text">
                <p className="color-2">For information</p>
                <a href="tel:855-100-4444">855 100 4444</a>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="owl-carousel owl-theme">
              {/* Pricing Card 1 */}
              <div className="pricing-card">
                <img src={pricingImage1} alt="Room cleaning" />
                <div className="desc">
                  <div className="name">Room cleaning</div>
                  <div className="amount">$50<span>/ month</span></div>
                  <ul className="list-unstyled list">
                    <li><i className="ti-check"></i> Hotel ut nisan the duru</li>
                    <li><i className="ti-check"></i> Orci miss natoque vasa ince</li>
                    <li><i className="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                  </ul>
                </div>
              </div>
              {/* Pricing Card 2 */}
              <div className="pricing-card">
                <img src={pricingImage2} alt="Drinks included" />
                <div className="desc">
                  <div className="name">Drinks included</div>
                  <div className="amount">$30<span>/ daily</span></div>
                  <ul className="list-unstyled list">
                    <li><i className="ti-check"></i> Hotel ut nisan the duru</li>
                    <li><i className="ti-check"></i> Orci miss natoque vasa ince</li>
                    <li><i className="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                  </ul>
                </div>
              </div>
              {/* Pricing Card 3 */}
              <div className="pricing-card">
                <img src={pricingImage3} alt="Room Breakfast" />
                <div className="desc">
                  <div className="name">Room Breakfast</div>
                  <div className="amount">$30<span>/ daily</span></div>
                  <ul className="list-unstyled list">
                    <li><i className="ti-check"></i> Hotel ut nisan the duru</li>
                    <li><i className="ti-check"></i> Orci miss natoque vasa ince</li>
                    <li><i className="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                  </ul>
                </div>
              </div>
              {/* Pricing Card 4 */}
              <div className="pricing-card">
                <img src={pricingImage4} alt="Safe & Secure" />
                <div className="desc">
                  <div className="name">Safe & Secure</div>
                  <div className="amount">$15<span>/ daily</span></div>
                  <ul className="list-unstyled list">
                    <li><i className="ti-check"></i> Hotel ut nisan the duru</li>
                    <li><i className="ti-check"></i> Orci miss natoque vasa ince</li>
                    <li><i className="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPricing;
