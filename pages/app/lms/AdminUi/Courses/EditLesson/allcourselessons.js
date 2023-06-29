import React from 'react';

import dynamic from 'next/dynamic';

const AllCourseLessons = dynamic(
  () => import('@/views/lms/AdminUi/Courses/EditLesson/AllCourseLessons/index'),
  {
    ssr: false,
  }
);

const ClassicLayout = dynamic(() => import('components/layout/ClassicLayout'), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <AllCourseLessons />
      </ClassicLayout>
    </>
  );
};

export default Index;
