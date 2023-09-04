import React, { useEffect } from "react";
import Hero_12 from "../../../components/PublicUI/hero/hero_12";
import Meta from "../../../components/PublicUI/Meta";
import TrustedPartner from "../../../components/PublicUI/dao/TrustedPartner";
import ProSaleBanner from "../../../components/PublicUI/ico-landing/ProSaleBanner";
import CallToActions from "../../../components/PublicUI/ico-landing/CallToActions";
import Testimonial2 from "../../../components/PublicUI/testimonial/Testimonial2";
import RoadMap from "../../../components/PublicUI/ico-landing/RoadMap";
import Team from "../../../components/PublicUI/ico-landing/Team";
import Faq from "../../../components/PublicUI/ico-landing/faq";
import Benifits from "../../../components/PublicUI/ico-landing/Benifits";

const Home_12 = () => {
  useEffect(() => {
    const header = document.querySelector("header");
    header.classList.add("bg-white/[.15]");
  }, []);

  return (
    <>
      <Meta title="Home 12" />
      <Hero_12 />
      <ProSaleBanner />
      <TrustedPartner />
      <Faq />
      <Benifits />
      <Team />
      <RoadMap />
      <Testimonial2 />
      <CallToActions />
    </>
  );
};

export default Home_12;
