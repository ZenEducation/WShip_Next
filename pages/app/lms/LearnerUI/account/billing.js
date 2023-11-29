import React, { useState } from "react";
import Sidebar from "@/components/lms/LearnerUI/Nav/sidebar";
import SidebarA from "@/components/lms/LearnerUI/Account/sidebar_account";
import Billing from "@/components/lms/LearnerUI/Account/billing";
import style from "@/styles/lms/LearnerUI/profile.module.css";
import Nav from "@/components/lms/LearnerUI/Nav/nav";
import Footer from "@/components/lms/LearnerUI/Enrollment/envFooter";
const PasswordP = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleIsSideBarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (isSidebarOpen) {
    return <Sidebar handleIsSideBarOpen={handleIsSideBarOpen} />;
  }
  return (
    <>
      <Nav handleIsSideBarOpen={handleIsSideBarOpen} />

      <div className={style.accountContainer}>
        <SidebarA page={"billing"} />
        <Billing/>
      </div>
      <Footer />
    </>
  );
};

export default PasswordP;
