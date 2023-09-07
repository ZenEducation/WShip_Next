import { Card, Checkbox, Radio } from '@/components/AfterAuth/ui';
import React, { useContext, useState } from 'react';
import { Button } from 'components/AfterAuth/ui';
import { DatePicker } from 'components/AfterAuth/ui';

import { CardsContext } from '../../../../../CardsComponent/CardsContext';

import dayjs from 'dayjs';

import { InputGroup, Input, Select, Switcher } from 'components/AfterAuth/ui';
import { BsThreeDotsVertical } from 'react-icons/bs';

// Settings

const EnrollmentDateComp = ({ cards }) => {
  return (
    <div>
      {cards.map((eachCard) => (
        <Card key={eachCard.id} className="mb-3">
          <h4>{eachCard.name}</h4>
          <hr className="mb-3 mt-3" />

          {eachCard.uploads.map((eachUpload, index) => (
            <div key={index}>
              <div>
                <h6>{eachUpload.name}</h6>
                <p>
                  will be Released{' '}
                  <Input
                    type="number"
                    //   value={price}
                    //   onChange={(e) => setPrice(e.target.value)}
                    className="w-20"
                  />{' '}
                  Days after the selected date.
                </p>
              </div>
              <hr className=" mt-4 mb-4 " />
            </div>
          ))}
        </Card>
      ))}
    </div>
  );
};

const CourseStartDateComp = ({ cards }) => {
  return (
    <div>
      {cards.map((eachCard) => (
        <Card key={eachCard.id} className="mb-3">
          <h4>{eachCard.name}</h4>
          <hr className="mb-3 mt-3" />

          {eachCard.uploads.map((eachUpload, index) => (
            <div key={index}>
              <div>
                <h6>{eachUpload.name}</h6>
                <p>
                  will be Released{' '}
                  <Input
                    type="number"
                    //   value={price}
                    //   onChange={(e) => setPrice(e.target.value)}
                    className="w-20"
                  />{' '}
                  Days after the selected date.
                </p>
              </div>
              <hr className=" mt-4 mb-4 " />
            </div>
          ))}
        </Card>
      ))}
    </div>
  );
};

const DisplaySpecificDateUploads = (formattedDate, eachUpload, index) => {
  // const [date, setDate] = useState(new Date());

  // const handleDatePickerChange = (date) => {
  //   setDate(date);
  // };

  const minDate = new Date(formattedDate);

  return (
    <div key={index}>
      <div>
        <h6>{eachUpload.name}</h6>
        <div className="flex items-center">
          will be Released{' '}
          <div className="flex flex-col gap-5 ml-2 mr-2">
            <DatePicker
              inputFormat="DD-MM-YYYY"
              className="w-40"
              placeholder="Pick a date"
              minDate={minDate}
              // onChange={handleDatePickerChange}
              clearable={false}
            />
          </div>{' '}
          Days after the selected date.
        </div>
      </div>
      <hr className=" mt-4 mb-4 " />
    </div>
  );
};

const SpecificDateComp = ({ cards, releaseDate }) => {
  const [date, setDate] = useState(new Date());

  const dateString = releaseDate;
  const formattedDate = dayjs(dateString).format('ddd MMM DD YYYY');

  const handleDatePickerChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      {cards.map((eachCard) => (
        <Card key={eachCard.id} className="mb-3">
          <h4>{eachCard.name}</h4>
          <hr className="mb-3 mt-3" />

          {eachCard.uploads.map((eachUpload, index) =>
            DisplaySpecificDateUploads(formattedDate, eachUpload, index)
          )}
        </Card>
      ))}
    </div>
  );
};

const Dripping = () => {
  // const { cards } = useContext(CardsContext);

  const { curriculumAndCards } = useContext(CardsContext);

  const cards = curriculumAndCards.filter(
    (eachCard) => eachCard.type === 'bulkImporter'
  );

  const options1 = [
    { value: 'Day(s)', label: 'Day(s)' },
    { value: 'Month(s)', label: 'Month(s)' },
  ];

  const [value, setValue] = useState('EnrollmentDate');

  const [date, setDate] = useState(new Date());

  const handleDatePickerChange = (date) => {
    setDate(date);
  };

  const onChange = (val) => {
    setValue(val);
  };

  const [dripVal, setDripVal] = useState(false);

  const onChangeDrip = (e) => {
    setDripVal(e);
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
        <div
          style={{ minWidth: 245, maxWidth: 335 }}
          className="rounded-md border p-3">
          <h6>Drip type</h6>
          <ul>
            {cards.map((eachCard) => (
              <li key={eachCard.id} className="mt-2">
                {eachCard.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="ml-2 orderFlex">
        <Button size="sm" onClick={onSideBarClose} className="mb-2 mt-2  mr-3">
          <BsThreeDotsVertical className="text-xl mb-2" />
        </Button>
        <Card>
          <div className="flexWrap ">
            <h4>Dripping Schedule</h4>
            <div className="flexWrap">
              <Button className="mr-2 " variant="solid" color="blue-900">
                SAVE
              </Button>
            </div>
          </div>
        </Card>
        <Card className="mb-1 mt-1">
          <Checkbox
            onChange={onChangeDrip}
            className="flex items-center "
            color="black">
            <h6 className="ml-2 ">Enable Dripping</h6>
          </Checkbox>
        </Card>

        {dripVal && (
          <div>
            <Card className="mb-4">
              {/* <div className="flexWrap  mb-2">
          <h4>Dripping Schedule</h4>
          <div className="flexWrap">
            <Button
              className="mr-2  mb-1 mt-1"
              variant="solid"
              color="blue-900">
              SAVE
            </Button>
          </div>
        </div> */}
              <h5 className="mb-5">Drip Type</h5>
              <h6>When Will The Course Content Be Released ?</h6>

              <div className="mt-4">
                <Radio.Group vertical value={value} onChange={onChange}>
                  <Radio value={'EnrollmentDate'}>
                    <div className="ml-2">
                      <h6>Student Enrollment Date</h6>
                      <p>When student enrolls in the course.</p>
                    </div>
                  </Radio>

                  <Radio value={'CourseStartDate'}>
                    <div className="ml-2 mt-2">
                      <h6>Student Course Start Date</h6>
                      <p>
                        When student accesses the course for the first time.
                      </p>
                    </div>
                  </Radio>

                  <Radio value={'SpecificDate'}>
                    <div className="ml-2 mt-2">
                      <div className="flex">
                        <h6>On Specific Date</h6>
                      </div>
                      <p>Select a date when this course will be released.</p>
                    </div>
                  </Radio>
                </Radio.Group>
              </div>

              {value === 'SpecificDate' && (
                <Card className="bg-gray-300">
                  <h6>Begin releasing content on</h6>
                  <div className="flex flex-col gap-5 ml-2 mr-2">
                    <DatePicker
                      inputFormat="DD-MM-YYYY"
                      className="w-40"
                      placeholder="Pick a date"
                      value={date}
                      onChange={handleDatePickerChange}
                      clearable={false}
                    />
                  </div>
                </Card>
              )}
            </Card>

            {value === 'EnrollmentDate' && <EnrollmentDateComp cards={cards} />}
            {value === 'CourseStartDate' && (
              <CourseStartDateComp cards={cards} />
            )}
            {value === 'SpecificDate' && (
              <SpecificDateComp releaseDate={date} cards={cards} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dripping;
