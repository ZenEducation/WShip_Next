import React from "react";
import style from "@/public/style/RecruitmentPortal/departmentListing.module.css";

const Footer = () => {
  return (
    <div className={style.container} style={{ marginTop: 112 }}>
      <div class="flex items-center">
        <div class="lg:col-span-5 md:col-span-6">
          <img
            src="/img/RecruitmentPortal/illustrator/envelope.svg"
            class="mx-auto d-block h-96	 w-96"
            alt="user"
          />
        </div>

        <div class="lg:col-span-7 md:col-span-6 ">
          <span class="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">
            Mobile Apps
          </span>
          <h4 class="md:text-3xl text-2xl lg:leading-normal leading-normal font-medium my-4">
            Available for your <br />
            Smartphones
          </h4>
          <p class="text-slate-400 max-w-xl mb-0 ">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
          <div class="my-5">
            <a href="">
              <img
                src="/img/RecruitmentPortal/app/app.png"
                class="m-1 inline-block"
                alt=""
              />
            </a>

            <a href="">
              <img
                src="/img/RecruitmentPortal/app/playstore.png"
                class="m-1 inline-block"
                alt=""
              />
            </a>
          </div>

          <div class="inline-block">
            <div class="pt-4 flex items-center border-t border-gray-100 dark:border-gray-700">
              <i
                data-feather="smartphone"
                class="ltr:mr-2 rtl:ml-2 text-indigo-600 h-10 w-10"
              ></i>
              <div class="content">
                <h6 class="mb-0 text-base font-medium">
                  Install app now on your cellphones
                </h6>
                <a
                  href=""
                  class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Learn More <i class="uil uil-angle-right-b"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--end gird--> */}
    </div>
  );
};

export default Footer;
