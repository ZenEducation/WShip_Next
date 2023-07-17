import React from "react";
import Story from "../../../components/PublicUI/about/Story";
import Meta from "../../../components/PublicUI/Meta";

const newsletter = () => {
  return (
    <div>
      <Meta title="newseletter || Xhibiter | NFT Marketplace Next.js Template" />
      <div className="pt-[5.5rem] lg:pt-24">
        <Story compFor="news" />
      </div>
    </div>
  );
};

export default newsletter;
