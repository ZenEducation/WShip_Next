import React, { useContext, useState } from 'react';

// Settings

import { Menu } from 'components/AfterAuth/ui';

import CourseCompletion from './CourseCompletion';

import BasicSettings from './BasicSettings';
import CourseImgDescription from './CourseImgDescription';

import { CardsContext } from '../../../../../CardsComponent/CardsContext';

import AdminRevenue from './AdminRevenue';
import { Button } from 'components/AfterAuth/ui';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Settings = () => {
  const [value, setValue] = useState('Basic');
  const { sideBar, setSideBar } = useContext(CardsContext);

  const handleSelect = (key, e) => {
    // console.log('key', key);
    setValue(key);
    // console.log('event', e);
  };

  const onSideBarClose = () => {
    // setSideBar(!sideBar);

    setTimeout(() => {
      setSideBar(!sideBar);
    }, 100);
  };

  return (
    <div className="flex">
      {sideBar && (
        <div className="border rounded-md p-2 mr-2">
          <Menu onSelect={handleSelect}>
            <Menu.MenuItem eventKey="Basic">Basic settings</Menu.MenuItem>
            <Menu.MenuItem eventKey="image">
              Course image & description
            </Menu.MenuItem>
            <Menu.MenuItem eventKey="progress">
              Course progress & completion
            </Menu.MenuItem>
            <Menu.MenuItem eventKey="Admin" className="flex m-4">
              Admin, Revenue Partners, & Affiliates
            </Menu.MenuItem>
          </Menu>
        </div>
      )}
      <div className="orderFlex">
        <Button size="sm" onClick={onSideBarClose} className="mb-2 mt-2  mr-3">
          <BsThreeDotsVertical className="text-xl mb-2" />
        </Button>

        {value === 'Basic' && <BasicSettings />}

        {value === 'image' && <CourseImgDescription />}

        {value === 'progress' && <CourseCompletion />}

        {value === 'Admin' && <AdminRevenue />}
      </div>
    </div>
  );
};

export default Settings;
