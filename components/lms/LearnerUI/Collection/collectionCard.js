import React from 'react'
import CardImage from '@/public/img/lms/LearnerUI/card-image.png';
import {FaRegEdit , FaPlay} from 'react-icons/fa';
import style from '@/styles/lms/LearnerUI/collection.module.css';
import Image from 'next/image';
const CollectionCard = ({data , i}) => {
  return (
    <div className={style.card}>
      <div className={style.cardDiv1}>
        <Image src={data.img} alt="card-image" height={200} width={"100%"}/>
        <div className={style.circle}>{data.type}</div>
      </div>
      <div className={style.cardDiv2}>
        <p>{data.heading}</p>
      </div>
      <div className={style.cardDiv3}>
      <p>{data.lessons}</p>
      <p>Lessons</p>
      </div>
    </div>
  )
}

export default CollectionCard