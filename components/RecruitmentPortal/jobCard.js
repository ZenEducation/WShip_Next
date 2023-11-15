import React from 'react'
import style from '@/public/style/RecruitmentPortal/jobListing.module.css';
import {AiOutlineDollar} from 'react-icons/ai';
import {AiOutlineClockCircle} from 'react-icons/ai';
import department from '@/public/img/RecruitmentPortal/job/department.jpg';
import Image from 'next/image';
const JobCard = ({data}) => {
    console.log(data);
  return (
    <div className={style.cardContainer}>
        <div className={style.upperBox}>
        <p className={style.cardFirst}>
            {data.job}
        </p>
        <div className={style.cardSecond}>
            <AiOutlineClockCircle color='#4f46e5e6' />
            <span>Posted</span>
            <span>3</span>
            <span>Days</span>
            <span>ago</span>
        </div>
        <div className={style.cardThird}>
            <span>Full Time</span>
            <div>
                <AiOutlineDollar color='#4f46e5e6'/>
                <p>$950-$1100/month</p>
            </div>

        </div>
        </div>
        <div className={style.slider}></div>
        <div className={style.lowerBox}>
        <div className={style.cardFourth}>
            <Image src={department} alt="department-logo" height={50} width={50}/>
            <div>
                <p>Finance</p>
                <p>Core finance</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default JobCard