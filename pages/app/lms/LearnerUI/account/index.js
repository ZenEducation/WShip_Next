import React, { useState } from "react";
import Sidebar from "@/components/lms/LearnerUI/Nav/sidebar";
import SidebarA from "@/components/lms/LearnerUI/Account/sidebar_account";import Profile from "@/components/lms/LearnerUI/Account/profile";
import style from "@/styles/lms/LearnerUI/profile.module.css";
import Nav from "@/components/lms/LearnerUI/Nav/nav";
import Footer from "@/components/lms/LearnerUI/Enrollment/envFooter";
const Index = () => {
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
        <SidebarA page={"profile"} />
        <Profile />
      </div>
      <Footer />

    </>
  );
};

export default Index;
