import React, { useState } from 'react';

// Settings

import { Menu } from 'components/ui';

import CourseCompletion from './CourseCompletion';
import BasicSettings from './BasicSettings';
import CourseImgDescription from './CourseImgDescription';

import AdminRevenue from './AdminRevenue';

const Settings = () => {
  const [value, setValue] = useState('Basic');

  const handleSelect = (key, e) => {
    console.log('key', key);
    setValue(key);
    console.log('event', e);
  };
  return (
    <div className="flex">
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
      <div>
        {value === 'Basic' && <BasicSettings />}

        {value === 'image' && <CourseImgDescription />}

        {value === 'progress' && <CourseCompletion />}

        {value === 'Admin' && <AdminRevenue />}
      </div>
    </div>
  );
};

export default Settings;
