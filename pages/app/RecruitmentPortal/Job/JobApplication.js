import React from "react";
import style from "../../../../public/style/RecruitmentPortal/jobApplication.module.css";
import dynamic from "next/dynamic";
import Banner from "@/components/RecruitmentPortal/banner";
import Footer from "@/components/RecruitmentPortal/footer";
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
    ssr: false,
  });
const JobApplication = () => {

  return (
    <ClassicLayout>
    <>
      <Banner heading={"Senior Web Developer"} />
    <div className={style.container}>
      <div className={style.formBox}>
        <form>
          <div className={style.formPart}>
            <div className={style.formInner}>
              <label>Your Name:</label>
              <input type="text" placeholder="Name :" />
            </div>
            <div className={style.formInner}>
              <label>Your Email:</label>
              <input type="email" placeholder="Email :" />
            </div>
          </div>
          <div className={style.formPart}>
            <div className={style.formInner}>
              <label>Phone No.:</label>
              <input type="number" placeholder="Phone No.:" />
            </div>
            <div className={style.formInner}>
              <label>Job Title:</label>
              <input type="text" placeholder="Job Title :" />
            </div>
          </div>
          <div className={style.formPart2}>
              <label>Types of Job:</label>
              <input type="text" placeholder="All Jobs:" />
          </div>
          <div className={style.formPart2}>
              <label>Your Comment:</label>
              <textarea placeholder="Message:" rows={5} ></textarea>
          </div>
          <div className={style.formPart2}>
            <label for="avatar">Upload file:</label>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </div>
    <Footer />
      </>
    </ClassicLayout>
  );
};

export default JobApplication;
