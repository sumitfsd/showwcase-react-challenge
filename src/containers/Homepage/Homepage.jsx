import React from 'react';
import PropTypes from 'prop-types';

function Homepage({setUserName, userName}) {
  return (
    <>HOMEPAGE</>
  )
}

Homepage.propTypes = {
  setUserName: PropTypes.func.isRequired
};

export default Homepage;