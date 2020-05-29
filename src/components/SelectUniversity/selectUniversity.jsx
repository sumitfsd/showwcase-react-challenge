import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import { AiFillCaretDown } from 'react-icons/ai';
import optionDecorator from '../../helpers/optionDecorator';
import LoadingDots from '../Loader';
import MenuList from './MenuList';

const SelectUniversity = ({
  onChange,
  styles,
  getUniversities,
  universities,
  loading,
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(optionDecorator(universities));
  }, [universities]);

  const handleInputChange = (searchValue) => {
    if (searchValue !== '') getUniversities(searchValue);
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {loading ? <LoadingDots /> : <AiFillCaretDown />}
      </components.DropdownIndicator>
    );
  };

  return (
    <Select
      styles={styles}
      components={{ MenuList, DropdownIndicator }}
      onChange={(event) => onChange(event.value)}
      options={options}
      onInputChange={handleInputChange}
      placeholder="Type to search"
    />
  );
};

SelectUniversity.propTypes = {
  onChange: PropTypes.func.isRequired,
  getUniversities: PropTypes.func,
  styles: PropTypes.object,
  universities: PropTypes.array,
  loading: PropTypes.bool,
};

export default SelectUniversity;
