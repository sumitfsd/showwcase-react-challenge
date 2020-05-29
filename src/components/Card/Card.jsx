import React from 'react';
import { CardWrapper, CardTitle, CardContext, Overlay, Text, OverlayContentWrapper } from './Card.styled';
import { ROUTES } from '../../constant';

const Card = ({
  isSelected, schoolName, degree, fieldOfStudy, grade, description, startYear, endYear, id, history
}) => {

  return (
    <CardWrapper>
      <CardTitle onClick={() => history.push(`${ROUTES.QUALIFICATIONS}/${id}`)} isSelected={isSelected}>
        {schoolName}
      </CardTitle>
      <CardContext>
        <Text> Degree: {degree}</Text>
        <Text> Field Of Study: {fieldOfStudy}</Text>
        <Text> Grade: {grade} </Text>
        <Overlay>
          <OverlayContentWrapper>
            <Text> Description: {description}</Text>
            <Text> Start Year: {startYear} </Text>
            <Text> End Year: {endYear} </Text>
          </OverlayContentWrapper>
        </Overlay>
      </CardContext>
    </CardWrapper>
  );
}

export default Card;
