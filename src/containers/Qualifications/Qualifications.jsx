import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../components/Navigation';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import { ContentWrapper, Container, ModalFooterActionsWrapper, CancelButton } from './Qualifications.styled'

function Homepage({ userName, history }) {
  const [showModal, setShowModal] = useState(false);

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
              <CancelButton size='medium' onClick={() => setShowModal(false)}>Cancel</CancelButton>
              <Button
                size='normal' onClick={() => {
                  console.log("Submitting")
                }}
              >Add education
            </Button>
            </ModalFooterActionsWrapper>
          }
        >
          Content
      </Modal>
        <Card degree='LNCT' fieldofstudy='CS' desc='CSE student' grade='8sem' startyear='2016' endyear='2020'>
        </Card>
      </ContentWrapper>
    </Container>
  )
}

Homepage.propTypes = {
  setUserName: PropTypes.func.isRequired
};

export default Homepage;