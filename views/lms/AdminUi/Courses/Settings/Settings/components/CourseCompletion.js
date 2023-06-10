import React from 'react';

import { Input, Card, Checkbox } from 'components/ui';

import { Button } from 'components/ui';

// Settings

const CourseCompletion = () => {
  return (
    <>
      <Card className="mb-5">
        <div className="flexWrap  mb-2">
          <h4>Course progress & completion</h4>
          <div className="flexWrap">
            <Button
              className="mr-2  mb-1 mt-1"
              variant="solid"
              color="blue-900">
              SAVE
            </Button>
          </div>
        </div>
        <h6>Course completion</h6>
        <div className="flex  items-center  mt-4">
          <Checkbox className="flex items-center" color="black">
            <h6 className="ml-4 ">
              Generate Certificate after Course Completion
            </h6>
          </Checkbox>
        </div>
        <h6 className="mt-4 mb-3">Social sharing</h6>
        <p>
          Social sharing allows your students to share a link to the course
          landing page with their network. These settings can be changed for all
          courses at once in your{' '}
          <button className="text-blue-700 underline">
            learning content settings.
          </button>
        </p>
        <p className="mt-3">
          Your course link will be added to the end of the social sharing text.
        </p>

        <div className="flex  items-center  mt-4">
          <Checkbox className="flex items-center" color="black">
            <h6 className="ml-2 ">Social sharing at chapter completion</h6>
          </Checkbox>
          <Button variant="solid" size="xs">
            Default
          </Button>
        </div>
        <p className="ml-5 mt-2">
          Allow your students to share the course with their network at the
          completion of each chapter.
        </p>

        <div className="flex  items-center  mt-4">
          <Checkbox className="flex items-center" color="black">
            <h6 className="ml-2 ">Social sharing at course completion</h6>
          </Checkbox>
          <Button variant="solid" size="xs">
            Default
          </Button>
        </div>
        <p className="ml-5 mt-2">
          Allow your students to share the course with their network when they
          reach 100% completion of your course.
        </p>
        <div className="flex  items-center  mt-4 mb-2">
          <h6 className="">Social sharing at course completion</h6>

          <Button variant="solid" size="xs" className="ml-3">
            Default
          </Button>
        </div>
        <Input textArea placeholder="Check out this great course!" />
        <p>
          Used as default content for Twitter. Can be copied and shared on
          Facebook and Linkedin.
        </p>
      </Card>
    </>
  );
};

export default CourseCompletion;
