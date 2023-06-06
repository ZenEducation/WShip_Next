import React, { useContext, useState } from 'react';

import { CardsContext } from '../../CardsComponent/CardsContext';

import { Input, Card, Checkbox, Radio } from 'components/ui';

import { Button } from 'components/ui';
import { AiOutlineGlobal, AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

// Curriculum

const Curriculum = () => {
  const { curriculumValue, setCurriculumValue } = useContext(CardsContext);
  console.log('curriculumValuecurriculumValue', curriculumValue);
  //   const [curriculumValue, setCurriculumValue] = useState('Untitled chapter');
  // lessonHeading
  const onLessonHeading = (e) => {
    const value = e.target.value;
    if (value === '') {
      setCurriculumValue('Untitled chapter');
    } else {
      setCurriculumValue(value);
    }
  };

  const cardsDisplaySideBar = () => {
    // console.log('eachCardCart', cardsList);
    return (
      <Card className="mb-2">
        <h5 className="mb-2">{curriculumValue}</h5>
        <div className="flexWrap">
          <Button
            size="xs"
            className="mr-2 flexWrap mb-1 mt-1"
            variant="solid"
            color="blue-900">
            <AiOutlinePlus className="text-xl mr-1" />
            ADD LESSON
          </Button>
          <Button size="xs" className="mr-2  mb-1 mt-1 text-blue-900">
            COPY LESSON FROM
          </Button>
        </div>
      </Card>
    );
  };

  return (
    <div className="flex ">
      <div className="align-stretch" style={{ minWidth: 335, maxWidth: 335 }}>
        <div className="sidebar">
          {cardsDisplaySideBar()}
          <h6 className="flex items-center">
            <AiOutlineGlobal className="text-xl mr-1" /> Pro Tip
          </h6>
          <p>
            You can customize the course completion experience with a
            certificate or a custom completion page!
          </p>
        </div>

        <Card className="flex fixed-card mt-3">
          <Button
            size="sm"
            className="mr-2 pr-5 pl-5 w-60 "
            variant="solid"
            //block="true"
            color="blue-900">
            ADD LESSON
          </Button>

          <Button size="sm" className=" " variant="solid" color="blue-900">
            <BsThreeDotsVertical />
          </Button>
        </Card>
      </div>
      <div className="ml-2 orderFlex">
        <div className="flexWrap  pt-1 pb-2  ">
          <h4>New Chapter: {curriculumValue}</h4>
          <div className="">
            <Button className="mr-2  mb-1 mt-1 text-blue-900">
              DISCARD CHANGES
            </Button>

            <Button
              className="mr-2  mb-1 mt-1"
              variant="solid"
              color="blue-900">
              SAVE
            </Button>
          </div>
        </div>
        <Card>
          <div className="mb-s">
            <h6>Course name</h6>
            <Input
              onChange={onLessonHeading}
              className=""
              placeholder="My Chapter"
            />
          </div>

          <div className="mt-4"></div>
        </Card>
      </div>
    </div>
  );
};

export default Curriculum;
