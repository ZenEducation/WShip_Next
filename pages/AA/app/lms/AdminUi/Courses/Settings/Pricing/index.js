import React from 'react';

import dynamic from 'next/dynamic';

const Pricing = dynamic(
  () => import('@/views/lms/AdminUi/Courses/Settings/Pricing/index'),
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
        <Pricing />
      </ClassicLayout>
    </>
  );
};

export default Index;
