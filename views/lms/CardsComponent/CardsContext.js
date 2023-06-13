// CardsContext.js
import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

const CardsContext = React.createContext();

const CardsProvider = ({ children }) => {
  const sampleBulkId = uuidv4();
  const [cards, setCards] = useState([
    {
      id: sampleBulkId,
      heading: 'Chapter 1',
      uploads: [],
      lessons: [
        {
          id: uuidv4(),
          lessonHeading: 'New Quiz Lesson',
          lessonContent: [
            {
              id: uuidv4(),
              question: 'What is your question?',
              questionType: 'one',
              choices: [
                { id: uuidv4(), choice: 'Yes', check: false },
                { id: uuidv4(), choice: 'No', check: false },
              ],
              explanation: '',
            },
          ],
          type: 'Quiz',
        },
      ],
      type: 'bulkImporter',
    },
  ]);

  const [curriculumAndCards, setCurriculumAndCards] = useState([
    {
      id: sampleBulkId,
      heading: 'Chapter 1',
      uploads: [],
      lessons: [
        {
          id: uuidv4(),
          lessonHeading: 'New Quiz Lesson',
          lessonContent: [
            {
              id: uuidv4(),
              question: 'What is your question?',
              questionType: 'one',
              choices: [
                { id: uuidv4(), choice: 'Yes', check: false },
                { id: uuidv4(), choice: 'No', check: false },
              ],
              explanation: '',
            },
          ],
          type: 'Quiz',
        },
      ],
      type: 'bulkImporter',
    },
    {
      id: uuidv4(),
      name: 'Untitled chapter 1',
      lessons: [
        {
          id: uuidv4(),
          lessonHeading: 'New Quiz Lesson',
          lessonContent: [
            {
              id: uuidv4(),
              question: 'What is your question?',
              questionType: 'one',
              choices: [
                { id: uuidv4(), choice: 'Yes', check: false },
                { id: uuidv4(), choice: 'No', check: false },
              ],
              explanation: '',
            },
          ],
          type: 'Quiz',
        },
      ],
      type: 'curriculum',
    },
  ]);

  // console.log('curriculumAndCards', curriculumAndCards);

  // const [curriculumValue, setCurriculumValue] = useState([
  //   { id: uuidv4(), name: 'Untitled chapter 1', type: 'curriculum' },
  //   { id: uuidv4(), name: 'Untitled chapter 2', type: 'curriculum' },
  //   { id: uuidv4(), name: 'Untitled chapter 3', type: 'curriculum' },
  // ]);

  const currVal = curriculumAndCards.filter(
    (eachCard) => eachCard.type === 'curriculum'
  );

  // console.log('currVal', currVal);

  // console.log('curriculumAndCards', curriculumAndCards);

  const [selectedCard, setSelectedCard] = useState(currVal[0]);

  // console.log('selectedCard', selectedCard);

  const [inputVal, setInputVal] = useState('');

  const [tabMenu, setTabMenu] = useState('Curriculum');

  const [sideBar, setSideBar] = useState(true);

  const [LessonsOptionTab, setLessonsOptionTab] = useState('Curriculum');

  const [lessonFrom, setLessonFrom] = useState({});

  const [selectedLesson, setSelectedLesson] = useState({
    lessonId: '',
    lessonType: '',
    isShowLesson: false,
  });
  // console.log('selectedLesson', selectedLesson);

  return (
    <CardsContext.Provider
      value={{
        // cards,
        // setCards,
        // curriculumValue,
        // setCurriculumValue,
        curriculumAndCards,
        setCurriculumAndCards,
        selectedCard,
        setSelectedCard,
        inputVal,
        setInputVal,
        tabMenu,
        setTabMenu,
        LessonsOptionTab,
        setLessonsOptionTab,
        sideBar,
        setSideBar,
        lessonFrom,
        setLessonFrom,
        selectedLesson,
        setSelectedLesson,
      }}>
      {children}
    </CardsContext.Provider>
  );
};

export { CardsProvider, CardsContext };
