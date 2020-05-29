export const FIELDS = {
  SCHOOL_NAME: 'schoolName',
  DEGREE: 'degree',
  FIELD_OF_STUDY: 'fieldOfStudy',
  DESCRIPTION: 'description',
  GRADE: 'grade',
  START_YEAR: 'startYear',
  END_YEAR: 'endYear',
};

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
    case FIELDS.SCHOOL_NAME:
      return { ...state, schoolName: action.data };
    case FIELDS.DEGREE:
      return { ...state, degree: action.data };
    case FIELDS.FIELD_OF_STUDY:
      return { ...state, fieldOfStudy: action.data };
    case FIELDS.GRADE:
      return { ...state, grade: action.data };
    case FIELDS.START_YEAR:
      return { ...state, startYear: action.data };
    case FIELDS.END_YEAR:
      return { ...state, endYear: action.data };
    case FIELDS.DESCRIPTION:
      return { ...state, description: action.data };
    case 'reset':
      return { ...state, ...action.data };
    default:
      throw new Error();
  }
};
