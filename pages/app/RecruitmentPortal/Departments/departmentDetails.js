import React from "react";
import dynamic from "next/dynamic";
import Banner from "@/components/RecruitmentPortal/banner";
import Footer from "@/components/RecruitmentPortal/footer";
import style from "@/public/style/RecruitmentPortal/departmentDetails.module.css";
import { TiDeviceLaptop } from "react-icons/ti";
import { MdLocationOn } from 'react-icons/md';
import {FaDollarSign} from 'react-icons/fa';
import {ImOffice} from 'react-icons/im';
import {IoMdPeople} from 'react-icons/io';
import Link from "next/link";
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
import {TiArrowRight} from 'react-icons/ti';
import logo from '@/public/img/RecruitmentPortal/client/circle-logo.png';
import Image from "next/image";
const DepartmentDetails = () => {
  return (
    <ClassicLayout>
      <>
        <Banner />
        <div className={style.container}>
          <div className={style.innerContainer}>
            <div className={style.leftSection}>
                <div className={style.leftTop}>
                    <div><Image src={logo} alt="logo" height={80} width={80}/></div>
                    <p>CircleCI</p>
                    <p>Internet Services</p>
                </div>
                <div className={style.leftBottom}>
                    <p>Comany Details:</p>
                    <div>
                        <MdLocationOn color="#e8590c" size={20}/>
                        <p>Location:</p>
                        <p>San Francisco</p>
                    </div>
                    <div>
                        <ImOffice color="#e8590c" size={20}/>
                        <p>Company:</p>
                        <p>circleci.com</p>
                    </div>
                    <div>
                        <FaDollarSign color="#e8590c" size={20}/>
                        <p>Revenue:</p>
                        <p>$ 5M / Annual</p>
                    </div>
                    <div>
                         <IoMdPeople color="#e8590c" size={20}/>                                
                        <p>No of employees:</p>
                        <p>200</p>
                    </div>
                    <button>Apply Now</button>
                </div>

            </div>
            <div className={style.rightSection}>
              <p className={style.heading}>About us:</p>
              <p className={style.para}>
                Almost no business is immune from the need for quality software
                development. The act of building quality software, and shipping
                it quickly, has become the core engine of value creation in
                companies across all industries. CircleCI allows teams to
                rapidly release code they trust by automating the build, test,
                and delivery process. Thousands of leading companies, including
                Samsung, Ford Motor Company, Spotify, Lyft, Coinbase, PagerDuty,
                Stitch Fix, and BuzzFeed rely on CircleCI to accelerate delivery
                and improve quality.
              </p>
              <p className={style.para}>
                CircleCI was named a Leader in cloud-native continuous
                integration by Forrester in 2021 and has been named to multiple
                Best DevOps Tools lists. CircleCI is the first CI/CD tool to
                become FedRAMP certified and processes more than 30 million
                builds each month across Linux, macOS, Docker and Windows build
                environments.
              </p>
              <p className={style.para}>
                Founded in 2011 and headquartered in San Francisco with a global
                remote workforce, CircleCI is venture-backed by Scale Venture
                Partners, Threshold Ventures (formerly DFJ), Baseline Ventures,
                Top Tier Capital, Industry Ventures, Heavybit, Harrison Metal
                Capital, Owl Rock Capital Partners, and NextEquity Partners.
              </p>
              <p className={style.heading}>Join The Team:</p>
              <p className={style.para}>
                Started in 2011, we have grown to over 200 employees all over
                the world. Headquartered in San Francisco, we have offices in
                London, Tokyo, Toronto, Boston, and Denver, with team members
                working across 50+ cities and 13 countries.
              </p>
              <div className={style.jobSection}>
                <div className={style.cardCollection}>
                  <div className={style.card}>
                    <div className={style.logoBox}>
                    <TiDeviceLaptop size={20} color="#4f46e5e6" />
                    </div>
                    <div className={style.cardInner}>
                      <p>Senior Web Developer</p>
                      <p>London, UK</p>
                    </div>
                  </div>
                  <div className={style.card}>
                  <div className={style.logoBox}>
                    <TiDeviceLaptop size={20} color="#4f46e5e6" />
                    </div>
                    <div className={style.cardInner}>
                      <p>Front-End Developer</p>
                      <p>Brasilia, Brazil</p>
                    </div>
                  </div>
                </div>
                <div className={style.cardCollection}>
                  <div className={style.card}>
                    <div className={style.logoBox}>
                    <TiDeviceLaptop size={20} color="#4f46e5e6" />
                    </div>
                    <div className={style.cardInner}>
                      <p>Senior Web Developer</p>
                      <p>London, UK</p>
                    </div>
                  </div>
                  <div className={style.card}>
                  <div className={style.logoBox}>
                    <TiDeviceLaptop size={20} color="#4f46e5e6" />
                    </div>
                    <div className={style.cardInner}>
                      <p>Front-End Developer</p>
                      <p>Brasilia, Brazil</p>
                    </div>
                  </div>
                </div>
                <div className={style.cardCollection}>
                  <div className={style.card}>
                    <div className={style.logoBox}>
                    <TiDeviceLaptop size={20} color="#4f46e5e6" />
                    </div>
                    <div className={style.cardInner}>
                      <p>Senior Web Developer</p>
                      <p>London, UK</p>
                    </div>
                  </div>
                  <div className={style.card}>
                  <div className={style.logoBox}>
                    <TiDeviceLaptop size={20} color="#4f46e5e6" />
                    </div>
                    <div className={style.cardInner}>
                      <p>Front-End Developer</p>
                      <p>Brasilia, Brazil</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/app/RecruitmentPortal/Job/JobListing">
              <div style={{display: "flex"}}>
              <p style={{color: "#4f46e5e6", fontSize: "16px"}}>See All Jobs</p>
              <TiArrowRight color="#4f46e5e6" size={25}/>
              </div>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </ClassicLayout>
  );
};

export default DepartmentDetails;
