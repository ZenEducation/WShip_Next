import React, { forwardRef, useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {
  Input,
  FormItem,
  FormContainer,
  Card,
  Select,
  Upload,
  Checkbox,
  Tooltip,
  InputGroup,
} from 'components/ui';
import { Field, Form, Formik } from 'formik';
import style from '../../../../styles/Home.module.css';
import { HiOutlineExclamationCircle, HiOutlineTrash } from 'react-icons/hi';
// import { Button } from 'react-scroll';
import { Button } from 'components/ui';
import Addon from '@/components/ui/InputGroup/Addon';
import { BsCameraVideo, BsPencilSquare } from 'react-icons/bs';
import { GrDownload, GrUpgrade } from 'react-icons/gr';
import { AiFillFilePdf } from 'react-icons/ai';
import { RichTextEditor } from 'components/shared';

const DownloadableLesson = forwardRef((props, ref) => {
  const { mode } = props;
  const { editorRef } = ref;

  const [lessonHeading, setLessonHeading] = useState('New Downloadable Lesson');

  const onLessonHeading = (e) => {
    const value = e.target.value;
    if (value === '') {
      setLessonHeading('New Downloadable Lesson');
    } else {
      setLessonHeading(value);
    }
  };

  const [value, setValue] = useState('');

  const handleEditorChange = (content) => {
    console.log(content); // Do something with the updated content
  };

  const modules = {
    toolbar: [
      [{ direction: 'rtl' }],

      [{ color: [] }],

      ['bold'],
      ['italic'],
      ['underline'],
      ['strike'],
      ['blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      [{ align: [] }],

      ['image'],
      ['video'], // Add the image and video buttons
      ['link'],

      // Example with react-mathquill library
      ['code'],

      ['clean'],
    ],
    clipboard: {
      // Allow pasting of images
      matchVisual: false,
    },
  };

  return (
    <>
      <div className="flexWrap padding-cls">
        <h4>{lessonHeading}</h4>
        <div className="flexWrap">
          <div className="flex items-center mb-1 mt-1 ml-2">
            <Checkbox size="xs" color="blue-900" className="m-0" />
            <span className="ml-1 text-blue-900">Draft</span>
            <Tooltip title="Draft">
              <HiOutlineExclamationCircle className=" text-lg cursor-pointer ml-1 mr-3" />
            </Tooltip>
          </div>

          <div className="flexWrap">
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
      </div>
      <Card className="mb-5">
        <Formik>
          {({ touched, errors }) => (
            <Form>
              <FormContainer>
                <FormItem
                  label="Title"
                  labelClass="!justify-start"
                  invalid={errors.title && touched.title}
                  errorMessage={errors.title}>
                  <Input onChange={onLessonHeading} placeholder="Title" />
                </FormItem>
                <FormItem
                  label="Message"
                  labelClass="!justify-start"
                  invalid={errors.message && touched.message}
                  errorMessage={errors.message}>
                  <RichTextEditor
                    placeholder="Type something"
                    ref={editorRef} // Pass the ref to the RichTextEditor component
                    onChange={handleEditorChange} // Specify the change event handler
                    modules={modules}
                  />
                </FormItem>
                <FormItem
                  label="Upload a file"
                  className="mb-0"
                  labelClass="!justify-start">
                  <div>
                    <Upload
                      // uploadSingleFiles={true}
                      notAllowedFileTypes={['dmg', 'smg', 'html']}
                      draggable
                      className="hover:border-yellow-900 border-yellow-600">
                      <div className="mt-5 text-center">
                        <p className="mt-2 font-semibold">
                          <span className=" text-yellow-600 dark:text-white">
                            Drag & drop a file here
                          </span>
                          <br />
                          <span className="text-yellow-600 dark:text-white">
                            or
                          </span>
                        </p>

                        <Button
                          className="mt-3 mb-4 p-3 pl-5 pr-5"
                          variant="solid"
                          color="blue-900">
                          SELECT FILE
                        </Button>
                        <p className="mt-5 p-4  bg-colour-yellow text-yellow-600 mt-2 opacity-20 dark:text-white">
                          You can upload any type of files except: .dmg, .smg,
                          and .html files.
                        </p>
                      </div>
                    </Upload>
                  </div>
                </FormItem>
              </FormContainer>
            </Form>
          )}
        </Formik>
      </Card>
      <Card>
        <h4>Lesson settings</h4>

        <div className="flex  items-center  mt-4">
          <Checkbox className="flex items-center" color="black">
            <span className="ml-2 ">Make this a free preview lesson</span>
          </Checkbox>
        </div>

        <div className="flex items-center  mt-4">
          <Checkbox className="flex items-center" color="black">
            <span className="ml-2 ">Make this a prerequiste</span>
          </Checkbox>
        </div>
        <div className="flex flex-col  mt-4">
          <Checkbox className="flex items-center" color="black">
            <span className="ml-2">Apply to all lessons in this course </span>
          </Checkbox>
        </div>
        <div className="flex flex-col mt-4 mb-5">
          <Checkbox color="black" className="">
            <span className="ml-2">Make this Lesson downloadable</span>
          </Checkbox>
        </div>
        <div className="flex items-center mb-2">
          <h6>Lesson icon & label</h6>

          {/* <Button
            size="xs"
            className="ml-2 "
            variant="solid"
            color="emerald-500">
            start
          </Button> */}
        </div>
        <div>
          <InputGroup className="mb-4 ">
            <Addon className="flex justify items-center">
              <GrDownload className="w-10 " />
            </Addon>
            <Input placeholder="Downloadable" />
          </InputGroup>
        </div>

        <div>
          <Button
            color="rose-600"
            className="mr-2 flex items-center"
            variant="twoTone">
            <HiOutlineTrash />
            <span className="ml-3">
              <span>DELETE LESSON</span>
            </span>
          </Button>
        </div>
      </Card>
      <div className="flexWrap-end mt-3 mb-5 ">
        <Button className="mr-2  mb-1 mt-1 text-blue-900">
          DISCARD CHANGES
        </Button>

        <Button className="mr-2  mb-1 mt-1" variant="solid" color="blue-900">
          SAVE
        </Button>
      </div>
    </>
  );
});

DownloadableLesson.defaultProps = {
  mail: {},
  mode: 'new',
};

export default DownloadableLesson;
