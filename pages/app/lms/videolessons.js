import React from 'react';

import dynamic from 'next/dynamic';

const Video = dynamic(() => import('@/views/lms/Video/index'), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import('components/layout/ClassicLayout'), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Video />
      </ClassicLayout>
    </>
  );
};

export default Index;
