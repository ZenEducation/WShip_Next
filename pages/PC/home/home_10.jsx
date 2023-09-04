import { Partners } from "../../../components/PublicUI/component";
import DownloadAppBanner from "../../../components/PublicUI/crypto/DownloadAppBanner";
import FancyBlock from "../../../components/PublicUI/crypto/FancyBlock";
import Feature from "../../../components/PublicUI/crypto/feature";
import WalletFeature from "../../../components/PublicUI/crypto/wallet-feature";
import NeedHelpBlock from "../../../components/PublicUI/crypto/nee-help-block";
import Hero_10 from "../../../components/PublicUI/hero/hero_10";
import Meta from "../../../components/PublicUI/Meta";
import Testimonial from "../../../components/PublicUI/testimonial/Testimonial";
import React from "react";
const Home_1 = () => {
  return (
    <main>
      <Meta title="Home 10" />
      <Hero_10 />
      <Feature />
      <FancyBlock />
      <Partners />
      <WalletFeature />
      <Testimonial />
      <DownloadAppBanner />
      <NeedHelpBlock />
    </main>
  );
};

export default Home_1;
