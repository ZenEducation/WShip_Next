import React from "react";
import dynamic from "next/dynamic";
import style from '@/public/style/RecruitmentPortal/departmentListing.module.css';
import { useSelector } from "react-redux";
import Banner from '@/components/RecruitmentPortal/banner';
import Footer from '@/components/RecruitmentPortal/footer';
// const departments = [
//   {
//     logo: "/img/RecruitmentPortal/client/circle-logo.png",
//     name: "CircleCI",
//   },
//   {
//     logo: "/img/RecruitmentPortal/client/android.png",
//     name: "Android",
//   },
//   {
//     logo: "/img/RecruitmentPortal/client/facebook-logo-2019.png",
//     name: "Facebook",
//   },
//   {
//     logo: "/img/RecruitmentPortal/client/google-logo.png",
//     name: "Google",
//   },
//   {
//     logo: "/img/RecruitmentPortal/client/lenovo-logo.png",
//     name: "Lenovo",
//   },
//   {
//     logo: "/img/RecruitmentPortal/client/linkedin.png",
//     name: "LinkedIn",
//   },
//   {
//     logo: "/img/RecruitmentPortal/client/shree-logo.png",
//     name: "Shreethemes",
//   },
//   {
//     logo: "/img/RecruitmentPortal/client/skype.png",
//     name: "Skype",
//   },
//   {
//     logo: "/img/RecruitmentPortal/client/snapchat.png",
//     name: "Snapchat",
//   },
//   {
//     logo: "/img/RecruitmentPortal/client/spotify.png",
//     name: "Spotify",
//   },
//   {
//     logo: "/img/RecruitmentPortal/client/telegram.png",
//     name: "Telegram",
//   },
//   {
//     logo: "/img/RecruitmentPortal/client/whatsapp.png",
//     name: "Whatsapp",
//   },
// ];

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const JobListing = () => {
  const departments = useSelector((state) => state.departmentListing.departments);
  return (
    <ClassicLayout>
      <>
        <Banner/>
        {/* <!-- Start Section--> */}
        <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
          <div className={style.container}>
            <div
            class="gap-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[40px]">
                {departments.map((item) => 
                <>
                <a
                
                href="page-job-company-detail.html"
                class="group bg-white dark:bg-slate-900 p-6 rounded shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 border-4 border-white dark:border-slate-900 hover:border-b-indigo-600 dark:hover:border-b-indigo-600 text-center duration-500 ease-in-out"
              >
                <img
                  src={item.logo}
                  className="h-16 w-16 mx-auto p-3 rounded-full bg-gray-50 dark:bg-slate-800 shadow-md dark:shadow-gray-800"
                  alt="circle-ci"
                />
                <div class="content mt-3">
                  <span class="text-lg font-semibold group-hover:text-indigo-600 transition duration-500 block">
                    {item.name}
                  </span>

                  <span class="text-base text-slate-400 block">
                    <i class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"></i>
                    U.S.A.
                  </span>
                </div>
              </a>
              </>
                )}
                
            </div>
            {/* <!--end grid--> */}
          </div>
          {/* <!--end container--> */}
            <Footer/>
         
          {/* <!--end container--> */}
        </section>
        {/* <!--end section--> */}
        {/* <!-- End Section--> */}
      </>
    </ClassicLayout>
  );
};

export default JobListing;
