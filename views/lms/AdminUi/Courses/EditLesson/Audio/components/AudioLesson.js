import React, { forwardRef, useContext, useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { CardsContext } from '../../../../../CardsComponent/CardsContext';

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
  toast,
  Notification,
} from 'components/AfterAuth/ui';
import { Field, Form, Formik } from 'formik';

import {
  HiOutlineExclamationCircle,
  HiOutlineTrash,
  HiSpeakerWave,
} from 'react-icons/hi';
// import { Button } from 'react-scroll';
import { Button } from 'components/AfterAuth/ui';
import Addon from '@/components/AfterAuth/ui/InputGroup/Addon';
import { BsCameraVideo, BsPencilSquare } from 'react-icons/bs';
// import { HiSpeakerWave } from 'react-icons/hi';
import { GrUpgrade } from 'react-icons/gr';
import { AiFillFilePdf } from 'react-icons/ai';
import { RichTextEditor } from 'components/AfterAuth/shared';
import { FcSpeaker } from 'react-icons/fc';

const AudioLesson = forwardRef((props, ref) => {
  const { mode } = props;
  const { editorRef } = ref;

  const { curriculumAndCards, setCurriculumAndCards } =
    useContext(CardsContext);
  // console.log('curriculumAndCards', curriculumAndCards);

  const { selectedLesson, setSelectedLesson } = useContext(CardsContext);

  let chapterLesson;
  let targetLessonObj;
  if (selectedLesson.isShowLesson) {
    chapterLesson = curriculumAndCards.find((eachChapter) =>
      eachChapter.lessons.some((eachLesson) => {
        return eachLesson.id === selectedLesson.lessonId;
      })
    );

    let targetLesson = chapterLesson.lessons.filter(
      (eachLesson) => eachLesson.id === selectedLesson.lessonId
    );

    targetLessonObj = targetLesson[0];
  }

  // console.log('targetLessonObj', targetLessonObj);

  const [lessonHeading, setLessonHeading] = useState('New Audio Lesson');

  const onLessonHeading = (e) => {
    const value = e.target.value;
    // if (value === '') {
    //   setLessonHeading('New Audio Lesson');
    // } else {
    //   setLessonHeading(value);
    // }

    if (value === '') {
      const updatedLessonHeading = {
        ...targetLessonObj,
        lessonHeading: 'New Audio Lesson',
      };
      targetLessonObj = updatedLessonHeading;
      // console.log('targetLessonObj input Val 2', targetLessonObj);
      const updatedChaptersHeading = curriculumAndCards.map((eachChapter) => {
        if (eachChapter.id === chapterLesson.id) {
          const updatedLessons = eachChapter.lessons.map((eachLesson) => {
            if (eachLesson.id === targetLessonObj.id) {
              return { ...eachLesson, lessonHeading: 'New Audio Lesson' };
            }
            return eachLesson;
          });
          return { ...eachChapter, lessons: updatedLessons };
        }
        return eachChapter;
      });

      setCurriculumAndCards(updatedChaptersHeading);
    } else {
      const updatedLessonHeading = { ...targetLessonObj, lessonHeading: value };
      targetLessonObj = updatedLessonHeading;
      const updatedChaptersHeading = curriculumAndCards.map((eachChapter) => {
        if (eachChapter.id === chapterLesson.id) {
          const updatedLessons = eachChapter.lessons.map((eachLesson) => {
            if (eachLesson.id === targetLessonObj.id) {
              return { ...eachLesson, lessonHeading: value };
            }
            return eachLesson;
          });
          return { ...eachChapter, lessons: updatedLessons };
        }
        return eachChapter;
      });

      setCurriculumAndCards(updatedChaptersHeading);
    }
  };

  const [value, setValue] = useState('');

  const handleEditorChange = (content) => {
    // console.log(content); // Do something with the updated content

    const div = document.createElement('div');
    div.innerHTML = content;
    const value = div.textContent || div.innerText;
    // console.log('Text', value);
    const updatedLessonHeading = { ...targetLessonObj, description: content };
    targetLessonObj = updatedLessonHeading;
    const updatedChaptersHeading = curriculumAndCards.map((eachChapter) => {
      if (eachChapter.id === chapterLesson.id) {
        const updatedLessons = eachChapter.lessons.map((eachLesson) => {
          if (eachLesson.id === targetLessonObj.id) {
            return { ...eachLesson, description: content };
          }
          return eachLesson;
        });
        return { ...eachChapter, lessons: updatedLessons };
      }
      return eachChapter;
    });

    setCurriculumAndCards(updatedChaptersHeading);
  };

  const onUploadChange = (id, updatedFiles) => {
    // console.log('updatedFiles', updatedFiles);

    const updatedLessonHeading = {
      ...targetLessonObj,
      uploadedAudio: updatedFiles,
    };
    targetLessonObj = updatedLessonHeading;
    const updatedChaptersHeading = curriculumAndCards.map((eachChapter) => {
      if (eachChapter.id === chapterLesson.id) {
        const updatedLessons = eachChapter.lessons.map((eachLesson) => {
          if (eachLesson.id === targetLessonObj.id) {
            return { ...eachLesson, uploadedAudio: updatedFiles };
          }
          return eachLesson;
        });
        return { ...eachChapter, lessons: updatedLessons };
      }
      return eachChapter;
    });

    setCurriculumAndCards(updatedChaptersHeading);
  };

  const triggerMessage = (msg) => {
    toast.push(
      <Notification className="bg-green-200" type="success" duration={3000}>
        <h6>{msg || 'Successfully saved the chapter!'}</h6>
      </Notification>,
      {
        placement: 'top-center',
      }
    );
  };

  const onLessonSave = () => {
    triggerMessage();
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

  if (targetLessonObj === undefined) {
    return (
      <div className="flex justify-center items-center mt-5">
        <h1 className="mt-5">Loading</h1>
      </div>
    );
  }

  return (
    <>
      <div className="flexWrap ">
        <h4>{targetLessonObj.lessonHeading}</h4>
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
              onClick={onLessonSave}
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
                  label="Description"
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
                  label="Upload audio"
                  className="mb-0"
                  labelClass="!justify-start">
                  <div>
                    <Upload
                      uploadSingleFiles={true}
                      fileList={targetLessonObj.uploadedAudio}
                      onUploadChange={(files) =>
                        onUploadChange(targetLessonObj.id, files)
                      }
                      allowedFileTypes={[
                        'aac',
                        'mp2',
                        'mp3',
                        'ogg',
                        'wav',
                        'm4a',
                        'mp4',
                      ]}
                      draggable
                      className="hover:border-yellow-900 border-yellow-600">
                      <div className="mt-5 text-center">
                        <p className="mt-2 font-semibold">
                          <span className=" text-yellow-600 dark:text-white">
                            Drag & drop audio file here
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
                          You can upload files with the extensions: .aac, .mp2,
                          .mp3, .mpga, .ogg, .wav, and .mp4 files.
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
              <FcSpeaker className="w-10 " />
            </Addon>
            <Input placeholder="Audio" />
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

AudioLesson.defaultProps = {
  mail: {},
  mode: 'new',
};

export default AudioLesson;
