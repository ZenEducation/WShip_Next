import React from "react";
import Meta from "../../../components/PublicUI/Meta";
import { Partners } from "../../../components/PublicUI/component";
import Hero_7 from "../../../components/PublicUI/hero/hero_7";
import Services from "../../../components/PublicUI/services/services";
import Promo from "../../../components/PublicUI/promo/promo";
import Testimonial from "../../../components/PublicUI/testimonial/Testimonial";
import Faq from "../../../components/PublicUI/faq/faq";
import Cta from "../../../components/PublicUI/cta/cta";
import Financialnews from "../../../components/PublicUI/blog/financialnews";

const Home_7 = () => {
  return (
    <>
      <Meta title="Home 7" />
      <Hero_7 />
      <Partners />
      <Services />
      <Promo />
      <Testimonial />
      <Faq />
      <Financialnews />
      <Cta />
    </>
  );
};

export default Home_7;
