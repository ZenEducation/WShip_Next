import React, { useEffect } from "react";
import Meta from "../../../components/PublicUI/Meta";
import { Partners } from "../../../components/PublicUI/component";
import Hero_8 from "../../../components/PublicUI/hero/hero_8";
import Intro_video from "../../../components/PublicUI/intro_video";
import Characters from "../../../components/PublicUI/characters";
import Statistic from "../../../components/PublicUI/promo/statistic";
import Statistic_promo_2 from "../../../components/PublicUI/promo/statistic_promo_2";
import Features from "../../../components/PublicUI/features/features";
import Newsletter from "../../../components/PublicUI/nwesletter/newsletter";
import { useTheme } from "next-themes";

const Home_8 = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <>
      <Meta title="Home 8" />
      <Hero_8 />
      <Intro_video />
      <Characters />
      <Statistic />
      <Statistic_promo_2 />
      <Features />
      <Newsletter />
      <Partners />
    </>
  );
};

export default Home_8;
