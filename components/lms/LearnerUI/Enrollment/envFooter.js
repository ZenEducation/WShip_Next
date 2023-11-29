import React from 'react'
import style from '@/styles/lms/LearnerUI/envFooter.module.css';
const EnvFooter = () => {
    return (
        <div className={style.footerContainer} >
            <div className={style.footerFirst}>
                <div>
                    <span>Home</span>
                    <span>All Courses</span>
                </div>
                <p>&#169; Copyright Photon Ecademy 2023</p>
            </div>
            <div>
                <p>TEACH ONLINE WITH PAATHSALA</p>
            </div>
        </div>
      )
}

export default EnvFooter