import React from 'react';

import dynamic from 'next/dynamic';

const Dripping = dynamic(
  () => import('@/views/lms/AdminUi/Courses/Settings/Dripping/index'),
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
        <Dripping />
      </ClassicLayout>
    </>
  );
};

export default Index;
