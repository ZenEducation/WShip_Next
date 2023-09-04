import React from "react";
import Meta from "../../../components/PublicUI/Meta";
import Download from "../../../components/PublicUI/blog/download";
import {
  Auctions_categories,
  Bids,
  Browse_category,
  Partners,
} from "../../../components/PublicUI/component";
import Collection_category from "../../../components/PublicUI/collectrions/collection_category";
import Hero_6 from "../../../components/PublicUI/hero/hero_6";
import Testimonial from "../../../components/PublicUI/blog/Testimonial";

const Home_6 = () => {
  return (
    <>
      <Meta title="Home 6" />
      <Hero_6 />
      <Bids />
      <Collection_category bgWhite={true} />
      <Auctions_categories />
      <Browse_category bgWhite={true} />
      <Testimonial bgWhite={true} />
      <Partners />
      <Download />
    </>
  );
};

export default Home_6;
