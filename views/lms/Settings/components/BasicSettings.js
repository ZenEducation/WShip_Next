import React from 'react';

import { Input, Card, Checkbox } from 'components/ui';

import { Button, Dropdown } from 'components/ui';
import { HiOutlineTrash } from 'react-icons/hi';
import { TfiEye } from 'react-icons/tfi';
import { BsFillCaretDownFill } from 'react-icons/bs';

// BasicSettings

const PreviewDropDown = () => {
  const Toggle = (
    <Button
      className="preview-btn header-buttons-white no-wrap-btn mr-2 mt-1"
      size="sm"
      variant="default"
      color="yellow-900">
      photon promanagent{' '}
      <BsFillCaretDownFill className=" preview-btn ml-5 w-20 " />
    </Button>
  );

  return (
    <Dropdown renderTitle={Toggle}>
      <Dropdown.Item eventKey="a">photon promanagent A</Dropdown.Item>
      <Dropdown.Item eventKey="b">photon promanagent B</Dropdown.Item>
    </Dropdown>
  );
};

const BasicSettings = () => {
  return (
    <>
      <Card className="mb-5">
        <div className="flexWrap  mb-2">
          <h4>Basic settings</h4>
          <div className="flexWrap">
            <Button
              color="rose-600"
              className="mr-2 flex items-center"
              variant="twoTone">
              <HiOutlineTrash />
              <span className="ml-3">
                <span>DELETE THIS COURSE</span>
              </span>
            </Button>
            <Button
              className="mr-2  mb-1 mt-1"
              variant="solid"
              color="blue-900">
              SAVE
            </Button>
          </div>
        </div>

        <div className="mb-5">
          <h6>Course name</h6>
          <Input className="mb-3" placeholder="new course" />
        </div>

        <div className="flex mt-5">
          <div className="w-100 year-picker mr-3">
            <h6>Course URL</h6>
            <Input placeholder="new course" />
            <p>https://www.google.co.in/</p>
          </div>
          <div className="year-picker ml-3">
            <h6>Choose your instructor</h6>
            <PreviewDropDown />
          </div>
        </div>

        <div>
          <h6 className="mt-4 mb-2">Access</h6>
          <Checkbox className="flex items-center mb-3" color="black">
            <h6 className="ml-2 ">Private course</h6>
          </Checkbox>
          <Checkbox className="flex items-center" color="black">
            <h6 className="ml-2 ">Hidden course</h6>
          </Checkbox>
        </div>

        <div>
          <h6 className="mt-4 mb-2">Security</h6>
          <Checkbox className="flex items-center mb-3" color="black">
            <h6 className="ml-2 ">Disable text copying</h6>
          </Checkbox>
        </div>
      </Card>
    </>
  );
};

export default BasicSettings;
