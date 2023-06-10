import React, { useRef } from 'react';

import DownloadableLesson from './components/DownloadableLesson';

const Downloadable = () => {
  const mailEditorRef = {
    formikRef: useRef(),
    editorRef: useRef(),
    scrollRef: useRef(),
  };
  return <DownloadableLesson ref={mailEditorRef} mode="reply" />;
};

export default Downloadable;
