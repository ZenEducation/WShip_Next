import React from 'react';

import dynamic from 'next/dynamic';

// const CourseNavBar = dynamic(() => import('@/views/lms/CourseNavBar/index'), {
//   ssr: false,
// });

const NewCoursesNavBar = dynamic(
  () => import('@/views/lms/AdminUi/Courses/CourseNavBar/index'),
  {
    ssr: false,
  }
);

const ClassicLayout = dynamic(() => import('components/AfterAuth/layout/ClassicLayout'), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <NewCoursesNavBar />
      </ClassicLayout>
    </>
  );
};

export default Index;
