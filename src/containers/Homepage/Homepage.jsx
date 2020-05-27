import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdLocationCity } from 'react-icons/md'
import { ContentWrapper, Container, MidFrame, Input, StyledButton } from './Homepage.styled'
import Navigation from '../../components/Navigation';
import { ROUTES } from '../../constant';

function Homepage({ setUserName, history }) {
  const [name, setName] = useState('')

  const handleClick = () => {
    setUserName(name)
    history.push(ROUTES.QUALIFICATIONS)
  }
  return (
    <Container>
      <Navigation
        history={history}
        links={[
          {
            text: 'Home',
            to: `/`,
            icon: MdLocationCity
          },
        ]}
      />
      <ContentWrapper>
        <MidFrame>
          <p>Hi there! Welcome to your education showcase</p>
          <p>Type your name and click "Enter" below to begin!</p>
          <Input
            value={name}
            onChange={(event) => {setName(event.target.value);console.log(event.target.value)}}
            placeholder={'Your Name'}
          />
          <StyledButton
            onClick={() => handleClick()}
            size='medium'
          >
            Enter
          </StyledButton>
        </MidFrame>
      </ContentWrapper>
    </Container>
  )
}

Homepage.propTypes = {
  setUserName: PropTypes.func.isRequired
};

export default Homepage;