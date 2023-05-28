import React from 'react';

import dynamic from 'next/dynamic';

const CourseNavBar = dynamic(() => import('@/views/lms/CourseNavBar/index'), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import('components/layout/ClassicLayout'), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <CourseNavBar />
      </ClassicLayout>
    </>
  );
};

export default Index;
