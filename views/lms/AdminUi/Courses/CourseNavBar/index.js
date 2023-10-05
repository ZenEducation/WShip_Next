import React from "react";

import CourseNavBar from "./components/CourseNavBar";
import { CardsProvider } from "@/views/lms/CardsComponent/CardsContext";

const CourseNav = () => {
  return;
  <CardsProvider>
    <CourseNavBar />
  </CardsProvider>;
};

export default CourseNav;
