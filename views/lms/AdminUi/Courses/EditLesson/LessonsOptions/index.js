import React from 'react';
import LessonsOptions from './components/LessonsOptions';
import { injectReducer } from 'store/index';
import reducer from './store';

injectReducer('crmCustomers', reducer);

const LessonsPage = ({ lessonFrom }) => {
  // console.log('lessonFrom lessonFrom lessonFrom', lessonFrom);
  return (
    <>
      <LessonsOptions lessonFrom={lessonFrom} />
    </>
  );
};

export default LessonsPage;
