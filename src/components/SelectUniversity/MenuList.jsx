import React from 'react';
import PropTypes from 'prop-types';
import { VariableSizeList as List } from 'react-window';

const GROUP_HEADER_HEIGHT = 13;
const ITEM_HEIGHT = 34;

function MenuList({ options, getValue, children }) {
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * ITEM_HEIGHT;

  const reactChildren = React.Children.toArray(children);

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
      itemCount={reactChildren.length}
      itemSize={getItemSize}
      estimatedItemSize={estimatedItemSize}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => <div style={style}>{reactChildren[index]}</div>}
    </List>
  );
}

MenuList.propTypes = {
  getValue: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

export default MenuList;
