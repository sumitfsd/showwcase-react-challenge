import React from 'react'
import styled from 'styled-components/macro'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import theme from '../../styles/theme'

function ReactModalAdapter ({ className, modalClassName, ...props }) {
  return (
    <ReactModal
      className={modalClassName}
      portalClassName={className}
      ariaHideApp={false}
      {...props}
    />
  )
}

ReactModalAdapter.propTypes = {
  className: PropTypes.string,
  modalClassName: PropTypes.string
}

// reference - https://github.com/reactjs/react-modal/issues/627#issuecomment-578814799
export const StyledModal = styled(ReactModalAdapter).attrs({
  overlayClassName: 'Overlay',
  modalClassName: 'Modal'
})`
  & .Overlay {
    position: fixed;
    z-index: 9999;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 9999;
    background-color: rgba(0,0,0, 0.6);
    z-index: 9999;
  }
  & .Modal {
    left: ${theme.spacing()};
    top: ${theme.spacing()};
    right: ${theme.spacing()};
    bottom: ${theme.spacing()};
    position: absolute;
    background: ${theme.white};
    border-radius: ${theme.spacing(0.2)};
    outline: none;
    padding: ${theme.spacing()};
    overflow: ${({ hasFixedHeader }) => hasFixedHeader ? 'hidden' : 'auto'};

    ${({ height, width }) => (!!height && !!width) && `
      height: ${height};
      width: ${width};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `};
  }
`

export const Footer = styled.div`
  width: 100%;
  padding-top: ${theme.spacing()};
  margin-bottom: ${theme.spacing()};
`

export const CloseButton = styled.div`
  cursor: pointer;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: ${({ position }) => position === 'right' && 'auto'};
  margin-right: ${({ position }) => position === 'left' && 'auto'};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Title = styled.div`
  font-size: ${theme.spacing(1.5)};
  width: 100%;
  text-align: ${({ align }) => align ? 'center' : 'auto'};
  color: ${({ align }) => align === 'center' ? 'black' : `${theme.mainDark}`};
  font-weight: 500;
`

export const Content = styled.div`
  flex: 1;
  margin-top: ${theme.spacing(1)};
  overflow: ${({ hasFixedHeader }) => hasFixedHeader && 'auto'};  
`
