import React, { useContext } from 'react';

import { CardsContext } from '../../../../../CardsComponent/CardsContext';

import Quiz from '../../Quiz/index';

import Survey from '../../Survey/index';

const LessonPage = () => {
  const { LessonsOptionTab, setLessonsOptionTab } = useContext(CardsContext);

  const { selectedLesson, setSelectedLesson } = useContext(CardsContext);

  // console.log('selectedLesson', selectedLesson);

  switch (selectedLesson.lessonType) {
    case 'Quiz':
      return <Quiz />;

    case 'Survey':
      return <Survey />;

    default:
      return <div>Not Added This Lesson Page</div>;
  }
};

export default LessonPage;
