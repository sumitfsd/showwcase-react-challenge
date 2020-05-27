import React from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper, Container } from './Homepage.styled'
import Navigation from '../../components/Navigation';

function Homepage({ userName, history }) {

  return (
    <Container>
      <Navigation
        history={history}
        links={[

        ]}
      />
      <ContentWrapper>
        <>{`Welcome ${userName}`}</>

      </ContentWrapper>
    </Container>
  )
}

Homepage.propTypes = {
  setUserName: PropTypes.func.isRequired
};

export default Homepage;