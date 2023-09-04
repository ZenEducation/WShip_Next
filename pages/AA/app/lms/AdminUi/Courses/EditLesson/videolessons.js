import React from 'react';

import dynamic from 'next/dynamic';

// const Video = dynamic(() => import('@/views/lms/Video/index'), {
//   ssr: false,
// });

const NewVideo = dynamic(
  () => import('@/views/lms/AdminUi/Courses/EditLesson/Video/index'),
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
        <NewVideo />
      </ClassicLayout>
    </>
  );
};

export default Index;
