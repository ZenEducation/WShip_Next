import React, { useRef } from 'react';

import SurveyLesson from './components/SurveyLesson';

const Survey = () => {
  const mailEditorRef = {
    formikRef: useRef(),
    editorRef: useRef(),
    scrollRef: useRef(),
  };
  return <SurveyLesson ref={mailEditorRef} mode="reply" />;
};

export default Survey;
