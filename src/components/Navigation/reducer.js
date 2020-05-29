import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'navigation',
  initialState: {
    isCollapsed: false,
  },
  reducers: {
    toggleNavigation(state, action) {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

const { actions, reducer } = configSlice;

export const { toggleNavigation } = actions;

export default reducer;
