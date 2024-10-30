import { createSlice } from '@reduxjs/toolkit';

const chatDataSlice = createSlice({
  name: 'chatData',
  initialState: {
    value: [],
  },
  reducers: {
    setChatData: (state, action) => {
      state.value = action.payload;
    },
    clearChatData: (state) => {
      state.value = [];
    },
  },
});

export const { setChatData, clearChatData } = chatDataSlice.actions;
export default chatDataSlice.reducer;
