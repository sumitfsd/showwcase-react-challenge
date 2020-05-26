import { createSlice } from '@reduxjs/toolkit'

const configSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
  }
})

const { actions, reducer } = configSlice;

export const {
  setName
} = actions;

export default reducer;
