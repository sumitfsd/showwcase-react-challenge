import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../components/Navigation';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { ContentWrapper, Container, ModalFooterActionsWrapper, CancelButton } from './Qualifications.styled'
import QualificationForm from '../../components/QualificationForm';
import { initialState, reducer } from '../../components/QualificationForm/reducer'

function Homepage({ userName, history, addQualification }) {
  const [showModal, setShowModal] = useState(true);
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
        links={[

        ]}
      />
      <ContentWrapper>
        <>{`Welcome ${userName}`}</>
        <button onClick={() => setShowModal(true)}>
          Add new education
          </button>

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
      </ContentWrapper>
    </Container>
  )
}

Homepage.propTypes = {
  setUserName: PropTypes.func.isRequired
};

export default Homepage;