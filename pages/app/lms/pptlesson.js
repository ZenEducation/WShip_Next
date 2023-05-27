import React from 'react';

import dynamic from 'next/dynamic';

const Ppt = dynamic(() => import('@/views/lms/Ppt/index'), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import('components/layout/ClassicLayout'), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Ppt />
      </ClassicLayout>
    </>
  );
};

export default Index;
