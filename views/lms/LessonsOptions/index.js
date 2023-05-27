import React from 'react';
import LessonsOptions from './components/LessonsOptions';
import { injectReducer } from 'store/index';
import reducer from './store';

injectReducer('crmCustomers', reducer);

const Customers = () => {
  return (
    <>
      <LessonsOptions />
    </>
  );
};

export default Customers;
