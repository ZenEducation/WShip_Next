import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../../features/counter/counterSlice';
import counterReducer from "./counterSlice";


export const reduxStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
  
});
