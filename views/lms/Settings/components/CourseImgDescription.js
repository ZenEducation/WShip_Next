import React from 'react';

import { Input, Upload, Card, Checkbox } from 'components/ui';

import { Button } from 'components/ui';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiInfo } from 'react-icons/fi';
import { HiOutlineTrash } from 'react-icons/hi';

// Settings

const CourseImgDescription = () => {
  return (
    <>
      <Card className="mb-5">
        <div className="flexWrap  mb-2">
          <h4>Course image & description</h4>
          <div className="flexWrap">
            <Button
              className="mr-2  mb-1 mt-1"
              variant="solid"
              color="blue-900">
              SAVE
            </Button>
          </div>
        </div>
        <div className="flexWrap ">
          <div>
            <div className="flex  items-center  mt-4 mb-1">
              <h6 className="">Course Image</h6>
              <FiInfo className="text-xl ml-2 step-clickable" />
            </div>
            <p>Suggested Dimensions: 760x420px</p>
          </div>

          <Upload
            uploadSingleFiles={true}
            draggable
            className="hover:border-yellow-900 bg-gray-600 border-gray-600 w-80">
            <div className="text-center ">
              <div className="avatar-icon mt-3">
                <img
                  src="https://openclipart.org/image/2400px/svg_to_png/278691/teaching.png"
                  className="avatar-inner-lg "
                />
              </div>

              <p className="mt-2 p-4  picker-view bg-gray-800 text-white mt-2 opacity-20 dark:text-white">
                You can upload files
                {/* <HiOutlineTrash /> */}
              </p>
            </div>
          </Upload>
        </div>

        <div className="flex  items-center  mt-4 mb-1">
          <h6 className="">Course description</h6>
          <FiInfo className="text-xl ml-2 step-clickable" />
        </div>
        <p>Include a brief description of your course. Max 250 characters.</p>
        <Input className="mt-3" textArea placeholder="Course description" />
      </Card>
    </>
  );
};

export default CourseImgDescription;
