import React from 'react';

import dynamic from 'next/dynamic';

const BulkImporter = dynamic(
  () => import('@/views/lms/AdminUi/Courses/EditLesson/BulkImporter/index'),
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
        <BulkImporter />
      </ClassicLayout>
    </>
  );
};

export default Index;
