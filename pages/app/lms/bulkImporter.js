import React from 'react';

import dynamic from 'next/dynamic';

const BulkImporter = dynamic(() => import('@/views/lms/BulkImporter/index'), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import('components/layout/ClassicLayout'), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <BulkImporter />
      </ClassicLayout>
    </>
  );
};

export default Index;
