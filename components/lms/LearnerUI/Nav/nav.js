import React from "react";
import navLogo from "@/public/img/lms/LearnerUI/nav-logo.png";
import navLogo2 from "@/public/img/lms/LearnerUI/nav-logo2.png";
import style from "@/styles/lms/LearnerUI/nav.module.css";
import Image from "next/image";
import { IoMdArrowDropdown, IoMenu } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useState , useEffect } from "react";
import Link from "next/link";
const Nav = ({handleIsSideBarOpen}) => {
  const [AreOptionsOpen, setAreOptionsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(0);

  useEffect(() => {
    setDrawerWidth(window.innerWidth);
    const handleResize = () => {
      setDrawerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={style.navContainer}>
      <div className={style.firstBox}>
        <Image src={navLogo} alt="nav-logo" width={300} height={30} />
      </div>
      <div className={style.secondBox}>
        {drawerWidth > 800 ? (
          <ul className={style.list1}>
            <li>PAATHSHALA EDUCATION</li>
            <Link href="/app/lms/LearnerUI/collections">
            <li >ALL COURSES</li>
            </Link>
            <Link  href="/app/lms/LearnerUI/enrollments">
            <li >MY DASHBOARD</li>
            </Link>
            <li>
              <div
                className={style.user}
                onClick={() => {
                  setAreOptionsOpen(!AreOptionsOpen);
                }}
              >
                <p>USER</p>
                <Image src={navLogo2} alt="user" height={30} width={30} />
                <IoMdArrowDropdown color="white" size={20} />
              </div>
              <div
                className={`${AreOptionsOpen ? style.open : style.close} ${
                  style.selectBox
                }  `}
              >
                <ul>
                  <Link href="/app/lms/LearnerUI/account">
                  <li>My Account</li>
                  </Link>
                  <li>
                    <span>Support</span>
                    <RiLogoutBoxRLine />
                  </li>
                  <li>Sign Out</li>
                </ul>
              </div>
            </li>
          </ul>
        ) : (
          <MdMenu size={40} color="white" onClick={() => {handleIsSideBarOpen()}} />
        )}
      </div>
    </div>
  );
};

export default Nav;
