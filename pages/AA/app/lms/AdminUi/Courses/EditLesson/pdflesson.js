import React from 'react';

import dynamic from 'next/dynamic';

// const Pdf = dynamic(() => import('@/views/lms/Pdf/index'), {
//   ssr: false,
// });

const NewPdf = dynamic(
  () => import('@/views/lms/AdminUi/Courses/EditLesson/Pdf/index'),
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
        <NewPdf />
      </ClassicLayout>
    </>
  );
};

export default Index;
