import React from 'react';
import dynamic from 'next/dynamic';
// import Customers from "@/views/crm/Customers/index";
// const LessonsOptions = dynamic(() => import('views/lms/LessonsOptions/index'), {
//   ssr: false,
// });

const NewLessonsOptions = dynamic(
  () => import('views/lms/AdminUi/Courses/EditLesson/LessonsOptions/index'),
  {
    ssr: false,
  }
);
const ClassicLayout = dynamic(() => import('components/layout/ClassicLayout'), {
  ssr: false,
});
const dashboard = () => {
  return (
    <>
      <ClassicLayout>
        <NewLessonsOptions />
      </ClassicLayout>
    </>
  );
};

export default dashboard;
