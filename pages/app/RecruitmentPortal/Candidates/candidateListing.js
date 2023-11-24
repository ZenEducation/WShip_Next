import React from 'react'
import dynamic from "next/dynamic";
import Banner from "@/components/RecruitmentPortal/banner";
import Footer from "@/components/RecruitmentPortal/footer";
import style from '@/public/style/RecruitmentPortal/candidateListing.module.css';
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
    ssr: false,
  });
import { candidateData } from '@/dummyData/candidateListingData';
import CandidateCard from '@/components/RecruitmentPortal/candidateCard';
const CandidateListing = () => {
  return (
    <ClassicLayout>
    <>
      <Banner heading={"Candidate Listing"} />
      <div className={style.container}>
          <div className={style.containerInner}>
          {candidateData.map((item , i)=> {
            return(
                <CandidateCard data={item} key={i}/>
            )
           })}
          </div>
      </div>
      <Footer />
      </>
    </ClassicLayout>
  )
}

export default CandidateListing