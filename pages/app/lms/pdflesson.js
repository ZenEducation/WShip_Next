import React from 'react';

import dynamic from 'next/dynamic';

const Pdf = dynamic(() => import('@/views/lms/Pdf/index'), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import('components/layout/ClassicLayout'), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Pdf />
      </ClassicLayout>
    </>
  );
};

export default Index;
