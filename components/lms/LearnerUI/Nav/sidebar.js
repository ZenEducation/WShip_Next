import React from "react";
import style from "@/styles/lms/LearnerUI/nav.module.css";
import { FaRegWindowClose } from "react-icons/fa";
import Link from "next/link";

const Sidebar = ({ handleIsSideBarOpen }) => {
  return (
    <div className={style.sidebarContainer}>
      <div>
        <FaRegWindowClose size={40} onClick={handleIsSideBarOpen} />
      </div>
      <ul>
        <li>PAATHSHALA EDUCATION</li>
        <Link href="/app/lms/LearnerUI/collections">
          <li>ALL COURSES</li>
        </Link>
        <Link href="/app/lms/LearnerUI/enrollments">
          <li>MY DASHBOARD</li>
        </Link>
        <Link href="/app/lms/LearnerUI/account">
          <li>My Account</li>
        </Link>
        <li>SUPPORT</li>
        <li>SIGN OUT</li>
      </ul>
    </div>
  );
};

export default Sidebar;
