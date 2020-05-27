import { createSlice } from '@reduxjs/toolkit'

export const fetchUniversities = () => ({ type: 'FETCH_UNIVERSITIES' });

const configSlice = createSlice({
  name: 'universities',
  initialState: {
    list: [],
  },
  reducers: {
    addUniversities(state, action) {
      state.list = action.payload.slice(0);;
    },
  }
})

const { actions, reducer } = configSlice;

export const {
  addUniversities
} = actions;

export default reducer;
