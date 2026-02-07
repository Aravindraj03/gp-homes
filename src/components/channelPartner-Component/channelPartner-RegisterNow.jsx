import React from 'react'



const ChannelPartnerRegisterNow = () => {
    const handleClick = () => {
    window.open("https://gphomespartnersclub.in/users/sign_in", "_blank");
  };
  return (
    <section className="about section-padding ">
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 mb-30 animate-box"
            data-animate-effect="fadeInUp"
          >
           
            
            <h2 className='text-center'>Let’s Build Success Together </h2>
            <div className="text-center my-4">
       <button className="shine-btn" onClick={handleClick}>
        REGISTER NOW
      </button>
    </div>

            <p className='fs-5'>
              Become a GP Homes Channel Partner today and take the next step in your professional growth. We’re here to empower you with everything you need to succeed.

            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChannelPartnerRegisterNow