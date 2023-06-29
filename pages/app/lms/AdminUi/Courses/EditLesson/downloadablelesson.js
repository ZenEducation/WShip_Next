import React from 'react';

import dynamic from 'next/dynamic';

// const Downloadable = dynamic(() => import('@/views/lms/Downloadable/index'), {
//   ssr: false,
// });

const NewDownloadable = dynamic(
  () => import('@/views/lms/AdminUi/Courses/EditLesson/Downloadable/index'),
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
        <NewDownloadable />
      </ClassicLayout>
    </>
  );
};

export default Index;
