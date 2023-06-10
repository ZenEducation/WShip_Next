import React, { useState } from 'react';

import { Input, Card, Checkbox, Radio } from 'components/ui';

import { Button } from 'components/ui';

const Publish = () => {
  const [value, setValue] = useState('Draft');

  const onChange = (val) => {
    setValue(val);
  };

  return (
    <>
      <div className="flexWrap  mb-2">
        <h4>Publish</h4>
        <div className="flexWrap">
          <Button className="mr-2  mb-1 mt-1" variant="solid" color="blue-900">
            SAVE
          </Button>
        </div>
      </div>
      <Card>
        <h5 className="mb-5">Course publish status</h5>

        <div className="mt-4">
          <Radio.Group vertical value={value} onChange={onChange}>
            <Radio value={'Draft'}>
              <div className="ml-2">
                <h6>Draft</h6>
                <p>
                  Students cannot purchase or enroll in this course. For
                  students that are already enrolled, this course will not
                  appear on their Students Dashboard.
                </p>
              </div>
            </Radio>

            <Radio value={'Pre-Order'}>
              <div className="ml-2 mt-2">
                <h6>Pre-Order</h6>
                <p>
                  Students can pre-Order and enroll in this course, but cannot
                  access its content. For students enrolled in this course, a
                  course card will appear in their Students Dashboard with a
                  "Comming soon" label.
                </p>
              </div>
            </Radio>

            <Radio value={'Published'}>
              <div className="ml-2 mt-2">
                <div className="flex">
                  <h6>Published</h6>
                </div>
                <p>
                  Students can purchase, enroll in , and access the content of
                  this course. For Students that are enrolled, this course will
                  appear on their Student Dashboard.
                </p>
              </div>
            </Radio>
          </Radio.Group>
        </div>
      </Card>
    </>
  );
};

export default Publish;
