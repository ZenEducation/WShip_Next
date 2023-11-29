import React from 'react'
import CardImage from '@/public/img/lms/LearnerUI/card-image.png';
import {FaRegEdit , FaPlay} from 'react-icons/fa';
import style from '@/styles/lms/LearnerUI/enrollments.module.css';
import Image from 'next/image';
const EnrollmentCard = ({data , i}) => {
  return (
    <div className={style.card}>
      <div className={style.cardDiv1}>
        <Image src={data.img} alt="card-image" height={200} width={"100%"}/>
        <div className={style.circle}>{data.percentageComplete}%</div>
      </div>
      <div className={style.cardDiv2}>
        <p>{data.heading}</p>
        <p>{data.status}</p>
      </div>
      <div className={style.cardDiv3}>
        <div>
        <FaRegEdit/>
        <p>See Overview</p>
        </div>
        <div>
        <FaPlay color='black'/>
        <p>{data.percentageComplete > 0 ? "Resume Course" : "Start Course"}</p>
        </div>
      </div>
    </div>
  )
}

export default EnrollmentCard