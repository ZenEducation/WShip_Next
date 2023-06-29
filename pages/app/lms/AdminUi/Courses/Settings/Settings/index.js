import React from 'react';

import dynamic from 'next/dynamic';

const SettingsPage = dynamic(
  () => import('@/views/lms/AdminUi/Courses/Settings/Settings/index'),
  {
    ssr: false,
  }
);

const ClassicLayout = dynamic(() => import('components/layout/ClassicLayout'), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <SettingsPage />
      </ClassicLayout>
    </>
  );
};

export default Index;
