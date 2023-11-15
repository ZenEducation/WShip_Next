import React from "react";
import style from "@/public/style/RecruitmentPortal/departmentListing.module.css";

const Banner = ({heading}) => {
  return (
    <>
      {/* <!-- Start Hero --> */}
      <section class="flex justify-center relative w-full py-36 lg:py-44 bg-black opacity-80">
        <div className={style.heroSection}>
          <div class="grid grid-cols-1 pb-8 text-center mt-10">
            <h3
              style={{
                marginTop: 300,
                color: "#fff",
                fontWeight: 800,
                fontSize: 32,
              }}
              class="mb-4 md:text-4xl text-xl md:leading-normal leading-normal font-medium text-white"
            >
              {heading}
            </h3>
          </div>
          {/* <!--end grid--> */}
        </div>
        {/* <!--end container--> */}
      </section>
      {/* <!--end section--> */}
      {/* <!-- End Hero --> */}

      {/* <div class="relative">
        <div class="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden text-gray-50 dark:text-slate-800">
          <svg
            class="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div> */}
      {/* <!-- End Hero --> */}
    </>
  );
};

export default Banner;
