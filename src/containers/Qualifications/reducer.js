import { createSlice } from '@reduxjs/toolkit'


export const FETCH_UNIVERSITIES_REQUEST = 'FETCH_UNIVERSITIES_REQUEST';
export const FETCH_UNIVERSITIES_FAILED = 'FETCH_UNIVERSITIES_FAILED';
export const FETCH_UNIVERSITIES_SUCCESS = 'FETCH_UNIVERSITIES_SUCCESS';

export const fetchUniversities = name => ({
  type: 'CALL_API',
  types: [
    FETCH_UNIVERSITIES_REQUEST,
    FETCH_UNIVERSITIES_SUCCESS,
    FETCH_UNIVERSITIES_FAILED,
  ],
  method: 'get',
  endPoint: `http://universities.hipolabs.com/search?name=${name}`,
});


const configSlice = createSlice({
  name: 'qualification',
  initialState: {
    list: [],
  },
  reducers: {
    addQualification(state, action) {
      state.list.push(action.payload);
    },
  }
})

const { actions, reducer } = configSlice;

export const {
  addQualification
} = actions;

export default reducer;
