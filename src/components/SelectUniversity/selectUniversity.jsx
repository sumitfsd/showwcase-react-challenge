import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Select, { components } from 'react-select';
import { VariableSizeList as List } from "react-window";
import optionDecorator from '../../helpers/optionDecorator';
import LoadingDots from '../Loader';
import { AiFillCaretDown } from 'react-icons/ai'


const GROUP_HEADER_HEIGHT = 13;
const ITEM_HEIGHT = 34;

function MenuList(props) {
  const { options, getValue } = props;
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * ITEM_HEIGHT;

  const children = React.Children.toArray(props.children);

  function getOptionSize(option) {
    if (option && option.options) {
      return option.options.length * ITEM_HEIGHT + GROUP_HEADER_HEIGHT;
    }
    return ITEM_HEIGHT;
  }

  function getItemSize(i) {
    return getOptionSize(options[i]);
  }

  const totalHeight = options.reduce((height, option) => {
    return height + getOptionSize(option);
  }, 0);

  const estimatedItemSize = totalHeight / options.length;

  return (
    <List
      height={Math.min(totalHeight, 300)}
      itemCount={children.length}
      itemSize={getItemSize}
      estimatedItemSize={estimatedItemSize}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => <div style={style}>{children[index]}</div>}
    </List>
  );
}

const SelectUniversity = ({ onChange, styles, getUniversities, universities, loading }) => {
  const [options, setOptions] = useState([])

  useEffect(() => {
    setOptions(optionDecorator(universities))
  }, [universities])

  const handleInputChange = (searchValue) => {
    searchValue!== '' && getUniversities(searchValue)
  }

  const DropdownIndicator = props => {
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
      onChange={event => onChange(event.value)}
      options={options}
      onInputChange={handleInputChange}
      placeholder="Type to search"
    />
  )
}

SelectUniversity.propTypes = {

}

export default SelectUniversity
