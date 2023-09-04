import React from 'react';
import Header from 'components/AfterAuth/template/Header';
import SideNavToggle from 'components/AfterAuth/template/SideNavToggle';
import Search from 'components/AfterAuth/template/Search';
import LanguageSelector from 'components/AfterAuth/template/LanguageSelector';
import Notification from 'components/AfterAuth/template/Notification';
import SidePanel from 'components/AfterAuth/template/SidePanel';
import MobileNav from 'components/AfterAuth/template/MobileNav';
import UserDropdown from 'components/AfterAuth/template/UserDropdown';
import SideNav from 'components/AfterAuth/template/SideNav';

const HeaderActionsStart = () => {
  return (
    <>
      <MobileNav />
      <SideNavToggle />
      <Search />
    </>
  );
};

const HeaderActionsEnd = () => {
  return (
    <>
      <LanguageSelector />
      <Notification />
      <SidePanel />
      <UserDropdown hoverable={false} />
    </>
  );
};

const ClassicLayout = (props) => {
  return (
    <div className="app-layout-classic flex flex-auto flex-col">
      <div className="flex flex-auto min-w-0">
        <SideNav />
        <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
          <Header
            className="shadow dark:shadow-2xl"
            headerStart={<HeaderActionsStart />}
            headerEnd={<HeaderActionsEnd />}
          />
          <div className="h-full flex flex-auto flex-col">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default ClassicLayout;
