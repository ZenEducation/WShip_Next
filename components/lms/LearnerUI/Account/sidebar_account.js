import React from "react";
import style from "@/styles/lms/LearnerUI/profile.module.css";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

const SidebarA = ({page}) => {
  const [openedPage, setOpenedPage]= useState("profile");
  const handleopenedPage = (item)=>{
    setOpenedPage(item);
  }
  useEffect(() => {
    handleopenedPage(page)
  }, [page])
  return (
    <div className={style.sidebarContainer}>
      <ul>
        <Link href="/app/lms/LearnerUI/account" onClick={() => {handleopenedPage("profile")}}>
          <li className={`${openedPage === 'profile' && style.selected}`}>Profile</li>
        </Link>
        <Link href="/app/lms/LearnerUI/account/password" onClick={() => {handleopenedPage("password")}}>
          <li className={`${openedPage === 'password' && style.selected}`}>Password</li>
        </Link>
        <Link href="/app/lms/LearnerUI/account/notifications" onClick={() => {handleopenedPage("notifications")}}>
          <li className={`${openedPage === 'notifications' && style.selected}`}>Notifications</li>
        </Link>
        <Link href="/app/lms/LearnerUI/account/billing" onClick={() => {handleopenedPage("billing")}}>
          <li className={`${openedPage === 'billing' && style.selected}`}>Billing</li>
        </Link>
        <Link href="/app/lms/LearnerUI/account/orders" onClick={() => {handleopenedPage("order")}}>
          <li className={`${openedPage === 'order' && style.selected}`}>Order History</li>
        </Link>
      </ul>
    </div>
  );
};

export default SidebarA;
