import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'universities',
  initialState: {
    error: null,
    loading: false,
    list: [],
  },
  reducers: {
    getUniversities(state, action) {
      state.loading = true;
    },
    successInGettingUniversities(state, action) {
      state.list = action.payload;
      state.loading = false;
    },
    errorInGettingUniversities(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = configSlice;
// Extract and export each action creator by name
export const {
  getUniversities,
  successInGettingUniversities,
  errorInGettingUniversities,
} = actions;
// Export the reducer, either as a default or named export
export default reducer;
