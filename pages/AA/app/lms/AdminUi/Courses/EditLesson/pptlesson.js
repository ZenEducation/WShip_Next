import React from 'react';

import dynamic from 'next/dynamic';

// const Ppt = dynamic(() => import('@/views/lms/Ppt/index'), {
//   ssr: false,
// });

const NewPpt = dynamic(
  () => import('@/views/lms/AdminUi/Courses/EditLesson/Ppt/index'),
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
        <NewPpt />
      </ClassicLayout>
    </>
  );
};

export default Index;
