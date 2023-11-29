import React from 'react'
import style from "@/styles/lms/LearnerUI/profile.module.css";

const Notification = () => {
  return (
    <div className={style.notificationContainer}>
        <p className={style.notificationHeading}>General Notification Settings</p>
        <div>
            <input type='checkbox'/>
            <span>Send me a weekly reminder email</span>
        </div>
        <div>
            <input type='checkbox'/>
            <span>Receive an email when someone replies to my discussion</span>
        </div>
        <button>SAVE CHANGES</button>

    </div>
  )
}

export default Notification