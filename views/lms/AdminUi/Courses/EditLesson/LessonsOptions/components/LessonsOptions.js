import React, { useEffect } from 'react';
import { Card, Avatar, Button } from 'components/ui';
import { GrowShrinkTag, MediaSkeleton, Loading } from 'components/shared';
import { getCustomerStatistic } from '../store/dataSlice';

import { BsCameraVideo, BsFileEarmarkText } from 'react-icons/bs';

import { AiOutlineFilePdf } from 'react-icons/ai';

import { RxSpeakerQuiet } from 'react-icons/rx';

import { MdOutlineCloudDownload } from 'react-icons/md';

import { HiOutlinePresentationChartLine } from 'react-icons/hi';

import { TbBuildingBroadcastTower } from 'react-icons/tb';

import { TfiLayoutMediaOverlay } from 'react-icons/tfi';

import { FcSurvey } from 'react-icons/fc';

import { MdOutlineAssignment } from 'react-icons/md';

import { ImNewspaper } from 'react-icons/im';

import { useDispatch, useSelector } from 'react-redux';

import style from '../../../../../../../styles/Home.module.css';

const StatisticCard = (props) => {
  const { icon, label, value, loading } = props;

  const avatarSize = 48;

  return (
    <button className={style['button']}>
      <Card className={style['cursor']}>
        <Loading
          loading={loading}
          customLoader={
            <MediaSkeleton
              avatarProps={{
                className: 'rounded',
                width: avatarSize,
                height: avatarSize,
              }}
            />
          }>
          <div className=" flex justify-between items-center">
            <div className=" flex items-center gap-3">
              <Avatar
                className="bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100"
                variant="twoTone"
                size={avatarSize}
                icon={icon}
              />

              <div>
                <span className={style['blue']}>{label}</span>

                <span className="">{value}</span>
              </div>
            </div>
          </div>
        </Loading>
      </Card>
    </button>
  );
};

const CustomerStatistic = () => {
  const dispatch = useDispatch();

  const statisticData = useSelector(
    (state) => state.crmCustomers.data.statisticData
  );
  const loading = useSelector(
    (state) => state.crmCustomers.data.statisticLoading
  );

  useEffect(() => {
    dispatch(getCustomerStatistic());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <div className="flex items-center justify-between mb-2">
        <h4>Lessons</h4>
        <Button size="sm">CLOSE</Button>
      </div>
      <h6 className="mb-2">Deliver learning content</h6>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        <StatisticCard
          icon={<BsCameraVideo />}
          avatarClass="!bg-indigo-600"
          label="Video"
          value="Easily upload and display your video content on our platform"
          loading={loading}
        />
        <StatisticCard
          icon={<AiOutlineFilePdf />}
          avatarClass="!bg-blue-500"
          label="PDF"
          value="Easily upload PDF content for your students to view directly within the Course Player"
          loading={loading}
        />
        <StatisticCard
          icon={<BsFileEarmarkText />}
          avatarClass="!bg-emerald-500"
          label="Text"
          value="Include bodies of text,styled HTML content, and also images or external links"
          loading={loading}
        />
        <StatisticCard
          icon={<RxSpeakerQuiet />}
          avatarClass="!bg-blue-500"
          label="Audio"
          value="Perfect for learning on the go, audio content is great if you know your students are mobile"
          loading={loading}
        />

        <StatisticCard
          icon={<MdOutlineCloudDownload />}
          avatarClass="!bg-blue-500"
          label="Download"
          value="Distribute files to your students"
          loading={loading}
        />
        <StatisticCard
          icon={<HiOutlinePresentationChartLine />}
          avatarClass="!bg-blue-500"
          label="Presentation"
          value="Display slides with audio that your students can navigate through"
          loading={loading}
        />
        <StatisticCard
          icon={<TfiLayoutMediaOverlay />}
          avatarClass="!bg-blue-500"
          label="Multimedia"
          value="Include a great resource into your course that is hosted externally"
          loading={loading}
        />
        <StatisticCard
          icon={<TbBuildingBroadcastTower />}
          avatarClass="!bg-blue-500"
          label="Live"
          value="Enable Live Lessons using Zoom's video meeting and/o webinar tools"
          loading={loading}
        />
      </div>
      <h6 className="mb-4 mt-5">Assess your students</h6>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        <StatisticCard
          icon={<BsCameraVideo />}
          avatarClass="!bg-indigo-600"
          label="Quiz"
          value="Allow students to interact with material that was taught or presented"
          loading={loading}
        />
        <StatisticCard
          icon={<FcSurvey />}
          avatarClass="!bg-indigo-600"
          label="Survey"
          value="Incorporate some avenues for feedback between you and your students"
          loading={loading}
        />
        <StatisticCard
          icon={<MdOutlineAssignment />}
          avatarClass="!bg-indigo-600"
          label="Assignment"
          value="Great for any type of homework that you would like a student to sumbit for approval"
          loading={loading}
        />
        <StatisticCard
          icon={<ImNewspaper />}
          avatarClass="!bg-indigo-600"
          label="Exam"
          value="Integrate with a professional exam tool called Brillium to deliver tests with these requirements"
          loading={loading}
        />
      </div>
    </Card>
  );
};

export default CustomerStatistic;
