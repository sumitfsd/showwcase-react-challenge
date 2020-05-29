import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper } from './CardList.styled';
import Card from '../Card';

const CardList = ({ list, selectedCard, history }) => {
  // Sort the qualificaions by the time createdAt without mutating the list from store.
  const sortedList = list.slice(0);
  sortedList.sort(function (x, y) {
    return y.createdAt - x.createdAt;
  });

  return (
    <ListWrapper>
      {!!sortedList.length &&
        sortedList.map((card, index) => {
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
