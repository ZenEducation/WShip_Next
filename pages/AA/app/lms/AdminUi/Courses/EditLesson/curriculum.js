import React from 'react';

import dynamic from 'next/dynamic';

const Curriculum = dynamic(
  () => import('@/views/lms/AdminUi/Courses/EditLesson/Curriculum/index'),
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
        <Curriculum />
      </ClassicLayout>
    </>
  );
};

export default Index;
