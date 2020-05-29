import React from 'react';
import { ListWrapper } from './CardList.styled';
import Card from '../Card'

const CardList = ({ list, selectedCard, history }) => {
  return (
    <ListWrapper>
      {!!list.length && list.map((card, index) => {
        return (
          <Card
            history={history}
            id={index}
            isSelected={parseInt(selectedCard) === index}
            {...card}
          />
        )
      })}
    </ListWrapper>
  );
}

export default CardList;
