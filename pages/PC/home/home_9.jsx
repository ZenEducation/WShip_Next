import React, { useEffect, useState } from "react";
import Benifits from "../../../components/PublicUI/dao/Benifits";
import Intro from "../../../components/PublicUI/dao/Intro";
import Participate from "../../../components/PublicUI/dao/Participate";
import NewseLatter2 from "../../../components/PublicUI/dao/newseLatter2";
import { Partners } from "../../../components/PublicUI/component";
import Hero_9 from "../../../components/PublicUI/hero/hero_9";
import Meta from "../../../components/PublicUI/Meta";
import TrustedPartner from "../../../components/PublicUI/dao/TrustedPartner";

const Home_9 = () => {
  useEffect(() => {
    const header = document.querySelector("header");
    header.classList.add("bg-white/[.15]");
  }, []);

  return (
    <>
      <Meta title="Home 9" />
      <Hero_9 />
      <Partners />
      <Intro />
      <Benifits />
      <Participate />
      <TrustedPartner />
      <NewseLatter2 bgWhite={false} />
    </>
  );
};

export default Home_9;
