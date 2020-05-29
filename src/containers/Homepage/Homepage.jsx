import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdLocationCity } from 'react-icons/md'
import { ContentWrapper, Container, MidFrame, Input, StyledButton } from './Homepage.styled'
import Navigation from '../../components/Navigation';
import { ROUTES } from '../../constant';
import { validateName } from './ValidateName';
import Toast from '../../components/Toast';

function Homepage({ setUserName, history, isCollapsed }) {
  const [name, setName] = useState('')

  const handleClick = () => {
    const errors = validateName(name)
    if (errors.length) {
      Toast.fire({
        title: errors[0],
        icon: 'error'
      })
      return
    }
    Toast.fire({
      title: `User Name is ${name}`,
      icon: 'success'
    })
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
      <ContentWrapper isCollapsed={isCollapsed}>
        <MidFrame>
          <p>Hi there! Welcome to your education showcase</p>
          <p>Type your name and click "Enter" below to begin!</p>
          <Input
            value={name}
            onChange={(event) => { setName(event.target.value) }}
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