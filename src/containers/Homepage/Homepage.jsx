import React from 'react';
import PropTypes from 'prop-types';
import { MdLocationCity } from 'react-icons/md'
import { ContentWrapper, Container, MidFrame, Button, NameInput } from './Homepage.styled'
import Navigation from '../../components/Navigation';

function Homepage({ setUserName, userName, history }) {
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
        <br/>  
        <br/>
        <p>Type your name and click "Enter" below to begin!</p>
        <br/>
        <NameInput/>
        <br/>
        <br/>
        <Button>Enter</Button>
        </MidFrame>
      </ContentWrapper>
    </Container>
  )
}

Homepage.propTypes = {
  setUserName: PropTypes.func.isRequired
};

export default Homepage;