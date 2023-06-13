import React, { useContext, useState } from 'react';

import { CardsContext } from '../../../../CardsComponent/CardsContext';

import { Card, Tabs, Menu } from 'components/ui';
const { TabNav, TabList, TabContent } = Tabs;

import dynamic from 'next/dynamic';
import Header from 'components/template/Header';
import { RxCross1 } from 'react-icons/rx';
import { Button, Dropdown } from 'components/ui';
import { TfiEye } from 'react-icons/tfi';
import { BsArrowBarLeft, BsFillCaretDownFill } from 'react-icons/bs';
import { HiOutlineSearch } from 'react-icons/hi';
import { BiArrowBack } from 'react-icons/bi';

const BulkImporter = dynamic(
  () => import('../../EditLesson/BulkImporter/index'),
  {
    ssr: false,
  }
);

const PricingPage = dynamic(() => import('../../Settings/Pricing/index'), {
  ssr: false,
});

const SettingsPage = dynamic(() => import('../../Settings/Settings/index'), {
  ssr: false,
});

const Dripping = dynamic(() => import('../../Settings/Dripping/index'), {
  ssr: false,
});

const Publish = dynamic(() => import('../../Settings/Publish/index'), {
  ssr: false,
});

const Curriculum = dynamic(() => import('../../EditLesson/Curriculum/index'), {
  ssr: false,
});

// LessonsOptions

const LessonsOptions = dynamic(
  () => import('../../EditLesson/LessonsOptions/index'),
  {
    ssr: false,
  }
);

const PreviewDropDown = () => {
  const Toggle = (
    <Button
      className="preview-btn header-buttons-white no-wrap-btn mr-2   mt-3"
      size="sm"
      variant="default"
      color="yellow-900">
      <TfiEye className="preview-btn " />
      <div className="flex items-center ml-3 display-preview-btn">
        PREVIEW
        <BsFillCaretDownFill className="preview-btn ml-3 " />
      </div>
    </Button>
  );

  return (
    <Dropdown placement="bottom-center" variant="divider" renderTitle={Toggle}>
      <Dropdown.Item eventKey="a">ALL COURSE LESSONS</Dropdown.Item>
      <Dropdown.Item eventKey="b">COURSE AS AN ENROLLED STUDENT</Dropdown.Item>
    </Dropdown>
  );
};

const TabsNavBar = () => {
  const { tabMenu, setTabMenu } = useContext(CardsContext);

  // console.log('CourseNavBar', tabMenu);

  const [currentTab, setCurrentTab] = useState('Curriculum');

  const { LessonsOptionTab, setLessonsOptionTab } = useContext(CardsContext);

  return (
    <div>
      <Tabs
        value={tabMenu}
        onChange={(val) => {
          setTabMenu(val);
          setLessonsOptionTab(val);
        }}>
        <div className=" flex items-center  justify-between  ">
          <TabList className="pt-2">
            <TabNav value="Curriculum">Curriculum</TabNav>
            <TabNav value="BulkImporter">Bulk Importer</TabNav>
            <TabNav value="Settings">Settings</TabNav>
            <TabNav value="Drip">Drip</TabNav>
            <TabNav value="Pricing">Pricing</TabNav>
            <TabNav value="Publish">Publish</TabNav>
          </TabList>
          <PreviewDropDown />
        </div>

        <div className="p-4">
          <TabContent value="Curriculum">
            <Curriculum />
          </TabContent>
          <TabContent value="BulkImporter">
            <BulkImporter />
          </TabContent>
          <TabContent value="Settings">
            <SettingsPage />
          </TabContent>

          <TabContent value="Drip">
            <Dripping />
          </TabContent>
          <TabContent value="Pricing">
            <PricingPage />
          </TabContent>

          <TabContent value="Publish">
            <Publish />
          </TabContent>
        </div>
      </Tabs>
    </div>
  );
};

const CourseNavBar = () => {
  const HeaderCourseStart = () => {
    return (
      <span className="flex items-center justify-between new-course-text">
        <button>
          <BiArrowBack className="text-2xl" />
        </button>
      </span>
    );
  };

  const HeaderCourseMiddle = () => {
    return (
      <span className="new-course-text header-buttons-white">new course 1</span>
    );
  };

  const HeaderCourseEnd = () => {
    return (
      <div className="text-2xl step-clickable">
        <HiOutlineSearch />
      </div>
    );
  };

  return (
    <>
      <hr />
      <Header
        className="shadow dark:shadow-2xl course-nav-blue"
        headerStart={<HeaderCourseStart />}
        headerMiddle={<HeaderCourseMiddle />}
        headerEnd={<HeaderCourseEnd />}
      />
      <hr />

      <TabsNavBar />
    </>
  );
};

export default CourseNavBar;
