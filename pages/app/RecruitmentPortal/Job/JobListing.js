import React from "react";
import dynamic from "next/dynamic";
import Banner from "@/components/RecruitmentPortal/banner";
import Footer from "@/components/RecruitmentPortal/footer";
import style from "@/public/style/RecruitmentPortal/jobListing.module.css";
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
import JobCard from "@/components/RecruitmentPortal/jobCard";
import Image from "next/image";
import { jobData } from "@/dummyData/jobListingData";
import {FaLocationDot , FaSearch} from 'react-icons/fa';

const JobListing = () => {
  return (
    <ClassicLayout>
      <>
        <Banner heading={"Job Listings"} />
        {/* Search Section */}
        <div className={style.searchContainer}>
          <div className={style.searchInner}>
          <div className={style.inputBox}>
            <FaSearch  color='#4f46e5e6'/>
          <input type="text" placeholder="Search your keywords"/>
          </div>
          <select className={style.selectBox}>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
          <select className={style.selectBox}>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
          <button>Search</button>
          </div>
        </div>
       
        <div className={style.container}>
          {/* Search Section */}
          {/* Jobs Section */}
          <div className={style.jobSection}>
            {jobData.map((item, i) => {
              return <JobCard key={i} data={item} />;
            })}
          </div>
          {/* Pagination Section */}
        </div>
        <Footer />o
      </>
    </ClassicLayout>
  );
};

export default JobListing;
