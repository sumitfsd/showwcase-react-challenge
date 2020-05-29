import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper } from './CardList.styled';
import Card from '../Card';

const CardList = ({ list, selectedCard, history }) => {
  return (
    <ListWrapper>
      {!!list.length &&
        list.map((card, index) => {
          return (
            <Card
              key={`card_${index}`}
              history={history}
              id={index}
              isSelected={parseInt(selectedCard) === index}
              {...card}
            />
          );
        })}
    </ListWrapper>
  );
};

CardList.propTypes = {
  list: PropTypes.array,
  selectedCard: PropTypes.string,
  history: PropTypes.object.isRequired,
};

export default CardList;
