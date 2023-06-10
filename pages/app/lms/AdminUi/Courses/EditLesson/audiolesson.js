import React from 'react';

import dynamic from 'next/dynamic';

// const Audio = dynamic(() => import('@/views/lms/Audio/index'), {
//   ssr: false,
// });

const NewAudio = dynamic(
  () => import('@/views/lms/AdminUi/Courses/EditLesson/Audio/index'),
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
        <NewAudio />
      </ClassicLayout>
    </>
  );
};

export default Index;
