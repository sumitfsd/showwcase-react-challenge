import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  CardTitle,
  CardContext,
  Overlay,
  Text,
  OverlayContentWrapper,
} from './Card.styled';
import { ROUTES } from '../../constant';

const Card = ({
  isSelected,
  schoolName,
  degree,
  fieldOfStudy,
  grade,
  description,
  startYear,
  endYear,
  id,
  history,
}) => {
  const textInput = useRef(null);
  if (
    textInput &&
    textInput.current &&
    textInput.current.offsetTop &&
    isSelected
  ) {
    window.scrollTo(0, textInput.current.offsetTop);
  }
  return (
    <CardWrapper ref={textInput}>
      <CardTitle
        onClick={() => history.push(`${ROUTES.QUALIFICATIONS}/${id}`)}
        isSelected={isSelected}
      >
        {schoolName}
      </CardTitle>
      <CardContext>
        <Text>
          Degree:
          {degree}
        </Text>
        <Text>
          Field Of Study:
          {fieldOfStudy}
        </Text>
        <Text>
          Grade:
          {grade}
        </Text>
        <Overlay>
          <OverlayContentWrapper>
            <Text>
              Description:
              {description}
            </Text>
            <Text>
              Start Year:
              {startYear}
            </Text>
            <Text>
              End Year:
              {endYear}
            </Text>
          </OverlayContentWrapper>
        </Overlay>
      </CardContext>
    </CardWrapper>
  );
};

Card.propTypes = {
  isSelected: PropTypes.bool,
  schoolName: PropTypes.string,
  degree: PropTypes.string,
  fieldOfStudy: PropTypes.string,
  grade: PropTypes.string,
  description: PropTypes.string,
  startYear: PropTypes.string,
  endYear: PropTypes.string,
  id: PropTypes.number,
  history: PropTypes.object,
};

export default Card;
