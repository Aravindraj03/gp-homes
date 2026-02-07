import React, { Fragment } from 'react'
import ChannelPartnerBanner from './channelPartner-Banner';
import ChannelPartnerSection from './channelPartner-Content';
import ChannelPartnerRegisterNow from './channelPartner-RegisterNow';
import Header from "../common/header";
import Footer from "../common/footer";
import ChannelMarquee from './channelPartner-time-ticker';

function ChannelPartnerPage() {
  return (
    <Fragment>
      <Header />
      <ChannelPartnerBanner />
      <ChannelPartnerSection />
      <ChannelMarquee />
      <ChannelPartnerRegisterNow />
      <Footer />
    </Fragment>
  );
}
export default ChannelPartnerPage