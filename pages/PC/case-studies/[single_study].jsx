import React from "react";
import { useRouter } from "next/router";
import Post from "../../../components/PublicUI/case-studies/post";
import Approach from "../../../components/PublicUI/case-studies/approach";
import Results from "../../../components/PublicUI/case-studies/results";
import Testimonial from "../../../components/PublicUI/testimonial/Testimonial";
import Related_studies from "../../../components/PublicUI/case-studies/related_studies";
import Meta from "../../../components/PublicUI/Meta";

const SingleStudy = () => {
  const router = useRouter();
  const pid = router.query.single_study;

  return (
    <div className="mt-[95px]">
      <Meta title="Single_study || Xhibiter | NFT Marketplace Next.js Template" />
      <Post url={pid} />
      <Approach />
      <Results />
      <Testimonial bg_jacerta={true} />
      <Related_studies />
    </div>
  );
};

export default SingleStudy;
