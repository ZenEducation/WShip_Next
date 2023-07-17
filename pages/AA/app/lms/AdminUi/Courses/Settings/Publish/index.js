import React from 'react';

import dynamic from 'next/dynamic';

const Publish = dynamic(
  () => import('@/views/lms/AdminUi/Courses/Settings/Publish/index'),
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
        <Publish />
      </ClassicLayout>
    </>
  );
};

export default Index;
