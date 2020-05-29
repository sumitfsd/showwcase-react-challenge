import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../components/Navigation';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import QualificationForm from '../../components/QualificationForm';
import {
  initialState,
  reducer,
} from '../../components/QualificationForm/reducer';
import CardList from '../../components/CardList';
import { ContentWrapper, Container } from '../Homepage/Homepage.styled';
import { ROUTES } from '../../constant';
import {
  ModalFooterActionsWrapper,
  CancelButton,
  WelcomeMessage,
} from './Qualifications.styled';
import Toast from '../../components/Toast';
import validate from './QualificationValidator';

function Homepage({
  userName,
  history,
  addQualification,
  qualifications,
  qualificationId,
  isCollapsed,
}) {
  const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const requiredField = ['schoolName', 'degree', 'startYear', 'endYear'];

  const handleSave = () => {
    const errors = validate(state, requiredField);
    if (errors.length) {
      Toast.fire({
        title: errors[0],
        icon: 'error',
      });
      return;
    }
    Toast.fire({
      title: `Qualification at ${state.schoolName} is saved`,
      icon: 'success',
    });
    addQualification(state);
    setShowModal(false);
    dispatch({ type: 'reset', data: initialState });
  };
  const handleCancel = () => {
    setShowModal(false);
    dispatch({ type: 'reset', data: initialState });
  };

  return (
    <Container>
      <Navigation
        isCollapsed={isCollapsed}
        history={history}
        links={qualifications.map((data, index) => ({
          text: data.schoolName,
          to: `${ROUTES.QUALIFICATIONS}/${index}`,
        }))}
      />
      <ContentWrapper isCollapsed={isCollapsed}>
        <WelcomeMessage>{`Welcome to ${userName}'s education page`}</WelcomeMessage>
        <WelcomeMessage>
          <Button onClick={() => setShowModal(true)} size="medium">
            Add new education
          </Button>
        </WelcomeMessage>
        <Modal
          hasFixedHeader
          onRequestClose={() => setShowModal(false)}
          isOpen={showModal}
          header={{
            title: 'New Education Modal',
          }}
          footer={(
            <ModalFooterActionsWrapper>
              <CancelButton size="medium" onClick={() => handleCancel()}>
                Cancel
              </CancelButton>
              <Button onClick={() => handleSave()}>Save</Button>
            </ModalFooterActionsWrapper>
          )}
        >
          <QualificationForm formValues={state} handleChange={dispatch} />
        </Modal>
        <CardList
          list={qualifications}
          selectedCard={qualificationId}
          history={history}
        />
      </ContentWrapper>
    </Container>
  );
}

Homepage.propTypes = {
  setUserName: PropTypes.func,
  userName: PropTypes.string,
  history: PropTypes.object,
  addQualification: PropTypes.func,
  qualifications: PropTypes.array,
  qualificationId: PropTypes.string,
  isCollapsed: PropTypes.bool,
};

export default Homepage;
