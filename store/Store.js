import { configureStore } from '@reduxjs/toolkit';
import chatDataReducer from './chatDataSlice';

const store = configureStore({
  reducer: {
    chatData: chatDataReducer,
  },
});

export default store;
