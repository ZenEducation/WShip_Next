import React from "react";
import {
  Hero,
  Bids,
  Top_collection,
  Tranding_category,
  NewseLatter,
} from "../../../components/PublicUI/component";
import Meta from "../../../components/PublicUI/Meta";

const Home_1 = () => {
  return (
    <main>
      <Meta title="Home 1" />
      <Hero />
      <Bids />
      <Top_collection />
      <Tranding_category />
      <NewseLatter />
    </main>
  );
};

export default Home_1;
