import React, { useRef } from 'react';

import AudioLesson from './components/AudioLesson';

const Audio = () => {
  const mailEditorRef = {
    formikRef: useRef(),
    editorRef: useRef(),
    scrollRef: useRef(),
  };
  return <AudioLesson ref={mailEditorRef} mode="reply" />;
};

export default Audio;
