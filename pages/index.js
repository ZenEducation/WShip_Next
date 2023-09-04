import React, { useEffect, useLayoutEffect, useContext } from "react";
import mockServer from "../mock";
import appConfig from "@/configs/app.config";
import "../locales";
import useAuth from "@/utils/hooks/useAuth";
const environment = process.env.NODE_ENV;
import { useRouter } from "next/router";
import UserContext from "../components/PublicUI/UserContext";
import Home_1 from "./PC/home/home_1";

if (appConfig.enableMock) {
  mockServer({ environment });
}

const App = () => {
  const router = useRouter();
  const { authenticated } = useAuth();
  useLayoutEffect(() => {
    if (!authenticated) {
      router.push("/AA/sign-in");
    }
    if (authenticated) {
      router.push("/AA/app/sales/dashboard");
    }
  }, []);
  return <> </>;
};

const Home = () => {
  const { scrollRef } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, scrollRef.current.scrollPos);
    const handleScrollPos = () => {
      scrollRef.current.scrollPos = window.scrollY;
    };
    window.addEventListener("scroll", handleScrollPos);
    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  });

  return (
    <>
      <Home_1 />
    </>
  );
};

function MainHome() {
  const router = useRouter();
  const { pathname } = router;
  if (pathname.startsWith("/AA")) {
    return <App />;
  } else if (pathname.startsWith("/PC")) {
    return <Home />;
  } else {
    return <App />;
  }
}

export default Home;
