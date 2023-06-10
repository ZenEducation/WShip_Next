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

// QuizLesson

const QuizLesson = forwardRef((props, ref) => {
  const { mode } = props;
  const { editorRef } = ref;
  const [quizList, setQuizList] = useState([
    {
      id: 1,
      question: 'What is your question?',
      questionType: 'one',
      choices: [{ choice: 'Yes' }, { choice: 'No' }],
      explanation: '',
      type: 'quiz',
    },
  ]);

  console.log('quizList quizList', quizList);
  const [lessonHeading, setLessonHeading] = useState('New Quiz Lesson');

  const onLessonHeading = (e) => {
    const value = e.target.value;
    if (value === '') {
      setLessonHeading('New Quiz Lesson');
    } else {
      setLessonHeading(value);
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
    const DeleteButtonFunc = () => {
      const Toggle = (
        <Button size="sm">
          <BsThreeDotsVertical className="text-xl" />
        </Button>
      );

      return (
        <Dropdown
          placement="bottom-center"
          // variant="divider"
          renderTitle={Toggle}>
          <Dropdown.Item
            onClick={() =>
              setQuizList(quizList.filter((card) => card.id !== eachQuiz.id))
            }
            eventKey="a">
            DELETE
          </Dropdown.Item>
        </Dropdown>
      );
    };

    const QuestionTypeDrop = () => {
      const Toggle = (
        <Button>
          <BsThreeDotsVertical className="text-xl" />
        </Button>
      );

      return (
        <Dropdown
          placement="bottom-start"
          // variant="divider"
          renderTitle={Toggle}>
          <Dropdown.Item eventKey="a">DELETE</Dropdown.Item>
        </Dropdown>
      );
    };

    const onDeleteChoice = (index) => {
      console.log('onDeleteChoice', index, eachQuiz);
    };

    const eachChoiceListDisplay = (eachChoice, index) => {
      return (
        <Card key={index} className=" mb-3 mt-3 ">
          <div className="flexWrap ">
            <b>choice {index + 1}</b>
            <button onClick={() => onDeleteChoice(index)}>
              <HiOutlineTrash className="text-lg" />
            </button>
          </div>
          <RichTextEditor
            value={eachChoice.choice}
            className=" mt-2 "
            placeholder="Type something"
            ref={editorRef} // Pass the ref to the RichTextEditor component
            //  onChange={handleEditorChange} // Specify the change event handler
            modules={modules}
          />
          <div className="flex  items-center  mt-4">
            <Checkbox className="flex items-center " color="black">
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

    console.log('eachQuiz', eachQuiz);
    console.log('index', index);

    const handleQuestionChange = (content) => {
      // console.log(content); // Do something with the updated content
      const div = document.createElement('div');
      div.innerHTML = content;
      const text = div.textContent || div.innerText;

      // console.log(text); // Extracted text from the <p> element

      const newHeadingBulk = quizList.map((eachCard) => {
        if (eachCard.id === eachQuiz.id) {
          eachCard.question = text;
          return eachCard;
        }
        return eachCard;
      });

      setQuizList(newHeadingBulk);
    };

    const onAddChoice = () => {
      console.log('onAddChoice', eachQuiz);
      // eachQuiz

      const UpdatedChoiceQuiz = quizList.map((eachQuizCard) => {
        if (eachQuizCard.id === eachQuiz.id) {
          console.log('eachQuizCard.choices', eachQuizCard.choices);
          const newChoice = [...eachQuizCard.choices, { choice: '' }];
          return { ...eachQuizCard, choices: newChoice };
        }
        return eachQuizCard;
      });

      setQuizList(UpdatedChoiceQuiz);

      console.log('UpdatedChoiceQuiz UpdatedChoiceQuiz', UpdatedChoiceQuiz);
    };

    return (
      <Card key={eachQuiz.id} className="mb-3">
        <div className="flexWrap mb-3">
          <h4>
            Question #{index + 1}: {eachQuiz.question}
          </h4>
          <div className="flexWrap">
            <div className="flexWrap">
              <Button size="sm" className="text-blue-900">
                DISCARD CHANGES
              </Button>

              {DeleteButtonFunc()}
            </div>
          </div>
        </div>
        <h6 className="mb-1 mt-1">Question type</h6>
        <Select
          //   isClearable
          // value={currentName}
          // onChange={handleChange}
          placeholder="Type something..."
          // onInputChange={handleInputChange}
          // componentAs={CreatableSelect}
          className="orderFlex question-type"
          options={QuestionType}></Select>
        <br />
        <b className=" mt-1">Question</b>
        <RichTextEditor
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
          className="mt-1"
          placeholder="Type something"
          ref={editorRef} // Pass the ref to the RichTextEditor component
          //  onChange={handleEditorChange} // Specify the change event handler
          modules={modules}
        />
      </Card>
    );
  };

  const QuizQuestionsDisplay = () => {
    return quizList.map((eachQuiz, index) => eachQuizDisplay(eachQuiz, index));
  };

  const onAddQuestion = () => {
    const newQuestion = {
      id: Math.random() * Math.random(),
      question: 'What is your new question?',
      questionType: 'one',
      choices: [{ choice: '' }, { choice: '' }],
      explanation: '',
      type: 'quiz',
    };

    setQuizList([...quizList, newQuestion]);
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

        <Button size="sm" className="mr-2 text-blue-900 mb-1 mt-1 ">
          IMPORT QUESTIONS
        </Button>
      </div>

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
