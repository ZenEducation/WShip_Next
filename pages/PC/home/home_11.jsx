import Partners2 from "../../../components/PublicUI/partners/Partners2";
import CryptoCounter from "../../../components/PublicUI/cryto-trading/CryptoCounter";
import CryptoPrice from "../../../components/PublicUI/cryto-trading/price";
import Features from "../../../components/PublicUI/cryto-trading/Features";
import InvestEarn from "../../../components/PublicUI/cryto-trading/invest-earn";
import ProcessCta from "../../../components/PublicUI/cryto-trading/ProcessCta";
import Hero_11 from "../../../components/PublicUI/hero/hero_11";
import Meta from "../../../components/PublicUI/Meta";
import React from "react";

const Home_1 = () => {
  return (
    <main>
      <Meta title="Home 11" />
      <Hero_11 />
      <CryptoPrice />
      <CryptoCounter />
      <Features />
      <InvestEarn />
      <ProcessCta />
      <Partners2 />
    </main>
  );
};

export default Home_1;
