import React from "react";
import dynamic from "next/dynamic";
import Banner from "@/components/RecruitmentPortal/banner";
import Footer from "@/components/RecruitmentPortal/footer";
import style from "@/public/style/RecruitmentPortal/candidateDetails.module.css";
import { TiDeviceLaptop } from "react-icons/ti";
import { MdLocationOn, MdOutlineEmail, MdCall } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";

import {
  FaRegAddressCard,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGift,
} from "react-icons/fa";
import { IoGift, IoMdHome, IoIosGlobe } from "react-icons/io";
import Link from "next/link";
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
import { TiArrowRight } from "react-icons/ti";
import logo from "@/public/img/avatars/thumb-1.jpg";
import circleLogo from "@/public/img/RecruitmentPortal/developer/circle-logo.png";
import shreeLogo from "@/public/img/RecruitmentPortal/developer/shree-logo.png";
import project1 from '@/public/img/RecruitmentPortal/candidate details/project1.jpg';
import project2 from '@/public/img/RecruitmentPortal/candidate details/project2.jpg';
import project3 from '@/public/img/RecruitmentPortal/candidate details/project3.jpg';
import project4 from '@/public/img/RecruitmentPortal/candidate details/project4.jpg';

import Image from "next/image";
const CandidateDetails = () => {
  return (
    <ClassicLayout>
      <>
        <Banner />
        <div className={style.container}>
          <div className={style.innerContainer}>
            <div className={style.leftSection}>
              <div className={style.leftTop}>
                <div>
                  <Image src={logo} alt="logo" height={90} width={90} />
                </div>
                <p>Thomas Brewer</p>
                <p>Thomas Brewer</p>
              </div>
              <div className={style.leftBottom}>
                <p>Comany Details:</p>
                <div>
                  <MdOutlineEmail color="#e8590c" size={20} />
                  <p>Email:</p>
                  <p>thomas@mail.com</p>
                </div>
                <div>
                  <FaGift color="#e8590c" size={20} />
                  <p>D.O.B:</p>
                  <p>31st Dec, 1996</p>
                </div>
                <div>
                  <IoMdHome color="#e8590c" size={20} />
                  <p>Address:</p>
                  <p>15 Razy street</p>
                </div>
                <div>
                  <MdLocationOn color="#e8590c" size={20} />
                  <p>City:</p>
                  <p>London</p>
                </div>
                <div>
                  <IoIosGlobe color="#e8590c" size={20} />
                  <p>Country:</p>
                  <p>UK</p>
                </div>
                <div>
                  <FaRegAddressCard color="#e8590c" size={20} />
                  <p>Postal Code:</p>
                  <p>521452</p>
                </div>
                <div>
                  <MdCall color="#e8590c" size={20} />
                  <p>Mobile:</p>
                  <p>(+125) 1542-8452</p>
                </div>
                <div className={style.socialMediaIcons}>
                  <div>
                    <FaFacebook />
                  </div>
                  <div>
                    <FaInstagram />
                  </div>
                  <div>
                    <FaLinkedin />
                  </div>
                  <div>
                    <FaTwitter />
                  </div>
                  <div>
                    <FaYoutube />
                  </div>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className={style.rightSection}>
              <p className={style.heading}>About us:</p>
              <p className={style.para}>
                Obviously I&apos;M Web Developer. Web Developer with over 3
                years of experience. Experienced with all stages of the
                development cycle for dynamic web projects. The as opposed to
                using &apos;Content here&apos; content here&apos;, making it
                look like readable English.
              </p>
              <p className={style.para}>
                Data Structures and Algorithms are the heart of programming.
                Initially most of the developers do not realize its importance
                but when you will start your career in software development, you
                will find your code is either taking too much time or taking too
                much space.
              </p>
              <p className={`${style.heading} ${style.skillHeading}`}>Skills:</p>
              <div className={style.skillsContainer}>
                <div className={style.skill}>
                  <div>
                    <p>Wordpress</p>
                    <p>84%</p>
                  </div>
                  <ProgressBar
                    isLabelVisible={false}
                    maxCompleted={100}
                    height="8px"
                    bgColor="#4f46e5e6"
                    completed={84}
                  />
                </div>
                <div className={style.skill}>
                  <div>
                    <p>JavaScript</p>
                    <p>79%</p>
                  </div>
                  <ProgressBar
                    isLabelVisible={false}
                    maxCompleted={100}
                    height="8px"
                    bgColor="#4f46e5e6"
                    completed={79}
                  />
                </div>
                <div className={style.skill}>
                  <div>
                    <p>HTML</p>
                    <p>95%</p>
                  </div>
                  <ProgressBar
                    isLabelVisible={false}
                    maxCompleted={100}
                    height="8px"
                    bgColor="#4f46e5e6"
                    completed={95}
                  />
                </div>
              </div>
              <p className={`${style.heading} ${style.experienceHeading}`}>Experience:</p>
              <div className={style.experienceContainer}>
                <div className={style.experienceCard}>
                  <div>
                    <Image src={shreeLogo} alt="logo" height={80} width={80} />
                    <p>2019-22</p>
                  </div>
                  <div>
                    <p>Full Stack Developer</p>
                    <p>Shreethemes - India</p>
                    <p>
                      It seems that only fragments of the original text remain
                      in the Lorem Ipsum texts used today. One may speculate
                      that over the course of time certain letters were added or
                      deleted at various positions within the text.
                    </p>
                  </div>
                </div>
                <div className={style.experienceCard}>
                  <div>
                    <Image src={circleLogo} alt="logo" height={80} width={80} />
                    <p>2017-19</p>
                  </div>
                  <div>
                    <p>Back-end Developer</p>
                    <p>CircleCI - U.S.A.</p>
                    <p>
                      It seems that only fragments of the original text remain
                      in the Lorem Ipsum texts used today. One may speculate
                      that over the course of time certain letters were added or
                      deleted at various positions within the text.
                    </p>
                  </div>
                </div>
              </div>
              <p className={`${style.heading} ${style.projectsHeading}`}>Projects:</p>
              <div className={style.projectContainer}>
                <div>
                    <Image src={project1} alt="project1"/>
                    <Image src={project2} alt="project2"/>
                </div>
                <div>
                    <Image src={project3} alt="project3"/>
                    <Image src={project4} alt="project4"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </ClassicLayout>
  );
};

export default CandidateDetails;
