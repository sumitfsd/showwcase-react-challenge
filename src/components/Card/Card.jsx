import React, { useRef } from 'react';
import { CardWrapper, CardTitle, CardContext, Overlay, Text, OverlayContentWrapper } from './Card.styled';
import { ROUTES } from '../../constant';

const Card = ({
  isSelected, schoolName, degree, fieldOfStudy, grade, description, startYear, endYear, id, history, ref
}) => {
  const textInput = useRef(null);
  if(textInput && textInput.current && textInput.current.offsetTop && isSelected){
    window.scrollTo(0, textInput.current.offsetTop)
  }
  return (
    <CardWrapper ref={textInput}>
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
