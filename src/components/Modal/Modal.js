import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import {
  Header,
  Content,
  Wrapper,
  Title,
  StyledModal,
  Footer,
  CloseButton,
} from './Modal.styled';
import Button from '../Button';

const Modal = ({
  isOpen,
  onRequestClose,
  header,
  footer,
  hasFixedHeader = false,
  height,
  width,
  children,
}) => {
  return (
    <StyledModal
      height={height}
      width={width}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      hasFixedHeader={hasFixedHeader}
    >
      <Wrapper>
        {Boolean(header) && (
          <Header position={header.position}>
            <Title align={header.align}>{header.title}</Title>

            {header.action?.component
              ? header.action.component
              : Boolean(header.action) && (
                <Button
                  variant={header.action.variant}
                  size="medium"
                  shouldBeLoading={header.action.loading}
                  onClick={() => header.action.onClick()}
                >
                  {header.action.title}
                </Button>
              )}

            <CloseButton onClick={() => onRequestClose()}>
              <AiFillCloseCircle />
            </CloseButton>
          </Header>
        )}
        <Content hasFixedHeader={hasFixedHeader}>{children}</Content>

        {Boolean(footer) && <Footer>{footer}</Footer>}
      </Wrapper>
    </StyledModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  hasFixedHeader: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  header: PropTypes.shape({
    title: PropTypes.string,
    align: PropTypes.string,
    action: PropTypes.shape({
      title: PropTypes.string,
      variant: PropTypes.string,
      onClick: PropTypes.func,
      component: PropTypes.node,
      loading: PropTypes.bool,
    }),
    position: PropTypes.oneOf(['right', 'left']),
  }),
  children: PropTypes.node,
  footer: PropTypes.node,
};

export default Modal;
