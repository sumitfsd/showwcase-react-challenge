import React from 'react';
import PropTypes from 'prop-types';
import {
  CustomStyle,
  NameWrapper,
  Input,
  Select,
  TextArea,
  FormWrapper,
} from './QualificationForm.styled';
import { FIELDS } from './reducer';

const QualificationForm = ({ formValues, handleChange }) => {
  return (
    <FormWrapper>
      <NameWrapper>
        Name of school *
        <Select
          styles={CustomStyle}
          onChange={(value) =>
            handleChange({ type: FIELDS.SCHOOL_NAME, data: value })
          }
        />
      </NameWrapper>
      <NameWrapper>
        Degree *
        <Input
          type="text"
          value={formValues.degree}
          placeholder="Enter degree"
          onChange={(event) =>
            handleChange({ type: FIELDS.DEGREE, data: event.target.value })
          }
        />
      </NameWrapper>
      <NameWrapper>
        Field of Study *
        <Input
          type="text"
          value={formValues.fieldOfStudy}
          onChange={(event) =>
            handleChange({
              type: FIELDS.FIELD_OF_STUDY,
              data: event.target.value,
            })
          }
        />
      </NameWrapper>
      <NameWrapper>
        Grade
        <Input
          type="text"
          value={formValues.grade}
          onChange={(event) =>
            handleChange({ type: FIELDS.GRADE, data: event.target.value })
          }
        />
      </NameWrapper>
      <NameWrapper>
        Start Year *
        <Input
          type="date"
          value={formValues.startYear}
          onChange={(event) =>
            handleChange({ type: FIELDS.START_YEAR, data: event.target.value })
          }
        />
      </NameWrapper>
      <NameWrapper>
        End Year *
        <Input
          type="date"
          min={formValues.startYear}
          value={formValues.endYear}
          onChange={(event) =>
            handleChange({ type: FIELDS.END_YEAR, data: event.target.value })
          }
        />
      </NameWrapper>
      <NameWrapper>
        Description
        <TextArea
          rows={4}
          value={formValues.description}
          onChange={(event) =>
            handleChange({ type: FIELDS.DESCRIPTION, data: event.target.value })
          }
        />
      </NameWrapper>
    </FormWrapper>
  );
};

QualificationForm.propTypes = {
  formValues: PropTypes.shape({
    schoolName: PropTypes.string,
    degree: PropTypes.string,
    fieldOfStudy: PropTypes.string,
    grade: PropTypes.string,
    description: PropTypes.string,
    startYear: PropTypes.string,
    endYear: PropTypes.string,
  }),
  handleChange: PropTypes.func.isRequired,
};

export default QualificationForm;
