import React, { useState, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../components/Navigation';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import QualificationForm from '../../components/QualificationForm';
import { initialState, reducer } from '../../components/QualificationForm/reducer'
import CardList from '../../components/CardList';
import { ContentWrapper, Container, ModalFooterActionsWrapper, CancelButton, WelcomeMessage } from './Qualifications.styled'
import { ROUTES } from '../../constant';

function Homepage({ userName, history, addQualification, qualifications, qualificationId }) {
  const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSave = () => {
    addQualification(state)
    setShowModal(false)
    dispatch({ type: 'reset', data: initialState })
  }
  const handleCancel = () => {
    setShowModal(false)
    dispatch({ type: 'reset', data: initialState })
  }

  return (
    <Container>
      <Navigation
        history={history}
        links={
          qualifications.map((data, index) => ({
            text: data.schoolName,
            to: `${ROUTES.QUALIFICATIONS}/${index}`
          }))
        }
      />
      <ContentWrapper>
        <WelcomeMessage>{`Welcome to ${userName}'s education page`}</WelcomeMessage>
        <WelcomeMessage>
          <Button onClick={() => setShowModal(true)} size='medium'>
            Add new education
          </Button>
        </WelcomeMessage>
        <Modal
          hasFixedHeader
          onRequestClose={() => setShowModal(false)}
          isOpen={showModal}
          header={{
            title: 'New Education Modal'
          }}
          footer={
            <ModalFooterActionsWrapper>
              <CancelButton size='medium' onClick={() => handleCancel()}>Cancel</CancelButton>
              <Button
                onClick={() => handleSave()}
              >
                Save
              </Button>
            </ModalFooterActionsWrapper>
          }
        >
          <QualificationForm
            formValues={state}
            handleChange={dispatch}
          />
        </Modal>
        <CardList
          list={qualifications}
          selectedCard={qualificationId}
          history={history}
        />
      </ContentWrapper>
    </Container>
  )
}

Homepage.propTypes = {
  setUserName: PropTypes.func.isRequired
};

export default Homepage;