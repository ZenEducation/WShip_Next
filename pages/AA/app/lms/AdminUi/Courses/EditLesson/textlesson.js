import React from 'react';

import dynamic from 'next/dynamic';

// const Text = dynamic(() => import('@/views/lms/Text/index'), {
//   ssr: false,
// });

const NewText = dynamic(
  () => import('@/views/lms/AdminUi/Courses/EditLesson/Text/index'),
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
        <NewText />
      </ClassicLayout>
    </>
  );
};

export default Index;
