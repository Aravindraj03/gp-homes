import bgimage from '../../assets/img/slider/channelBanner.jpeg';

const ChannelPartnerBanner = () => {
  return (
    <div
  className="banner-header section-padding valign bg-img banner-wrapper"
  style={{
    backgroundImage: `url(${bgimage})`,
  }}
>
  {/* Register Button */}
  <div className="register-btn-container">
    <button
      className="shine-btn"
      onClick={() =>
        window.open("https://gphomespartnersclub.in/users/sign_in", "_blank")
      }
    >
      REGISTER NOW
    </button>
  </div>
</div>
  );
};

export default ChannelPartnerBanner;