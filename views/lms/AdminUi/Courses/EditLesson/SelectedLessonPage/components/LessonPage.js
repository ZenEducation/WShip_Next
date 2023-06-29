import React, { useContext } from 'react';

import { CardsContext } from '../../../../../CardsComponent/CardsContext';

import Quiz from '../../Quiz/index';

import Survey from '../../Survey/index';

import Video from '../../Video/index';

import Audio from '../../Audio/index';

import Pdf from '../../Pdf/index';

import PPT from '../../Ppt/index';

import Text from '../../Text/index';

import Downloadable from '../../Downloadable/index';

const LessonPage = () => {
  const { LessonsOptionTab, setLessonsOptionTab } = useContext(CardsContext);

  const { selectedLesson, setSelectedLesson } = useContext(CardsContext);

  // console.log('selectedLesson', selectedLesson);

  switch (selectedLesson.lessonType) {
    case 'Quiz':
      return <Quiz />;

    case 'Survey':
      return <Survey />;

    case 'Video':
      return <Video />;

    case 'Audio':
      return <Audio />;
    case 'PDF':
      return <Pdf />;

    case 'Text':
      return <Text />;

    case 'Download':
      return <Downloadable />;
    case 'Presentation':
      return <PPT />;

    default:
      return <div>Not Added This Lesson Page</div>;
  }
};

export default LessonPage;
