import React, { useState } from 'react';

import dynamic from 'next/dynamic';
import Header from '@/components/template/Header';
import { RxCross1, RxCross2 } from 'react-icons/rx';
import { Button } from 'components/ui';
import { TfiEye } from 'react-icons/tfi';
import { BsFillCaretDownFill } from 'react-icons/bs';

const BulkImporter = dynamic(
  () => import('../../../views/lms/BulkImporter/index'),
  {
    ssr: false,
  }
);

const ClassicLayout = dynamic(() => import('components/layout/ClassicLayout'), {
  ssr: false,
});

const HeaderCourseEnd2 = () => {
  return (
    <Button
      className="preview-btn header-buttons-white no-wrap-btn mr-2  mb-1 mt-1"
      variant="default"
      color="yellow-900">
      <TfiEye className="preview-btn mr-3" /> PREVIEW{' '}
      <BsFillCaretDownFill className="preview-btn ml-3" />
    </Button>
  );
};

const Index = () => {
  const [isCurriculumClick, setCurriculumClick] = useState(false);
  const [isBulkImporterClick, setBulkImporterClick] = useState(false);
  const [isSettingsClick, setSettingsClick] = useState(false);
  const [isDripClick, setDripClick] = useState(false);
  const [isPricingClick, setPricingClick] = useState(false);
  const [ispurchaseClick, setpurchaseClick] = useState(false);
  const [isPublishClick, setPublishClick] = useState(false);
  let CurriculumCls = isCurriculumClick ? 'active-cls' : '';
  let BulkImporterCls = isBulkImporterClick ? 'active-cls' : '';
  let SettingsCls = isSettingsClick ? 'active-cls' : '';
  let DripCls = isDripClick ? 'active-cls' : '';
  let PricingCls = isPricingClick ? 'active-cls' : '';
  let purchaseCls = ispurchaseClick ? 'active-cls' : '';
  let PublishCls = isPublishClick ? 'active-cls' : '';

  const HeaderCourseStart = () => {
    return (
      <span className="flex items-center justify-between new-course-text">
        <RxCross1 />
        <span className="ml-2 mr-2">|</span>
        <span className="edit-course">Edit Course</span>
      </span>
    );
  };

  const HeaderCourseMiddle = () => {
    return (
      <span className="new-course-text header-buttons-white">
        new course 1 <BsFillCaretDownFill className=" ml-2" />
      </span>
    );
  };

  const HeaderCourseEnd = () => {
    return <p></p>;
  };

  const onCurriculum = () => {
    setCurriculumClick(true);
    setBulkImporterClick(false);
    setSettingsClick(false);
    setDripClick(false);
    setPricingClick(false);
    setpurchaseClick(false);
    setPublishClick(false);
  };

  const onBulkImporter = () => {
    setCurriculumClick(false);
    setBulkImporterClick(true);
    setSettingsClick(false);
    setDripClick(false);
    setPricingClick(false);
    setpurchaseClick(false);
    setPublishClick(false);
  };

  const onSettings = () => {
    setCurriculumClick(false);
    setBulkImporterClick(false);
    setSettingsClick(true);
    setDripClick(false);
    setPricingClick(false);
    setpurchaseClick(false);
    setPublishClick(false);
  };

  const onDrip = () => {
    setCurriculumClick(false);
    setBulkImporterClick(false);
    setSettingsClick(false);
    setDripClick(true);
    setPricingClick(false);
    setpurchaseClick(false);
    setPublishClick(false);
  };

  const onPricing = () => {
    setCurriculumClick(false);
    setBulkImporterClick(false);
    setSettingsClick(false);
    setDripClick(false);
    setPricingClick(true);
    setpurchaseClick(false);
    setPublishClick(false);
  };

  const onpurchase = () => {
    setCurriculumClick(false);
    setBulkImporterClick(false);
    setSettingsClick(false);
    setDripClick(false);
    setPricingClick(false);
    setpurchaseClick(true);
    setPublishClick(false);
  };

  const onPublish = () => {
    setCurriculumClick(false);
    setBulkImporterClick(false);
    setSettingsClick(false);
    setDripClick(false);
    setPricingClick(false);
    setpurchaseClick(false);
    setPublishClick(true);
  };

  const HeaderCourseStart2 = () => {
    return (
      <ul className="header-buttons-white">
        <li
          onClick={onCurriculum}
          className={`ml-5 each-course-button  ${CurriculumCls} `}>
          Curriculum
        </li>
        <li
          onClick={onBulkImporter}
          className={`ml-5 each-course-button  ${BulkImporterCls}`}>
          BulkImporter
        </li>
        <li
          onClick={onSettings}
          className={`ml-5 each-course-button  ${SettingsCls}`}>
          Settings
        </li>
        <li onClick={onDrip} className={`ml-5 each-course-button ${DripCls}`}>
          Drip
        </li>
        <li
          onClick={onPricing}
          className={`ml-5 each-course-button ${PricingCls}`}>
          Pricing
        </li>
        <li
          onClick={onpurchase}
          className={`ml-5 each-course-button ${purchaseCls}`}>
          After purchase
        </li>
        <li
          onClick={onPublish}
          className={`ml-5 each-course-button ${PublishCls}`}>
          Publish
        </li>
      </ul>
    );
  };

  return (
    <>
      <ClassicLayout>
        {/* <BulkImporter /> */}
        <hr />
        <Header
          className="shadow dark:shadow-2xl course-nav-blue"
          headerStart={<HeaderCourseStart />}
          headerMiddle={<HeaderCourseMiddle />}
          headerEnd={<HeaderCourseEnd />}
        />
        <hr />
        <Header
          className="header-buttons-white shadow dark:shadow-2xl "
          headerStart={<HeaderCourseStart2 />}
          //   headerMiddle={<HeaderCourseMiddle />}
          headerEnd={<HeaderCourseEnd2 />}
        />
        {isBulkImporterClick && <BulkImporter />}
      </ClassicLayout>
    </>
  );
};

export default Index;
