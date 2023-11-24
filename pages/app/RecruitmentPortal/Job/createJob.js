import React from "react";
import dynamic from "next/dynamic";
import Banner from "@/components/RecruitmentPortal/banner";
import Footer from "@/components/RecruitmentPortal/footer";
import style from "@/public/style/RecruitmentPortal/createJob.module.css";
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const CreateJob = () => {
  return (
    <ClassicLayout>
      <>
        <Banner heading={"Create Job"} />

        <div className={style.formContainer}>
            {/* <h2>Create Job</h2> */}
          <form className={style.form}>
            <div>
              <section>
                <lable>Job Description</lable>
                <textarea rows={4} />
              </section>
              <section>
                <lable>Job Duties</lable>
                <textarea rows={4} />
              </section>
            </div>
            <div>
              <section>
                <lable>Job Requirements</lable>
                <textarea rows={4} />
              </section>
              <section>
                <lable>Nice To Have</lable>
                <textarea rows={4} />
              </section>
            </div>
            <div>
              <section>
                <lable>Benifits</lable>
                <textarea rows={4} />
              </section>
              <section>
                <label>Salary Range</label>
                <input type="text" />
              </section>
            </div>
            <div>
              <section>
                <label>Department</label>
                <select>
                  <option>department 1</option>
                  <option>department 1</option>
                  <option>department 1</option>
                  <option>department 1</option>
                </select>
              </section>
              <section>
                <label>Job Type</label>
                <select>
                  <option>department 1</option>
                  <option>department 1</option>
                  <option>department 1</option>
                  <option>department 1</option>
                </select>
              </section>
            </div>
            <button>Submit</button>
          </form>
        </div>
        <Footer />
      </>
    </ClassicLayout>
  );
};

export default CreateJob;
