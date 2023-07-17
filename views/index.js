import React, { Suspense } from "react";
import { Loading } from "components/AfterAuth/shared";
import { protectedRoutes, publicRoutes } from "configs/routes.config";
import appConfig from "configs/app.config";
import PageContainer from "components/AfterAuth/template/PageContainer";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "components/AfterAuth/route/ProtectedRoute";
import PublicRoute from "components/AfterAuth/route/PublicRoute";
import AuthorityGuard from "components/AfterAuth/route/AuthorityGuard";
import AppRoute from "components/AfterAuth/route/AppRoute";

const { authenticatedEntryPath } = appConfig;

const AllRoutes = (props) => {
  const userAuthority = useSelector((state) => state.auth.user.authority);

  return (
    // <Routes>
    //     <Route path="/AA/" element={<ProtectedRoute />}>
    //         <Route
    //             path="/AA/"
    //             element={<Navigate replace to={authenticatedEntryPath} />}
    //         />
    //         {protectedRoutes.map((route, index) => (
    //             <Route
    //                 key={route.key + index}
    //                 path={route.path}
    //                 element={
    //                     <AuthorityGuard
    //                         userAuthority={userAuthority}
    //                         authority={route.authority}
    //                     >
    //                         <PageContainer {...props} {...route.meta}>
    //                             <AppRoute
    //                                 routeKey={route.key}
    //                                 component={route.component}
    //                                 {...route.meta}
    //                             />
    //                         </PageContainer>
    //                     </AuthorityGuard>
    //                 }
    //             />
    //         ))}
    //         <Route path="*" element={<Navigate to="/AA/" replace />} />
    //     </Route>
    //     <Route path="/AA/" element={<PublicRoute />}>
    //         {publicRoutes.map((route) => (
    //             <Route
    //                 key={route.path}
    //                 path={route.path}
    //                 element={
    //                     <AppRoute
    //                         routeKey={route.key}
    //                         component={route.component}
    //                         {...route.meta}
    //                     />
    //                 }
    //             />
    //         ))}
    //     </Route>
    // </Routes>
    <></>
  );
};

const Views = (props) => {
  return (
    <Suspense fallback={<Loading loading={true} />}>
      <AllRoutes {...props} />
    </Suspense>
  );
};

export default Views;
