import React from 'react';
import PropTypes from 'prop-types';
import { MdLocationCity } from 'react-icons/md'
import { ContentWrapper, Container } from './Homepage.styled'
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
        <>Homepage</>
      </ContentWrapper>
    </Container>
  )
}

Homepage.propTypes = {
  setUserName: PropTypes.func.isRequired
};

export default Homepage;