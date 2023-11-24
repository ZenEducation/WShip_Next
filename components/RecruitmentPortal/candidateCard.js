import React from "react";
import avatar from "@/public/img/avatars/thumb-1.jpg";
import Image from "next/image";
import { FaLocationDot, FaSearch } from "react-icons/fa";
import style from "@/public/style/RecruitmentPortal/candidateListing.module.css";
import {TiBookmark} from 'react-icons/ti';
import {TiLocation} from 'react-icons/ti';
const CandidateCard = ({item}) => {
  return (
    <div className={style.candidateCard}>
      <div className={style.first}>
        <p>Featured</p>
        <div>
        <TiBookmark size={20}/>
        </div>
      </div>
      <div className={style.second}>
        <Image height={80} width={80} src={avatar} alt="avatar" />
        <p>Calvin Carlo</p>
        <p>Web Desginer</p>
      </div>
      <div className={style.third}>
        <div>
            <TiLocation color="#4f46e5e6" size={20}/>
            <p>London</p>
        </div>
        <div>
          <p>$3300/month</p>
        </div>
      </div>
      <div className={style.fourth}>
        <p>PHP</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>WordPress</p>
      </div>
      <button>View Profile</button>
    </div>
  );
};

export default CandidateCard;
