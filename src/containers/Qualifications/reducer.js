import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'qualification',
  initialState: {
    list: [],
  },
  reducers: {
    addQualification(state, action) {
      action.payload.createdAt = Date.now();
      state.list.push(action.payload);
    },
  },
});

const { actions, reducer } = configSlice;

export const { addQualification } = actions;

export default reducer;
