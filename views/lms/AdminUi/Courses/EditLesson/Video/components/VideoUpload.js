import React, { forwardRef, useState } from 'react';
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
import { Form, Formik } from 'formik';
import style from '../../../../../../../styles/Home.module.css';
import { HiOutlineExclamationCircle, HiOutlineTrash } from 'react-icons/hi';
// import { Button } from 'react-scroll';
import { Button } from 'components/ui';
import Addon from '@/components/ui/InputGroup/Addon';
import { BsCameraVideo } from 'react-icons/bs';
import { GrUpgrade } from 'react-icons/gr';

const VideoUpload = forwardRef((props, ref) => {
  const { mode } = props;

  const [lessonHeading, setLessonHeading] = useState('New Video Lesson');

  const onLessonHeading = (e) => {
    const value = e.target.value;
    if (value === '') {
      setLessonHeading('New Video Lesson');
    } else {
      setLessonHeading(value);
    }
  };

  const videosOptions = [
    {
      value: 'Image1',
      label: (
        <img
          className="w-10"
          src="https://www.thewowstyle.com/wp-content/uploads/2015/07/autunm-desktop-natural-hd-wallpapers.jpg"
        />
      ),
      color: '#00B8D9',
    },
    {
      value: 'Image2',
      label: <img className="w-10" src="https://pixy.org/src/21/219269.jpg" />,
      color: '#00B8D9',
    },
    {
      value: 'Image3',
      label: (
        <img
          className="w-10"
          src="https://pbs.twimg.com/media/FVdkr20XEAE_cGZ.jpg"
        />
      ),
      color: '#00B8D9',
    },
  ];

  return (
    <>
      <div className={`${style['flexWrap']} ${style['padding']}`}>
        <h4>{lessonHeading}</h4>
        <div className={`${style['flexWrap']}`}>
          <div className="flex items-center mb-1 mt-1 ml-2">
            <Checkbox size="xs" color="blue-900" className="m-0" />
            <span className="ml-1 text-blue-900">Draft</span>
            <Tooltip title="Draft">
              <HiOutlineExclamationCircle className=" text-lg cursor-pointer ml-1 mr-3" />
            </Tooltip>
          </div>

          <div className={`${style['flexWrap']}`}>
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
                  className={mode === 'reply' ? '!hidden' : ''}
                  label="Title"
                  labelClass="!justify-start"
                  invalid={errors.title && touched.title}
                  errorMessage={errors.title}>
                  <Input onChange={onLessonHeading} placeholder="Title" />
                </FormItem>
                <FormItem
                  className={mode === 'reply' ? '!hidden' : ''}
                  label="Description"
                  labelClass="!justify-start"
                  invalid={errors.title && touched.title}
                  errorMessage={errors.title}>
                  <Input placeholder="Description" textArea />
                </FormItem>
                <FormItem
                  className={mode === 'reply' ? '!hidden' : ''}
                  label="Videos from your library"
                  labelClass="!justify-start">
                  <Select
                    placeholder="Select a video file"
                    options={videosOptions}></Select>
                </FormItem>

                <FormItem
                  label="Upload a video file"
                  className="mb-0"
                  labelClass="!justify-start">
                  <div>
                    {/*  <Tooltip title="Download">
                            <Button
                              className="mr-1 rtl:ml-1"
                              variant="plain"
                              size="xs"
                              icon={<HiOutlineDownload />}
                            />
                          </Tooltip>
                          <Tooltip title="Delete">
                            <Button
                              variant="plain"
                              size="xs"
                              icon={<HiOutlineTrash />}
                            />
                          </Tooltip> */}

                    <Upload
                      uploadSingleFiles={true}
                      allowedFileTypes={[
                        '3g2',
                        '3gp',
                        '3gpp',
                        '3gpp2',
                        'asf',
                        'asx',
                        'avi',
                        'dv',
                        'f4p',
                        'flv',
                        'mjpeg',
                        'mjpg',
                        'mov',
                        'movie',
                        'mp2',
                        'mp3g',
                        'mp4',
                        'mpe',
                        'mpeg',
                        'mpg',
                        'mpg4',
                        'ogg',
                        'ogv',
                        'ogx',
                        'qt',
                        'rm',
                        'viv',
                        'vivo',
                        'webm',
                        'wm',
                        'wmv',
                        'wmx',
                        'm4v',
                      ]}
                      draggable
                      className="hover:border-yellow-900 border-yellow-600">
                      <div className="mt-5 text-center">
                        <p className="mt-2 font-semibold">
                          <span className=" text-yellow-600 dark:text-white">
                            Drag & drop video file here
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
                          You can upload files with the extensions: 3g2, 3gp,
                          3gpp, 3gpp2, asf, asx, avi, dv, f4p flv, mjpeg, mjpg,
                          mov, movie, mp2, mp3g, mp4, mpe, mpeg, mpg, mpg4,
                          ogg,ogv, ogx, qt, rm, viv, vivo, webm, wm, wmv, wmx,
                          m4v
                        </p>
                      </div>
                    </Upload>
                  </div>
                </FormItem>

                <p className="mb-2 mt-1">
                  Max size 268. We suggest compressing your video using{' '}
                  <button className="text-blue-700 underline">HandBrake</button>
                </p>
                <p>
                  It's all about the details. Pick your thumbnail image, add
                  closed captions, update settings, and track your video
                  performance analytics in the video library.
                </p>
                <button className="text-blue-700 underline">
                  Manage video settings. Learn more about the video library.
                </button>
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
              <BsCameraVideo className="w-10 " />
            </Addon>
            <Input placeholder="Video" />
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
      <div className={`${style['flexWrap-end']} mt-3 mb-5`}>
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

VideoUpload.defaultProps = {
  mail: {},
  mode: 'new',
};

export default VideoUpload;
