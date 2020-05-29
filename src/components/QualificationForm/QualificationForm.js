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

const QualificationForm = ({ formValues, handleChange }) => {
  return (
    <FormWrapper>
      <NameWrapper>
        Name of school *
        <Select
          styles={CustomStyle}
          onChange={(value) =>
            handleChange({ type: 'schoolName', data: value })}
        />
      </NameWrapper>
      <NameWrapper>
        Degree *
        <Input
          type="text"
          value={formValues.degree}
          placeholder="Enter degree"
          onChange={(event) =>
            handleChange({ type: 'degree', data: event.target.value })}
        />
      </NameWrapper>
      <NameWrapper>
        Field of Study *
        <Input
          type="text"
          value={formValues.fieldOfStudy}
          onChange={(event) =>
            handleChange({ type: 'fieldOfStudy', data: event.target.value })}
        />
      </NameWrapper>
      <NameWrapper>
        Grade
        <Input
          type="text"
          value={formValues.grade}
          onChange={(event) =>
            handleChange({ type: 'grade', data: event.target.value })}
        />
      </NameWrapper>
      <NameWrapper>
        Start Year *
        <Input
          type="date"
          value={formValues.startYear}
          onChange={(event) =>
            handleChange({ type: 'startYear', data: event.target.value })}
        />
      </NameWrapper>
      <NameWrapper>
        End Year *
        <Input
          type="date"
          min={formValues.startYear}
          value={formValues.endYear}
          onChange={(event) =>
            handleChange({ type: 'endYear', data: event.target.value })}
        />
      </NameWrapper>
      <NameWrapper>
        Description
        <TextArea
          rows={4}
          value={formValues.description}
          onChange={(event) =>
            handleChange({ type: 'description', data: event.target.value })}
        />
      </NameWrapper>
    </FormWrapper>
  );
};

QualificationForm.propTypes = {};

export default QualificationForm;
