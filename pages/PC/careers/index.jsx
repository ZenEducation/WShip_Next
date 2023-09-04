import React from "react";
import Careers_title from "../../../components/PublicUI/careers/careers_title";
import Positions from "../../../components/PublicUI/careers/positions";
import Meta from "../../../components/PublicUI/Meta";
import Parks from "../../../components/PublicUI/careers/parks";
import { Partners } from "../../../components/PublicUI/component";

const Careers = () => {
  return (
    <div className="mt-[95px]">
      <Meta title="Careers || Xhibiter | NFT Marketplace Next.js Template" />
      <Careers_title />
      <Positions />
      <Parks />
      <Partners />
    </div>
  );
};

export default Careers;
