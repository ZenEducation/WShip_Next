import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const JobForm = dynamic(() => import("views/pages/jobform/index"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <JobForm />
      </ClassicLayout>
    </>
  );
};

export default Index;
