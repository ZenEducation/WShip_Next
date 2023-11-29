import React from 'react'
import NavLogo2 from '@/public/img/lms/LearnerUI/nav-logo2.png';
import Image from 'next/image';
import style from '@/styles/lms/LearnerUI/profile.module.css';
const Profile = () => {
    const timezone = ["Select your timezone" , "Abu Dhabi", "Adelaide", "Almaty" , "American Samoa" , "Amsterdam", "Arizona", "Astana" , "Athens", "Atlantic Time (Canada)", "Auckland", "Azores" , "Baghdad", "Baku", "Bangkok", "Beijing", "Belgrade", "Berlin", "Bern", "Bogota", "Brasilia", "Bratislava", "Brisbane", "Brussels", "Bucharest", "Budapest", "Buenow Aires" , "Cairo", "Canberra", "Cape Verde Is", "Caracas", "Casablanca", "Central America", "Central Time (US & Canada)", "Chatham Is", "Chennai", "Chihuahua", "Chongqing", "Copenhagen", "Copenhagen", "Darwin", "Dublin", "Eastern Time", "Edinburgh", "Fiji", "Georgetown", "Guam", "Hanoi", "Hawaii", "Hong Kong", "Indiana (East)", "Istanbul", "Jakarta", "Kabul", "Kuwait", "La Paz", "Lima", "Lisbon", "Madrid", "Melbourne", "Minsk", "MOnrovia", "Montevideo", "Moscow", "Mumbai", "Nairobi", "New Delhi", "Novosibirsk", "Osaka", "Pacific Time", "Paris", "Port Moresby", "Rangoon", "Samoa", "Seoul", "Singapore", "Seoul", "Taipei", "Stockholm", "Sydney", "Tijuana", "UTC", "Vilnius", "Wellington", "Warsaw", "Yakutsk", "Zagreb"];
    const languages = ["Select your language", "Afrikaans", "Armenian", "Azeri", "Bulgarian", "Catalan", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Finnish", "French", "Georgian", "German", "Greek", "Hindi", "Hungarian", "Icelandiic", "Indonesian", "Italian", "Japanese", "Korean", "Lao", "Latvian", "Mandarin", "Polish", "Portuguese", "Romanian", "Russian", "Serbian", "Slovak", "Spanish", "Swedish", "Thai", "Turkish", "Ukrainian", "Vietnamese"];
  return (
    <div className={style.profileContainer}>
        <p className={style.profileHeading}>Edit Profile</p>
        <div className={style.profileContainerInner}>
            <div className={style.profileLeft}>
                <Image src={NavLogo2} alt="profile" height={150} width={150}/>
                <p>UPLOAD NEW IMAGE</p>
            </div>
            <div className={style.profileRight}>
                <div className={style.profileLabelC}>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' id='email' placeholder='Enter email...' />
                </div>
                <div className={style.profileLabelR}>
                    <div className={style.profileLabelC}>
                    <label htmlFor='first_name'>First Name</label>
                    <input type="text" name='first_name' id='first_name' placeholder='Enter first name...' />
                    </div>
                    <div className={style.profileLabelC}>
                    <label htmlFor='last_name'>Last Name</label>
                    <input type="text" name='last_name' id='last_name' placeholder='Enter last name...' />
                    </div>
                </div>
                <div className={style.profileLabelC}>
                    <label htmlFor='comapny'>Comapny</label>
                    <input type="text" name='comapny' id='comapny' placeholder='Enter comapny...' />
                </div>
                <div className={style.profileLabelC}>
                    <label htmlFor='professional_title'>Professional Title</label>
                    <input type="text" name='professional_title' id='professional_title' placeholder='Enter professional_title...' />
                </div>
                <div className={style.profileSelectBox}>
                    <select>
                        {timezone.map((item)=> {
                            return (
                                <option key={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>
                <div className={style.profileSelectBox}>
                    <select>
                        {languages.map((item)=> {
                            return (
                                <option key={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>
                <button>SAVE CHANGES</button>
            </div>
        </div>

    </div>
  )
}

export default Profile