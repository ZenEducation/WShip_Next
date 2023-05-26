import React from 'react';

import dynamic from 'next/dynamic';

const Audio = dynamic(() => import('@/views/lms/Audio/index'), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import('components/layout/ClassicLayout'), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Audio />
      </ClassicLayout>
    </>
  );
};

export default Index;
