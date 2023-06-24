import React, { forwardRef, useContext, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { CardsContext } from '../../../../../CardsComponent/CardsContext';

import Notification from 'components/ui/Notification/';
import toast from 'components/ui/toast';

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
  Dropdown,
} from 'components/ui';
import { Field, Form, Formik } from 'formik';
import { HiOutlineExclamationCircle, HiOutlineTrash } from 'react-icons/hi';
// import { Button } from 'react-scroll';
import { Button } from 'components/ui';
import Addon from '@/components/ui/InputGroup/Addon';
import {
  BsCameraVideo,
  BsPencilSquare,
  BsThreeDotsVertical,
} from 'react-icons/bs';
import { GrUpgrade } from 'react-icons/gr';
import { AiFillFilePdf } from 'react-icons/ai';
// import { RichTextEditor } from '@/components/shared';
import { RichTextEditor } from 'components/shared';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

// QuizLesson

const QuizLesson = forwardRef((props, ref) => {
  const { mode } = props;
  const { editorRef } = ref;

  const { curriculumAndCards, setCurriculumAndCards } =
    useContext(CardsContext);

  // console.log('curriculumAndCards', curriculumAndCards);

  const [isUploadableShow, setIsUploadableShow] = useState(false);

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

  const [quizList, setQuizList] = useState([
    {
      id: uuidv4(),
      question: 'What is your question?',
      questionType: 'one',
      choices: [
        { id: uuidv4(), choice: 'Yes', check: false },
        { id: uuidv4(), choice: 'No', check: false },
      ],
      explanation: '',
      type: 'quiz',
    },
  ]);

  const onLessonHeading = (e) => {
    const value = e.target.value;
    if (value === '') {
      const updatedLessonHeading = {
        ...targetLessonObj,
        lessonHeading: 'New Quiz Lesson',
      };
      targetLessonObj = updatedLessonHeading;
      // console.log('targetLessonObj input Val 2', targetLessonObj);
      const updatedChaptersHeading = curriculumAndCards.map((eachChapter) => {
        if (eachChapter.id === chapterLesson.id) {
          const updatedLessons = eachChapter.lessons.map((eachLesson) => {
            if (eachLesson.id === targetLessonObj.id) {
              return { ...eachLesson, lessonHeading: 'New Quiz Lesson' };
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

  const QuestionType = [
    { value: 'one', label: 'One correct answer' },
    { value: 'oneOrMore', label: 'One or more correct answers' },
  ];

  const eachQuizDisplay = (eachQuiz, index) => {
    const { accorSelected, setAccorSelected } = useContext(CardsContext);
    const accorToggle = (i) => {
      if (accorSelected === i) {
        return setAccorSelected(null);
      }
      setAccorSelected(i);
    };

    const DeleteButtonFunc = () => {
      const Toggle = (
        <Button size="sm">
          <BsThreeDotsVertical className="text-xl" />
        </Button>
      );

      const DeleteQuestion = () => {
        const updatedCurriculum = curriculumAndCards.map((item) => {
          if (item.id === chapterLesson.id) {
            const updatedLessonContent = item.lessons.map((lesson) => {
              if (lesson.id === selectedLesson.lessonId) {
                const updatedContent = lesson.lessonContent.filter(
                  (card) => card.id !== eachQuiz.id
                );

                return {
                  ...lesson,
                  lessonContent: updatedContent,
                };
              }
              return lesson;
            });
            return {
              ...item,
              lessons: updatedLessonContent,
            };
          }
          return item;
        });

        setCurriculumAndCards(updatedCurriculum);
      };

      return (
        <Dropdown
          placement="bottom-center"
          onClick={(event) => {
            event.stopPropagation(); // Prevent event propagation
            // DeleteQuestion();
          }}
          // variant="divider"
          renderTitle={Toggle}>
          <Dropdown.Item
            onClick={
              () => DeleteQuestion()
              // setQuizList(quizList.filter((card) => card.id !== eachQuiz.id))
            }
            eventKey="a">
            DELETE
          </Dropdown.Item>
        </Dropdown>
      );
    };

    const onDeleteChoice = (DelChoice) => {
      // console.log('onAddChoice', eachQuiz);
      // eachQuiz

      const updatedCurriculum = curriculumAndCards.map((item) => {
        if (item.id === chapterLesson.id) {
          const updatedLessonContent = item.lessons.map((lesson) => {
            if (lesson.id === selectedLesson.lessonId) {
              const updatedContent = lesson.lessonContent.map((content) => {
                if (content.id === eachQuiz.id) {
                  const deletedChoices = content.choices.filter(
                    (eachChoice) => eachChoice.id !== DelChoice.id
                  );

                  return { ...content, choices: deletedChoices };
                }

                return content;
              });

              return {
                ...lesson,
                lessonContent: updatedContent,
              };
            }
            return lesson;
          });
          return {
            ...item,
            lessons: updatedLessonContent,
          };
        }
        return item;
      });

      setCurriculumAndCards(updatedCurriculum);
    };

    const eachChoiceListDisplay = (eachChoice, index) => {
      const handleChoiceChange = (content) => {
        const div = document.createElement('div');
        div.innerHTML = content;
        const text = div.textContent || div.innerText;

        const updatedCurriculum = curriculumAndCards.map((item) => {
          if (item.id === chapterLesson.id) {
            const updatedLessonContent = item.lessons.map((lesson) => {
              if (lesson.id === selectedLesson.lessonId) {
                const updatedContent = lesson.lessonContent.map((content) => {
                  if (content.id === eachQuiz.id) {
                    const updatedChoice = content.choices.map((eChoice) => {
                      if (eChoice.id === eachChoice.id) {
                        eChoice.choice = text;
                        return eChoice;
                      }
                      return eChoice;
                    });

                    return { ...content, choices: updatedChoice };
                  }
                  return content;
                });
                return {
                  ...lesson,
                  lessonContent: updatedContent,
                };
              }
              return lesson;
            });
            return {
              ...item,
              lessons: updatedLessonContent,
            };
          }
          return item;
        });
      };

      const onCheckChoice = (event) => {
        const value = event.target.checked;

        const updatedCurriculum = curriculumAndCards.map((item) => {
          if (item.id === chapterLesson.id) {
            const updatedLessonContent = item.lessons.map((lesson) => {
              if (lesson.id === selectedLesson.lessonId) {
                const updatedContent = lesson.lessonContent.map((content) => {
                  if (content.id === eachQuiz.id) {
                    const updatedChoice = content.choices.map((eChoice) => {
                      if (content.questionType !== 'one') {
                        if (eChoice.id === eachChoice.id) {
                          eChoice.check = value;
                          return eChoice;
                        }
                        return eChoice;
                      } // } else {
                      if (eChoice.id === eachChoice.id) {
                        eChoice.check = value;
                        return eChoice;
                      }
                      eChoice.check = false;
                      return eChoice;
                      // }
                      // if (eChoice.id === eachChoice.id) {
                      //   eChoice.check = value;
                      //   return eChoice;
                      // }
                      // return eChoice;
                    });

                    return { ...content, choices: updatedChoice };
                  }
                  return content;
                });
                return {
                  ...lesson,
                  lessonContent: updatedContent,
                };
              }
              return lesson;
            });
            return {
              ...item,
              lessons: updatedLessonContent,
            };
          }
          return item;
        });
        setCurriculumAndCards(updatedCurriculum);
      };

      return (
        <Card key={eachChoice.id} className=" mb-3 mt-3 ">
          <div className="flexWrap ">
            <b>choice {index + 1}</b>
            <button onClick={() => onDeleteChoice(eachChoice)}>
              <HiOutlineTrash className="text-lg" />
            </button>
          </div>
          {/* {console.log('eachChoice.choice', eachChoice, eachChoice.choice)} */}
          <RichTextEditor
            value={eachChoice.choice}
            className=" mt-2 "
            placeholder="Type something"
            ref={editorRef} // Pass the ref to the RichTextEditor component
            onChange={handleChoiceChange} // Specify the change event handler
            modules={modules}
          />
          <div className="flex  items-center  mt-4">
            <Checkbox
              onClick={onCheckChoice}
              checked={eachChoice.check}
              className="flex items-center "
              color="black">
              <span className="ml-2 ">This is a correct answer</span>
            </Checkbox>
          </div>
        </Card>
      );
    };

    const ChoicesListDisplay = (choicesList) => {
      return choicesList.map((eachChoice, index) =>
        eachChoiceListDisplay(eachChoice, index)
      );
    };

    const handleExplanationChange = (content) => {
      const div = document.createElement('div');
      div.innerHTML = content;
      const text = div.textContent || div.innerText;

      const updatedCurriculum = curriculumAndCards.map((item) => {
        if (item.id === chapterLesson.id) {
          const updatedLessonContent = item.lessons.map((lesson) => {
            if (lesson.id === selectedLesson.lessonId) {
              const updatedContent = lesson.lessonContent.map((content) => {
                if (content.id === eachQuiz.id) {
                  content.explanation = text;
                  return content;
                }
                return content;
              });
              return {
                ...lesson,
                lessonContent: updatedContent,
              };
            }
            return lesson;
          });
          return {
            ...item,
            lessons: updatedLessonContent,
          };
        }
        return item;
      });
      setCurriculumAndCards(updatedCurriculum);
    };

    const handleQuestionChange = (content) => {
      // console.log(content); // Do something with the updated content
      const div = document.createElement('div');
      div.innerHTML = content;
      const text = div.textContent || div.innerText;

      // console.log(text); // Extracted text from the <p> element

      const updatedCurriculum = curriculumAndCards.map((item) => {
        if (item.id === chapterLesson.id) {
          const updatedLessonContent = item.lessons.map((lesson) => {
            if (lesson.id === selectedLesson.lessonId) {
              const updatedContent = lesson.lessonContent.map((content) => {
                if (content.id === eachQuiz.id) {
                  content.question = text;
                  return content;
                }
                return content;
              });
              return {
                ...lesson,
                lessonContent: updatedContent,
              };
            }
            return lesson;
          });
          return {
            ...item,
            lessons: updatedLessonContent,
          };
        }
        return item;
      });
      setCurriculumAndCards(updatedCurriculum);
    };

    const onAddChoice = () => {
      // console.log('onAddChoice', eachQuiz);
      // eachQuiz

      const updatedCurriculum = curriculumAndCards.map((item) => {
        if (item.id === chapterLesson.id) {
          const updatedLessonContent = item.lessons.map((lesson) => {
            if (lesson.id === selectedLesson.lessonId) {
              // const updatedContent = [...lesson.lessonContent, newQuestion];

              const updatedContent = lesson.lessonContent.map((content) => {
                if (content.id === eachQuiz.id) {
                  const newChoice = [
                    ...content.choices,
                    { id: uuidv4(), choice: '', check: false },
                  ];
                  return { ...content, choices: newChoice };
                }
                return content;
              });

              return {
                ...lesson,
                lessonContent: updatedContent,
              };
            }
            return lesson;
          });
          return {
            ...item,
            lessons: updatedLessonContent,
          };
        }
        return item;
      });

      setCurriculumAndCards(updatedCurriculum);

      // console.log('UpdatedChoiceQuiz UpdatedChoiceQuiz', UpdatedChoiceQuiz);
    };

    const handleTypeChange = (e) => {
      const updatedCurriculum = curriculumAndCards.map((item) => {
        if (item.id === chapterLesson.id) {
          const updatedLessonContent = item.lessons.map((lesson) => {
            if (lesson.id === selectedLesson.lessonId) {
              // const updatedContent = [...lesson.lessonContent, newQuestion];

              const updatedContent = lesson.lessonContent.map((content) => {
                // console.log('eachQuiz', eachQuiz);
                if (content.id === eachQuiz.id) {
                  content.questionType = e.value;
                  return content;
                }
                // console.log(...content, newQuestion);

                return content;
              });

              return {
                ...lesson,
                lessonContent: updatedContent,
              };
            }
            return lesson;
          });
          return {
            ...item,
            lessons: updatedLessonContent,
          };
        }
        return item;
      });

      setCurriculumAndCards(updatedCurriculum);
    };

    const onDuplicateQuestion = () => {
      // console.log('eachQuiz.id', eachQuiz.id);
      const newQuestion = {
        id: uuidv4(),
        question: eachQuiz.question,
        questionType: eachQuiz.questionType,
        choices: eachQuiz.choices,
        explanation: eachQuiz.explanation,
        type: eachQuiz.type,
      };

      const updatedCurriculum = curriculumAndCards.map((item) => {
        if (item.id === chapterLesson.id) {
          const updatedLessonContent = item.lessons.map((lesson) => {
            // console.log('lesson', lesson);
            if (lesson.id === selectedLesson.lessonId) {
              // console.log('lesson', lesson);
              const updatedContent = [...lesson.lessonContent, newQuestion];
              // console.log('updatedContent', updatedContent);

              return {
                ...lesson,
                lessonContent: updatedContent,
              };
            }
            return lesson;
          });
          return {
            ...item,
            lessons: updatedLessonContent,
          };
        }
        return item;
      });
      // console.log(updatedCurriculum);
      setCurriculumAndCards(updatedCurriculum);
    };

    // console.log('eachQuiz', eachQuiz.question);

    return (
      <Card key={eachQuiz.id} className="mb-3">
        <div
          onClick={() => accorToggle(index)}
          className="cursor-pointer accor-title title flexWrap ">
          <h4>
            Question #{index + 1}: {eachQuiz.question}
          </h4>
          <div className="flexWrap">
            <div className="flexWrap">
              <Button
                onClick={(event) => {
                  event.stopPropagation(); // Prevent event propagation
                  onDuplicateQuestion();
                }}
                size="sm"
                className="text-blue-900">
                DUPLICATE
              </Button>

              {DeleteButtonFunc()}
            </div>
            <Button size="sm" className="text-blue-900">
              {accorSelected === index ? (
                <MdExpandLess className="text-xl" />
              ) : (
                <MdExpandMore className="text-xl" />
              )}
            </Button>
          </div>
        </div>
        <div
          className={
            accorSelected === index ? 'accor-content show' : 'accor-content'
          }>
          <h6 className="mb-1 mt-1 mt-3">Question type</h6>
          <Select
            //   isClearable
            // value={currentName}
            onChange={handleTypeChange}
            placeholder="Type something..."
            // onInputChange={handleInputChange}
            // componentAs={CreatableSelect}
            className="orderFlex question-type"
            options={QuestionType}></Select>
          <br />
          <b className=" mt-1">Question</b>
          <RichTextEditor
            /////  value={eachQuiz.question}
            className="mt-1"
            placeholder="Type something"
            ref={editorRef} // Pass the ref to the RichTextEditor component
            onChange={handleQuestionChange} // Specify the change event handler
            modules={modules}
          />
          {ChoicesListDisplay(eachQuiz.choices)}
          <Button
            size="sm"
            onClick={onAddChoice}
            variant="solid"
            className="mr-2  mb-3 mt-1"
            color="blue-900">
            ADD CHOICE
          </Button>
          <br />
          <b>Explanation</b>
          <RichTextEditor
            // value={eachQuiz.explanation}
            className="mt-1"
            placeholder="Type something"
            ref={editorRef} // Pass the ref to the RichTextEditor component
            onChange={handleExplanationChange}
            //  onChange={handleEditorChange} // Specify the change event handler
            modules={modules}
          />
        </div>
      </Card>
    );
  };

  const QuizQuestionsDisplay = () => {
    return targetLessonObj.lessonContent.map((eachQuiz, index) =>
      eachQuizDisplay(eachQuiz, index)
    );
  };

  const onAddQuestion = () => {
    const newQuestion = {
      id: uuidv4(),
      question: 'What is your new question?',
      questionType: 'one',
      choices: [
        { id: uuidv4(), choice: '', check: false },
        { id: uuidv4(), choice: '', check: false },
      ],
      explanation: '',
      type: 'quiz',
    };

    const updatedCurriculum = curriculumAndCards.map((item) => {
      if (item.id === chapterLesson.id) {
        const updatedLessonContent = item.lessons.map((lesson) => {
          if (lesson.id === selectedLesson.lessonId) {
            const updatedContent = [...lesson.lessonContent, newQuestion];

            return {
              ...lesson,
              lessonContent: updatedContent,
            };
          }
          return lesson;
        });
        return {
          ...item,
          lessons: updatedLessonContent,
        };
      }
      return item;
    });

    setCurriculumAndCards(updatedCurriculum);
    setIsUploadableShow(false);
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

  if (targetLessonObj === undefined) {
    return (
      <div className="flex justify-center items-center mt-5">
        <h1 className="mt-5">Loading</h1>
      </div>
    );
  }

  const onAddImport = () => {
    console.log('onAddImport');
    setIsUploadableShow(true);
  };

  return (
    <>
      <div className="flexWrap ">
        <h4 className="ml-3">{targetLessonObj.lessonHeading}</h4>
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

      <Card className="mb-3">
        <div className="mb-2">
          <h6 className="mb-1">Title</h6>
          <Input onChange={onLessonHeading} placeholder="Title" />
        </div>
      </Card>
      {QuizQuestionsDisplay()}
      <div className="flex mt-3 mb-5 flex-wrap">
        <Button
          onClick={onAddQuestion}
          size="sm"
          variant="solid"
          className="mr-2  mb-1 mt-1"
          color="blue-900">
          ADD QUESTION
        </Button>

        <Button
          onClick={onAddImport}
          size="sm"
          className="mr-2 text-blue-900 mb-1 mt-1 ">
          IMPORT QUESTIONS
        </Button>
      </div>

      {isUploadableShow && (
        <Card>
          <Upload
            // fileList={card.uploads}
            notAllowedFileTypes={[
              'jpeg',
              'jpg',
              'png',
              'gif',
              'bmp',
              'svg',
              'psd',
              'ai',
              'eps',
              'webp',
              'ico',
              'raw',
              'heic',
              'exr',
            ]}
            // onUploadChange={(files) => onUploadChange(id, files)}
            draggable
            className="hover:border-yellow-900 border-yellow-600">
            <div className="mt-5 text-center">
              <p className="mt-2 font-semibold">
                <span className=" text-yellow-600 dark:text-white">
                  Drag & drop video, audio,& PDF files here
                </span>
                <br />
                <span className="text-yellow-600 dark:text-white">or</span>
              </p>
              <Button
                className="mt-3 mb-4 p-3 pl-5 pr-5"
                variant="solid"
                color="blue-900">
                SELECT FILE
              </Button>
              <div>
                <p className=" mt-5 p-4 pl-auto bg-colour-yellow text-yellow-600 mt-2 opacity-20 dark:text-white">
                  You can upload files with the extensions: 3g2, 3gp, 3gpp,
                  3gpp2, asf, asx, avi, dv, f4p, f4v, flv, mjpeg, mjpg, mkv,
                  mov, movie, mp2, mp3g, mp4, mpe, mpeg, mpg, mpg4, ogg, ogv,
                  ogx, qt, rm, viv, vivo, webm, wm, wmv, wmx, wvx, m4v, aac,
                  mp2, mp3, mpga, ogg, wav, m4a, pdf
                </p>
              </div>
            </div>
          </Upload>
        </Card>
      )}
      <Card>
        <h4>Lesson settings</h4>

        <div className="flex  items-center  mt-4">
          <Checkbox className="flex items-center " color="black">
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
              <BsPencilSquare className="w-10 " />
            </Addon>
            <Input placeholder="Quiz" />
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

QuizLesson.defaultProps = {
  mail: {},
  mode: 'new',
};

export default QuizLesson;
