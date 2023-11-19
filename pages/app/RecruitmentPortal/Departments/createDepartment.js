import React from "react";
import style from "../../../../public/style/RecruitmentPortal/createDepartment.module.css";
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
      <Banner heading={"Department Creation Form"} />
    <div className={style.container}>
      <div className={style.formBox}>
        <form>
          <div className={style.formPart2}>
            <label for="avatar">Logo:</label>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
          </div>
          <div className={style.formPart2}>
              <label>Name:</label>
              <input type="text" placeholder="Enter department name..." />
          </div>
          <div className={style.formPart2}>
              <label>Description:</label>
              <textarea placeholder="Enter Description:" rows={5} ></textarea>
          </div>
          
          <button>Create Department</button>
        </form>
      </div>
    </div>
    <Footer />
      </>
    </ClassicLayout>
  );
};

export default JobApplication;
