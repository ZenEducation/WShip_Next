import React, { useRef } from 'react';

import QuizLesson from './components/QuizLesson';

const Quiz = () => {
  const mailEditorRef = {
    formikRef: useRef(),
    editorRef: useRef(),
    scrollRef: useRef(),
  };
  return <QuizLesson ref={mailEditorRef} mode="reply" />;
};

export default Quiz;
