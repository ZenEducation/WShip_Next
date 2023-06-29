import React, { useContext, useState } from 'react';

import { Card, Checkbox, Menu, Radio, Tabs, Tooltip } from 'components/ui';

import { CardsContext } from '../../../../../CardsComponent/CardsContext';

const { TabNav, TabList, TabContent } = Tabs;

import dynamic from 'next/dynamic';
import Header from 'components/template/Header';
import { RxCross1 } from 'react-icons/rx';
import { Button, Dropdown } from 'components/ui';
import { TfiEye } from 'react-icons/tfi';
import {
  BsArrowBarLeft,
  BsFillCaretDownFill,
  BsThreeDotsVertical,
} from 'react-icons/bs';
import {
  HiOutlineExclamationCircle,
  HiOutlineSearch,
  HiOutlineTrash,
} from 'react-icons/hi';
import { BiArrowBack, BiEdit } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { Text } from 'html-react-parser';
import { InputGroup, Input, Select, Switcher } from 'components/ui';
const { Addon } = InputGroup;
import { Table } from 'components/ui';

const { Tr, Th, Td, THead, TBody } = Table;

const PricingRatio = () => {
  const options1 = [
    { value: 'Day(s)', label: 'Day(s)' },
    { value: 'Month(s)', label: 'Month(s)' },
  ];

  const [value, setValue] = useState(null);

  const onChange = (val) => {
    setValue(val);
  };

  const FreeToogle = () => {
    const [checked, setChecked] = useState(false);

    const onSwitcherToggle = (val) => {
      setChecked(!val);
    };

    return (
      <div>
        <Switcher checked={checked} onChange={onSwitcherToggle} />
      </div>
    );
  };

  const CustomToogle = () => {
    const [checked2, setChecked] = useState(false);

    const onSwitcherToggle = (val) => {
      setChecked(!val);
    };

    return (
      <div>
        <Switcher checked={checked2} onChange={onSwitcherToggle} />
      </div>
    );
  };

  const FreeSelected = () => {
    return (
      <Card className="mb-5 ml-5 bg-gray-200 free-card">
        <h6>Days Until Expirity</h6>
        <div className="flex items-center">
          <InputGroup className="mb-3 mt-3">
            <Input className="w-40" type="number" />
            <div className="w-40">
              <Select
                isSearchable={false}
                defaultValue={{ label: 'Day(s)', value: 'Day(s)' }}
                options={options1}
              />
            </div>
          </InputGroup>
        </div>

        <p>Leave blank for unlimited access</p>
      </Card>
    );
  };

  const OneTimeSelected = () => {
    const options1 = [
      { value: 'Day(s)', label: 'Day(s)' },
      { value: 'Month(s)', label: 'Month(s)' },
    ];
    return (
      <div className="mb-5 ml-5">
        <h6>Price</h6>
        <InputGroup className="mb-3 mt-3">
          <Addon>$</Addon>
          <Input className="w-40" />
        </InputGroup>
        <p>Options: One-time payment</p>
        <div className="mb-5 ml-5 mt-5">
          <h6>Enrollment Duration</h6>
          <InputGroup className="mb-3 mt-3">
            <Input className="w-40" />

            <div style={{ minWidth: 100 }}>
              <Select
                isSearchable={false}
                defaultValue={{ label: 'Day(s)', value: 'Day(s)' }}
                options={options1}
              />
            </div>
          </InputGroup>
          <p>Leave blank for unlimited access.</p>
        </div>
      </div>
    );
  };

  const SubscriptionSelected = () => {
    return (
      <div className="mb-5 ml-5">
        <div className="flex">
          <div className="mr-5">
            <h6>Amount</h6>
            <InputGroup className="mb-3 mt-1">
              <Addon>$</Addon>
              <Input className="w-40" />
            </InputGroup>
          </div>
          <div>
            <h6>Paid every</h6>
            <InputGroup className="mb-3 mt-1">
              <Input className="w-20" />
              <div style={{ minWidth: 100 }}>
                <Select
                  isSearchable={false}
                  defaultValue={{ label: 'Day(s)', value: 'Day(s)' }}
                  options={options1}
                />
              </div>
            </InputGroup>
          </div>
        </div>

        <p>Options: Subcription/Membership plan</p>

        <div className="bg-gray-100 p-4">
          <div className="flex mt-1">
            <FreeToogle />

            <div className="ml-3">
              <h6>Free trial period</h6>
              <p>Regular payments will begin when the free trial ends in:</p>
              <InputGroup className="mb-3 mt-1">
                <Input className="w-20" />
                <div style={{ minWidth: 100 }}>
                  <Select
                    isSearchable={false}
                    defaultValue={{ label: 'Day(s)', value: 'Day(s)' }}
                    options={options1}
                  />
                </div>
              </InputGroup>
            </div>
          </div>
          <div className="flex mt-4">
            <CustomToogle />

            <div className="ml-3">
              <h6>Custom first payment</h6>
              <p>
                students pay this amount for the first month of the
                Subscription.
              </p>

              <InputGroup className="mb-3 mt-1">
                <Addon>$</Addon>
                <Input className="w-40" />
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MonthlyPlanSelected = () => {
    return (
      <div className="mb-5 ml-5">
        <div className="flex mb-5">
          <div className="mr-5">
            <h6>Price per payment</h6>
            <InputGroup className="mb-3 mt-1">
              <Addon>$</Addon>
              <Input className="w-40" />
            </InputGroup>
          </div>
          <div>
            <h6>Total months</h6>
            <InputGroup className=" mt-1">
              <Input className="w-40" />
            </InputGroup>
            <p className="ml-2 mt-1">Minimum: 2 months</p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 pl-5">
          <div className="mb-4">
            <p>
              Specify the number of days, after purchase, that a student will be
              enrolled in the course.
            </p>
            <h6>Enrollment duration</h6>

            <InputGroup className="mb-3 mt-1">
              <Input className="w-20" />
              <Addon>days</Addon>
            </InputGroup>
            <p>Minimum: 60 days</p>
          </div>

          <div className="mb-3">
            <p>
              This text will be displayed on the Buy Button on the course card
              and the course landing page.
            </p>
            <h6 className="ml-1">"Buy Button" text label</h6>
            <Input placeholder="$10/month" className="w-40" />
            <p>Limit: 30 characters</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="mt-4">
        <Radio.Group vertical value={value} onChange={onChange}>
          <Radio value={'Free'}>
            <div className="ml-2">
              <h6>Free</h6>
              <p>
                Offer free content to your subscribers. Optionally, you can set
                an enrollment duration that will limit the time student have
                access to your content.
              </p>
            </div>
          </Radio>
          {value === 'Free' && <FreeSelected />}

          <Radio value={'One-time'}>
            <div className="ml-2 mt-2">
              <h6>One-time payment</h6>
              <p>
                Charge students a one-time fee to access the content.
                Optionally, you can set an enrollment duration that will limit
                the time students have access to your content.
              </p>
            </div>
          </Radio>

          {value === 'One-time' && <OneTimeSelected />}

          <Radio value={'Subscription'}>
            <div className="ml-2 mt-2">
              <div className="flex">
                <h6>Subscription / Membership</h6>
              </div>
              <p>
                Charge students recurring monthly fees for access to course
                content. Great for membership sites!
              </p>
            </div>
          </Radio>

          {value === 'Subscription' && <SubscriptionSelected />}

          <Radio value={'Monthly'}>
            <div className="ml-2 mt-2">
              <div className="flex">
                <h6>Monthly payment plan</h6>
              </div>

              <p>Split the full course price over several monthly payments.</p>
            </div>
          </Radio>

          {value === 'Monthly' && <MonthlyPlanSelected />}
        </Radio.Group>
      </div>
    </div>
  );
};

// const UpgradeCard = () => {
//   return (
//     <div className="upgrade-card p-5 flexWrap mt-1">
//       <h6 className="text-green-900 mt-3 mb-3">
//         Upgrade to unlock more payment options.
//       </h6>
//       <h5 className="text-green-900">UPGRADE NOW</h5>
//     </div>
//   );
// };

const AddPrice = ({ handleSelect, selectedValue }) => {
  const Toggle = (
    <Button
      className="preview-btn header-buttons-white no-wrap-btn mr-2 mb-3 mt-5"
      variant="default"
      color="yellow-900">
      <AiOutlinePlus className="text-xl preview-btn mr-3" />
      ADD PRICE <BsFillCaretDownFill className="preview-btn ml-3" />
    </Button>
  );

  return (
    <Dropdown renderTitle={Toggle} onSelect={handleSelect}>
      <Dropdown.Item eventKey="One-time">One-time payment</Dropdown.Item>
      <Dropdown.Item eventKey="Subscription">
        Subscription / Membership
      </Dropdown.Item>
      <Dropdown.Item eventKey="Monthly">Monthly payment plan</Dropdown.Item>
    </Dropdown>
  );
};

const OneTimeSelectedAddPrice = ({ onSave }) => {
  const options1 = [
    { value: 'Day(s)', label: 'Day(s)' },
    { value: 'Month(s)', label: 'Month(s)' },
  ];
  const [price, setPrice] = useState('');
  const [months, setMonths] = useState('');

  const handleSave = () => {
    onSave({
      type: 'One-time',
      price: price,
      months: `${months} days`,
    });
    setPrice('');
    setMonths('');
  };

  return (
    <div className="mb-5 ml-5">
      <h6>Price</h6>
      <InputGroup className="mb-3 mt-3">
        <Addon>$</Addon>
        <Input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-40"
        />
      </InputGroup>
      <p>Options: One-time payment</p>
      <div className="mb-5 ml-5 mt-5">
        <h6>Enrollment Duration</h6>
        <InputGroup className="mb-3 mt-3">
          <Input
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            className="w-40"
          />
          <div style={{ minWidth: 100 }}>
            <Select
              isSearchable={false}
              defaultValue={{ label: 'Day(s)', value: 'Day(s)' }}
              options={options1}
            />
          </div>
        </InputGroup>
        <p>Leave blank for unlimited access.</p>
      </div>
      <div className="flexWrap-end mt-3 mb-5">
        <Button
          onClick={handleSave}
          className="mr-2  mb-1 mt-1"
          variant="solid"
          color="blue-900">
          SAVE
        </Button>
      </div>
    </div>
  );
};

const SubscriptionSelectedAddPrice = ({ onSave }) => {
  const [price, setPrice] = useState('');
  const [months, setMonths] = useState('');
  const [disPlaymonths, setDisPlayMonths] = useState('Day(s)');

  const handleSave = () => {
    onSave({
      type: 'Subscription',
      price: price,
      months: `${months} ${disPlaymonths}`,
    });
    setPrice('');
    setMonths('');
  };

  const options1 = [
    { value: 'Day(s)', label: 'Day(s)' },
    { value: 'Month(s)', label: 'Month(s)' },
  ];

  const [value, setValue] = useState(null);

  const onDayMonth = (val) => {
    setDisPlayMonths(val.value);
  };

  const FreeToogle = () => {
    const [checked, setChecked] = useState(false);

    const onSwitcherToggle = (val) => {
      setChecked(!val);
    };

    return (
      <div>
        <Switcher checked={checked} onChange={onSwitcherToggle} />
      </div>
    );
  };

  const CustomToogle = () => {
    const [checked2, setChecked] = useState(false);

    const onSwitcherToggle = (val) => {
      setChecked(!val);
    };

    return (
      <div>
        <Switcher checked={checked2} onChange={onSwitcherToggle} />
      </div>
    );
  };

  return (
    <div className="mb-5 ml-5">
      <div className="flex">
        <div className="mr-5">
          <h6>Amount</h6>
          <InputGroup className="mb-3 mt-1">
            <Addon>$</Addon>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-40"
            />
          </InputGroup>
        </div>
        <div>
          <h6>Paid every</h6>
          <InputGroup className="mb-3 mt-1">
            <Input
              type="number"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="w-20"
            />
            <div style={{ minWidth: 100 }}>
              <Select
                isSearchable={false}
                defaultValue={{ label: 'Day(s)', value: 'Day(s)' }}
                options={options1}
                onChange={onDayMonth}
              />
            </div>
          </InputGroup>
        </div>
      </div>

      <p>Options: Subcription/Membership plan</p>

      <div className="bg-gray-100 p-4">
        <div className="flex mt-1">
          <FreeToogle />

          <div className="ml-3">
            <h6>Free trial period</h6>
            <p>Regular payments will begin when the free trial ends in:</p>
            <InputGroup className="mb-3 mt-1">
              <Input className="w-20" />
              <div style={{ minWidth: 100 }}>
                <Select
                  isSearchable={false}
                  defaultValue={{ label: 'Day(s)', value: 'Day(s)' }}
                  options={options1}
                />
              </div>
            </InputGroup>
          </div>
        </div>
        <div className="flex mt-4">
          <CustomToogle />

          <div className="ml-3">
            <h6>Custom first payment</h6>
            <p>
              students pay this amount for the first month of the Subscription.
            </p>

            <InputGroup className="mb-3 mt-1">
              <Addon>$</Addon>
              <Input className="w-40" />
            </InputGroup>
          </div>
        </div>
      </div>
      <div className="flexWrap-end mt-3 mb-5">
        <Button
          className="mr-2  mb-1 mt-1"
          variant="solid"
          color="blue-900"
          onClick={handleSave}>
          SAVE
        </Button>
      </div>
    </div>
  );
};

const MonthlyPlanSelectedAddPrice = ({ onSave }) => {
  const [price, setPrice] = useState('');
  const [months, setMonths] = useState('');

  const handleSave = () => {
    onSave({
      type: 'Monthly',
      price: price,
      months: `${months} Month(s)`,
    });
    setPrice('');
    setMonths('');
  };

  return (
    <div className="mb-5 ml-5">
      <div className="flex mb-5">
        <div className="mr-5">
          <h6>Price per payment</h6>
          <InputGroup className="mb-3 mt-1">
            <Addon>$</Addon>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-40"
            />
          </InputGroup>
        </div>
        <div>
          <h6>Total months</h6>
          <InputGroup className=" mt-1">
            <Input
              type="number"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="w-40"
            />
          </InputGroup>
          <p className="ml-2 mt-1">Minimum: 2 months</p>
        </div>
      </div>

      <div className="bg-gray-100 p-4 pl-5">
        <div className="mb-4">
          <p>
            Specify the number of days, after purchase, that a student will be
            enrolled in the course.
          </p>
          <h6>Enrollment duration</h6>

          <InputGroup className="mb-3 mt-1">
            <Input className="w-20" />
            <Addon>days</Addon>
          </InputGroup>
          <p>Minimum: 60 days</p>
        </div>

        <div className="mb-3">
          <p>
            This text will be displayed on the Buy Button on the course card and
            the course landing page.
          </p>
          <h6 className="ml-1">"Buy Button" text label</h6>
          <Input placeholder="$10/month" className="w-40" />
          <p>Limit: 30 characters</p>
        </div>
      </div>
      <div className="flexWrap-end mt-3 mb-5">
        <Button
          className="mr-2  mb-1 mt-1"
          variant="solid"
          color="blue-900"
          onClick={handleSave}>
          SAVE
        </Button>
      </div>
    </div>
  );
};

const PricingTable = ({ pricingData, handleEdit, handleDelete }) => {
  return (
    <div>
      <Table compact>
        <THead>
          <Tr>
            <Th>Pricing Type</Th>
            <Th>Amount / Price Per Payment</Th>
            <Th>Enrollment Duration / Paid every</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </THead>
        <TBody>
          {pricingData.map((pricing, index) => (
            <Tr key={index}>
              <Td>{pricing.type}</Td>
              <Td>{pricing.price}</Td>
              <Td>{pricing.months}</Td>
              <Td>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(pricing, index)}>
                  <BiEdit />
                </button>
              </Td>
              <Td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(index)}>
                  <HiOutlineTrash />
                </button>
              </Td>
            </Tr>
          ))}
        </TBody>
      </Table>
    </div>
  );
};

const Pricing = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [pricingData, setPricingData] = useState([]);
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [rows, setRows] = useState([]);

  const handleSelect = (eventKey) => {
    setSelectedValue(eventKey);
    // setPricingData([]);
    // setPrice('');
    // setDuration('');
  };

  const handleSave = (pricing) => {
    setPricingData([...pricingData, pricing]);
    // new
    setPrice('');
    setDuration('');
    setSelectedValue('');
  };

  const handleDelete = (index) => {
    setPricingData(pricingData.filter((_, i) => i !== index));
  };

  // const handleEdit = (index) => {
  //   const pricing = pricingData[index];
  //   setSelectedValue(pricing.type);
  //   document.getElementById('price').value = pricing.price;
  //   document.getElementById('months').value = pricing.months;
  // };

  const handleEdit = (rowData, index) => {
    setSelectedValue(rowData.type);
    setPrice(rowData.price);
    setDuration(rowData.duration);
    handleDelete(index);
  };

  let addPriceComponent;
  switch (selectedValue) {
    case 'One-time':
      addPriceComponent = <OneTimeSelectedAddPrice onSave={handleSave} />;
      break;
    case 'Subscription':
      addPriceComponent = <SubscriptionSelectedAddPrice onSave={handleSave} />;
      break;
    case 'Monthly':
      addPriceComponent = <MonthlyPlanSelectedAddPrice onSave={handleSave} />;
      break;
    default:
      addPriceComponent = null;
  }

  const [menuValue, setMenuValue] = useState('Primary');

  const handleSelectMenu = (key, e) => {
    setMenuValue(key);
  };

  const { sideBar, setSideBar } = useContext(CardsContext);

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
          <Menu onSelect={handleSelectMenu}>
            <Menu.MenuItem eventKey="Primary">Primary pricing</Menu.MenuItem>
            <Menu.MenuItem eventKey="additional">
              Set additional pricing
            </Menu.MenuItem>
          </Menu>
        </div>
      )}

      <div>
        <div className="flexWrap ">
          <div className="flexWrap">
            <Button
              size="sm"
              onClick={onSideBarClose}
              className="mb-2 mt-2  mr-3">
              <BsThreeDotsVertical className="text-xl mb-2" />
            </Button>
            <h4>Pricing</h4>
          </div>

          <Button className="mr-2 mb-2" variant="solid" color="blue-900">
            SAVE
          </Button>
        </div>

        {menuValue === 'Primary' && (
          <Card>
            <h4>Primary pricing</h4>
            <p className="mt-2 ">
              Set the intial pricing option that will be displayed on the course
              landing page.
            </p>
            <PricingRatio />
          </Card>
        )}

        {menuValue === 'additional' && (
          <Card className="mt-5">
            <h4>Set additional pricing</h4>
            <p className="mt-2 mb-4">
              Offer your customers additional pricing options to purchase your
              course. Add as many prices ads you like!{' '}
              <button className="text-blue-700 underline">Leadn more</button>
            </p>

            <AddPrice
              handleSelect={handleSelect}
              selectedValue={selectedValue}
            />

            {addPriceComponent}
            <PricingTable
              pricingData={pricingData}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />

            {/* {selectedValue === 'One-time' && <OneTimeSelectedAddPrice />}
        {selectedValue === 'Subscription' && <SubscriptionSelectedAddPrice />}
        {selectedValue === 'Monthly' && <MonthlyPlanSelectedAddPrice />} */}
          </Card>
        )}

        <div className="flexWrap-end mt-3 mb-5">
          <Button className="mr-2  mb-1 mt-1" variant="solid" color="blue-900">
            SAVE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
