export const initialState = {
  schoolName: '',
  degree: '',
  fieldOfStudy: '',
  description: '',
  grade: '',
  startYear: '',
  endYear: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'schoolName':
      return { ...state, schoolName: action.data };
    case 'degree':
      return { ...state, degree: action.data };
    case 'fieldOfStudy':
      return { ...state, fieldOfStudy: action.data };
    case 'grade':
      return { ...state, grade: action.data };
    case 'startYear':
      return { ...state, startYear: action.data };
    case 'endYear':
      return { ...state, endYear: action.data };
    case 'description':
      return { ...state, description: action.data };
    case 'reset':
      return { ...state, ...action.data };
    default:
      throw new Error();
  }
};
