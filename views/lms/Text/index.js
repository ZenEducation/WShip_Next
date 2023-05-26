import React, { useRef } from 'react';

import TextLesson from './components/TextLesson';

const Text = () => {
  const mailEditorRef = {
    formikRef: useRef(),
    editorRef: useRef(),
    scrollRef: useRef(),
  };
  return <TextLesson ref={mailEditorRef} mode="reply" />;
};

export default Text;
