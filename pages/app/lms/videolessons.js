import React from 'react';

import dynamic from 'next/dynamic';

const Video = dynamic(() => import('@/views/lms/Video/index'), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <Video />
    </>
  );
};

export default Index;
