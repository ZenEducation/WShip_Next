import React from 'react';

import dynamic from 'next/dynamic';

const Pdf = dynamic(() => import('@/views/lms/Pdf/index'), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <Pdf />
    </>
  );
};

export default Index;
