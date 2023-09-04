import dynamic from "next/dynamic";
import React from "react";
const OrderDetails = dynamic(() => import("views/sales/OrderDetails/index"), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import("components/AfterAuth/layout/ClassicLayout"), {
  ssr: false,
});
const Index = () => {
  return (
    <>
      <ClassicLayout>
        <OrderDetails />
      </ClassicLayout>
    </>
  );
};

export default Index;
