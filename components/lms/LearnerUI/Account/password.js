import React from 'react'
import style from "@/styles/lms/LearnerUI/profile.module.css";
const Password = () => {
  return (
    <div className={style.passwordContainer}>
        <p className={style.passwordHeading}>Change Password</p>
        <div>
            <label htmlFor='change_password'>Change Password</label>
            <input type='text' placeholder='Enter New Password...' name='change_password' id='change_password'/>
        </div>
        <div>
            <label htmlFor='retype_password'>Retype Password</label>
            <input type='text' placeholder='Retype Password...' name='retype_password' id='retype_password'/>
        </div>
        <div>
            <label htmlFor='current_password'>Current Password</label>
            <input type='text' placeholder='Enter Current Password...' name='current_password' id='current_password'/>
        </div>
        <p className={style.passwordNote}>(We need your current password to confirm your changes)</p>
        <button>UPDATE</button>
    </div>
  )
}

export default Password