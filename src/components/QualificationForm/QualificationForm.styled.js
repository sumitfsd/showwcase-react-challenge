import styled from 'styled-components/macro';
import theme from '../../styles/theme';
import SelectUniversity from '../SelectUniversity';

export const NameWrapper = styled.div`
  display: flex;
  font-weight: 500;
  color: ${theme.mainDark};
  flex-direction: column;
`;

export const Input = styled.input`
  height: calc(${theme.sizingUnit} * 2) !important;
  margin: calc(${theme.sizingUnit} * 0.5) 0;
  font-size: calc(${theme.sizingUnit} * 0.85) !important;
  background: ${theme.white} !important;
  border: 1px solid ${theme.grey} !important;
  &:focus {
    border: 1px solid ${theme.main} !important;
  }
  &:hover {
    border: 1px solid ${theme.greyDark} !important;
  }
`;

export const Select = styled(SelectUniversity)`
  border: 1px solid ${theme.grey} !important;
  &:focus {
    border: 1px solid ${theme.main} !important;
  }
`;

export const TextArea = styled.textarea`
  padding: 0 calc(${theme.sizingUnit} * 0.5) !important;
  height: calc(${theme.sizingUnit} * 3.6) !important;
  margin: calc(${theme.sizingUnit} * 0.5) 0;
  font-size: calc(${theme.sizingUnit} * 0.85) !important;
  background: ${theme.white} !important;
  border: 1px solid ${theme.grey} !important;
  resize: none;
  line-height: calc(${theme.sizingUnit} * 1.2);
  &:focus {
    border: 1px solid ${theme.main} !important;
  }
`;

export const FormWrapper = styled.div`
  margin: ${theme.sizingUnit};
`;

export const CustomStyle = {
  container: (provided) => ({
    ...provided,
    textAlign: 'left',
    marginBottom: '5px',
    marginTop: '5px',
  }),
  control: (provided) => ({
    ...provided,
    fontWeight: '370',
    height: '30px',
    border: `1px solid ${theme.grey} !important`,
  }),
  input: (provided) => ({
    ...provided,
    height: '30px',
    marginTop: '-20px',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: theme.greyDark,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    minHeight: '1px',
    height: '20px',
  }),
  clearIndicator: (provided) => ({
    ...provided,
    minHeight: '1px',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? 'red'
        : isFocused
        ? theme.mainLight
        : theme.white,
      color: theme.text,
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
};
