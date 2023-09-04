// import "../styles/publicui.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/PublicUI/layout";
import { Provider } from "react-redux";
import { reduxStore } from "../redux/store";
import { useRouter } from "next/router";
import { MetaMaskProvider } from "metamask-react";
import Meta from "../components/PublicUI/Meta";
import UserContext from "../components/PublicUI/UserContext";
import React, { useRef } from "react";

import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "../index.css";

import { CardsProvider } from "../views/lms/CardsComponent/CardsContext";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../store";
import Theme from "components/AfterAuth/template/Theme";
import mockServer from "../mock";
import appConfig from "configs/app.config";
import "../locales";

const environment = process.env.NODE_ENV;
if (appConfig.enableMock) {
  mockServer({ environment });
}
const App = ({ Component, pageProps }) => {
  console.log("ReturnedPAGE App");
  return (
    <>
      <CardsProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Theme>
              <Component {...pageProps} />
            </Theme>
          </PersistGate>
        </Provider>
      </CardsProvider>
    </>
  );
};

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const pid = router.asPath;
  const scrollRef = useRef({
    scrollPos: 0,
  });

  return (
    <>
      <Meta title="Home 1" />

      <Provider store={reduxStore}>
        <ThemeProvider enableSystem={true} attribute="class">
          <MetaMaskProvider>
            <UserContext.Provider value={{ scrollRef: scrollRef }}>
              {pid === "/PC/login" ? (
                <Component {...pageProps} />
              ) : (
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              )}
            </UserContext.Provider>
          </MetaMaskProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
};

function MainApp() {
  const router = useRouter();
  console.log(router);
  const { pathname } = router;
  console.log(pathname);
  if (pathname.startsWith("/AA")) {
    return <App />;
  } else if (pathname.startsWith("/PC")) {
    return <MyApp />;
  } else {
    return <h1>Page not</h1>;
  }
}

export default MyApp;
