import React from 'react';
import { CardWrapper, CardTitle, CardContext } from './Card.styled';

const Card = props => {
  return (
    <CardWrapper>
      <CardTitle></CardTitle>
      <CardContext>
        <p> Degree: {props.degree}</p>
        <p> Field Of Study: {props.fieldofstudy}</p>
        <p> Description: {props.desc}</p>
        <p> Grade: {props.grade} </p>
        <p> Start Year: {props.startyear} </p>  
        <p> End Year: {props.endyear} </p>                   
      </CardContext>
    </CardWrapper>
  );
}

export default Card;
