import React, { useState } from 'react';

import { Input, Card, Checkbox, Select, InputGroup } from 'components/ui';

import CreatableSelect from 'react-select/creatable';

import { Button, Dropdown, Table } from 'components/ui';
import { HiOutlineTrash } from 'react-icons/hi';
import { TfiEye } from 'react-icons/tfi';
import { BsFillCaretDownFill } from 'react-icons/bs';

const { Tr, Th, Td, THead, TBody } = Table;

// AdminRevenue

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

const AdminsCourse = [
  { value: 'Admin1', label: 'Admin 1' },
  { value: 'Admin2', label: 'Admin 2' },
  { value: 'Admin3', label: 'Admin 3' },
  { value: 'Admin4', label: 'Admin 4' },
  { value: 'Admin5', label: 'Admin 5' },
];

const CourseAdmins = () => {
  const [dropNames, setDropNames] = useState(AdminsCourse);
  const [currentName, setCurrentName] = useState();
  const [names, setNames] = useState([]);

  const removeFile = (eachPerson, index) => {
    console.log('removeFile', eachPerson);
    setNames(names.filter((_, i) => i !== index));
    setDropNames([...dropNames, eachPerson]);
  };

  const onAddAdminCourse = () => {
    console.log('currentName', currentName);

    setNames([...names, currentName]);
    setDropNames(
      dropNames.filter(
        (eachDropName) => eachDropName.value !== currentName.value
      )
    );
    setCurrentName(null);
  };

  const handleChange = (newValue, actionMeta) => {
    // console.group('Value Changed');
    // console.log(newValue);
    setCurrentName(newValue);
    // setNames([...names, newValue]);
    // setDropNames(
    //   dropNames.filter((eachDropName) => eachDropName.value !== newValue.value)
    // );
    // console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  const handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  return (
    <div className="border rounded-md p-2">
      <div className="mb-4 flex ">
        <Select
          //   isClearable
          value={currentName}
          onChange={handleChange}
          placeholder="Type something..."
          // onInputChange={handleInputChange}
          // componentAs={CreatableSelect}
          className="orderFlex"
          options={dropNames}></Select>
        <Button onClick={onAddAdminCourse}>Add</Button>
      </div>

      {names.map((eachPerson, index) => (
        <div key={index}>
          <hr />
          <div className="flexWrap mt-2">
            <p>{eachPerson.label}</p>
            <Button
              className="upload-file-remove upload-file-delete"
              onClick={() => removeFile(eachPerson, index)}>
              <HiOutlineTrash />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

const AffiliateCourse = [
  { value: 'Affiliate1', label: 'Affiliate 1' },
  { value: 'Affiliate2', label: 'Affiliate 2' },
  { value: 'Affiliate3', label: 'Affiliate 3' },
  { value: 'Affiliate4', label: 'Affiliate 4' },
  { value: 'Affiliate5', label: 'Affiliate 5' },
];

const CourseAffiliate = () => {
  const [dropNames, setDropNames] = useState(AffiliateCourse);
  const [currentName, setCurrentName] = useState();
  const [names, setNames] = useState([]);

  const removeFile = (eachPerson, index) => {
    console.log('removeFile', eachPerson);
    setNames(names.filter((_, i) => i !== index));
    setDropNames([...dropNames, eachPerson]);
  };

  const onAddAdminCourse = () => {
    console.log('currentName', currentName);

    setNames([...names, currentName]);
    setDropNames(
      dropNames.filter(
        (eachDropName) => eachDropName.value !== currentName.value
      )
    );
    setCurrentName(null);
  };

  const handleChange = (newValue, actionMeta) => {
    // console.group('Value Changed');
    // console.log(newValue);
    setCurrentName(newValue);
    // setNames([...names, newValue]);
    // setDropNames(
    //   dropNames.filter((eachDropName) => eachDropName.value !== newValue.value)
    // );
    // console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  const handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  return (
    <div className="border rounded-md p-2">
      <div className="mb-4 flex ">
        <Select
          //   isClearable
          value={currentName}
          onChange={handleChange}
          placeholder="Type something..."
          // onInputChange={handleInputChange}
          // componentAs={CreatableSelect}
          className="orderFlex"
          options={dropNames}></Select>
        <Button onClick={onAddAdminCourse}>Add</Button>
      </div>

      {names.map((eachPerson, index) => (
        <div key={index}>
          <hr />
          <div className="flexWrap mt-2">
            <p>{eachPerson.label}</p>
            <Button
              className="upload-file-remove upload-file-delete"
              onClick={() => removeFile(eachPerson, index)}>
              <HiOutlineTrash />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

const RevenueCourse = [
  { value: 'Partner1', label: 'Partner 1', percentage: 8 },
  { value: 'Partner2', label: 'Partner 2', percentage: 18 },
  { value: 'Partner3', label: 'Partner 3', percentage: 48 },
  { value: 'Partner4', label: 'Partner 4', percentage: 98 },
  { value: 'Partner5', label: 'Partner 5', percentage: 28 },
];

const CourseRevenue = () => {
  const [dropNames, setDropNames] = useState(RevenueCourse);
  const [currentName, setCurrentName] = useState();
  const [currentAddName, setCurrentAddName] = useState(null);
  const [names, setNames] = useState([]);

  const removeFile = (eachPerson, index) => {
    console.log('removeFile', eachPerson);
    setNames(names.filter((_, i) => i !== index));
    setDropNames([...dropNames, eachPerson]);
  };

  const onAddAdminCourse = () => {
    console.log('currentName', currentName);

    setCurrentAddName(currentName);

    // setNames([...names, currentName]);
    // setDropNames(
    //   dropNames.filter(
    //     (eachDropName) => eachDropName.value !== currentName.value
    //   )
    // );
    setCurrentName(null);
  };

  const handleChange = (newValue, actionMeta) => {
    // console.group('Value Changed');
    // console.log(newValue);
    setCurrentName(newValue);
    // setNames([...names, newValue]);
    // setDropNames(
    //   dropNames.filter((eachDropName) => eachDropName.value !== newValue.value)
    // );
    // console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  const onPercentageChange = (e) => {
    console.log('onPercentageChange', e.target.value);

    const currentPercentage = e.target.value;

    setCurrentAddName({ ...currentAddName, percentage: currentPercentage });
  };

  const onSaveRevenue = () => {
    setNames([...names, currentAddName]);
    setDropNames(
      dropNames.filter(
        (eachDropName) => eachDropName.value !== currentAddName.value
      )
    );

    setCurrentAddName(null);
  };

  return (
    <div className="border rounded-md p-2">
      <div className="mb-4 flex ">
        <Select
          //   isClearable
          value={currentName}
          onChange={handleChange}
          placeholder="Type something..."
          // onInputChange={handleInputChange}
          // componentAs={CreatableSelect}
          className="orderFlex"
          options={dropNames}></Select>
        <Button onClick={onAddAdminCourse}>Add</Button>
      </div>

      <div className="flexWrap bg-gray-100 mt-2 p-3">
        <h6>Name</h6>
        <h6>Percentage</h6>
        {currentAddName !== null && (
          <Button className="mr-3" onClick={onSaveRevenue} size="xs">
            Save
          </Button>
        )}
        {currentAddName === null && <p></p>}
      </div>

      {currentAddName !== null && (
        <div className="flexWrap  p-3">
          <p>{currentAddName.label}</p>
          <div>
            <Input
              value={currentAddName.percentage}
              onChange={onPercentageChange}
              className="w-20"
              type="number"
            />{' '}
            %
          </div>
          <p></p>
        </div>
      )}

      {names.map((eachPerson, index) => (
        <div key={index}>
          <hr />
          <div className="flexWrap mt-2 p-2">
            <p>{eachPerson.label}</p>
            <p>{eachPerson.percentage} %</p>
            <Button
              className="upload-file-remove upload-file-delete"
              onClick={() => removeFile(eachPerson, index)}>
              <HiOutlineTrash />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

const AdminRevenue = () => {
  return (
    <>
      <Card className="mb-5">
        <div className="  mb-2">
          <h4>Admins, Revenue Partners, & Affiliates</h4>
          <p className="mt-2 mb-4">
            Manage Course Admin, Revenue Partner, and Affiliate settings for
            this specific course. You can assign a role to a user in their user
            settings.{' '}
            <button className="text-blue-700 underline">Learn more</button>
          </p>
        </div>

        <div className="mb-5">
          <h6>Add Course Admins</h6>
          <p>
            Course Admins can create new courses, edit existing courses they’re
            assigned to, or create new instructors.{' '}
            <button className="text-blue-700 underline">Learn more</button>
          </p>
        </div>

        <CourseAdmins />

        <div className="mb-5 mt-4">
          <h6>Add Revenue Partner</h6>
          <p>
            Revenue Partners also known as Product Payees allow you to share a
            percentage of your earnings with a third party. Revenue Partners do
            not have any custom details available in their account and have
            access to basic account settings like Student accounts.
          </p>
        </div>

        <CourseRevenue />

        <div className="mb-5 mt-4">
          <h6>Add Affiliate</h6>
          <p>
            An Affiliate can earn percentage or dollar commissions for promoting
            your courses! They will have access to bacic account settings like a
            Student as well as an Affiliate Dashboard.
          </p>
        </div>

        <CourseAffiliate />
      </Card>
    </>
  );
};

export default AdminRevenue;
