import React from 'react';

import dynamic from 'next/dynamic';

const Text = dynamic(() => import('@/views/lms/Text/index'), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import('components/layout/ClassicLayout'), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Text />
      </ClassicLayout>
    </>
  );
};

export default Index;
