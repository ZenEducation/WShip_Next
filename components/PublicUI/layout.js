import React from 'react';
import Footer from "./footer";
import Wallet_modal from "./modal/wallet_modal";
import BidsModal from "./modal/bidsModal";
import BuyModal from "./modal/buyModal";
import { useRouter } from "next/router";
import Header01 from "./header/Header01";
import Header02 from "./header/Header02";
import Header03 from "./header/Header03";
import Header04 from "./header/Header04";

export default function Layout({ children }) {
  const route = useRouter();
  // header start
  let header;
  if (
    route.asPath === "/PC/home/home_3" ||
    route.asPath === "/PC/home/home_9" ||
    route.asPath === "/PC/maintenance" ||
    route.asPath === "/PC/home/home_12"
  ) {
    header = <Header02 />;
  } else if (route.asPath === "/PC/platform_status") {
    header = <Header03 />;
  } else if (route.asPath === "/PC/home/home_8") {
    header = <Header04 />;
  } else {
    header = <Header01 />;
  }
  // header end

  return (
    <>
      {header}
      <Wallet_modal />
      <BidsModal />
      <BuyModal />
      <main>{children}</main>
      <Footer />
    </>
  );
}
